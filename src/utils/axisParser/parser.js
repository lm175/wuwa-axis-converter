import {
  ROLE_ALIASES,
  INTRO_FLAGS,
  STAY_BACK_FLAGS,
  STRONG_FLAGS,
  MODE_ALIAS,
  KEY_ALIAS,
  ROLE_SPECIAL_TERMS,
  LAYOUT,
  KEY_FLAGS
} from './constants'
import { getRoleInfo } from './utils'

// ========== 候选角色别名映射构建 ==========
export function buildCandidateAliasMap(candidates) {
  const aliasMap = new Map()
  const sortedRoles = [...candidates].sort((a, b) => a.name.length - b.name.length)

  for (const role of sortedRoles) {
    const aliases = ROLE_ALIASES[role.name] || []
    for (const alias of aliases) {
      if (!aliasMap.has(alias)) {
        aliasMap.set(alias, role)
      }
    }
  }
  return aliasMap
}

// ========== 前缀+角色联合匹配 ==========
export function matchRoleWithPrefix(str, aliasMap) {
  let offset = 0
  let isStayBack = false
  let isIntro = false

  let hasPrefix = true
  while (hasPrefix) {
    hasPrefix = false
    for (const flag of STAY_BACK_FLAGS) {
      if (str.slice(offset).startsWith(flag)) {
        isStayBack = true
        offset += flag.length
        hasPrefix = true
        break
      }
    }
    for (const flag of INTRO_FLAGS) {
      if (str.slice(offset).startsWith(flag)) {
        isIntro = true
        offset += flag.length
        hasPrefix = true
        break
      }
    }
  }

  while (str[offset] === ' ') offset++

  let bestRole = null
  let maxLen = 0
  for (const [alias, role] of aliasMap.entries()) {
    if (str.slice(offset).startsWith(alias) && alias.length > maxLen) {
      maxLen = alias.length
      bestRole = role
    }
  }

  if (!bestRole) return null

  return {
    role: bestRole,
    isStayBack,
    isIntro,
    consumed: offset + maxLen
  }
}

// ========== 智能切块 ==========
export function splitIntoRoleBlocks(text, candidates = null) {
  const aliasMap = candidates && candidates.length > 0
    ? buildCandidateAliasMap(candidates)
    : (() => {
        const map = new Map()
        for (const [name, aliases] of Object.entries(ROLE_ALIASES)) {
          const roleInfo = getRoleInfo(name)
          if (roleInfo) {
            for (const alias of aliases) {
              if (!map.has(alias)) map.set(alias, roleInfo)
            }
          }
        }
        return map
      })()

  const blocks = []
  let i = 0
  const len = text.length
  const sortedIntroFlags = [...INTRO_FLAGS].sort((a, b) => b.length - a.length)
  const allSpecialTerms = Object.values(ROLE_SPECIAL_TERMS).flat().map(item => item.term)
  const allModifierFlags = [
    ...INTRO_FLAGS,
    ...STAY_BACK_FLAGS,
    ...STRONG_FLAGS,
    ...KEY_FLAGS,
    ...Object.keys(MODE_ALIAS),
    ...allSpecialTerms
  ].filter((item, index, arr) => arr.indexOf(item) === index)
    .sort((a, b) => b.length - a.length)

  const explicitDelimiters = [',', ';', '→']
  let delimiterCount = 0
  for (const char of text) {
    if (explicitDelimiters.includes(char)) delimiterCount++
  }
  const isExplicitDelimiterMode = delimiterCount >= 2

  function isValidBlockStart(pos) {
    if (pos <= 0) return true
    let p = pos - 1
    while (p >= 0 && text[p] === ' ') p--
    if (p < 0) return true
    return ',;)'.includes(text[p])
  }

  function isCommonWordAfterRole(roleEndPos) {
    let p = roleEndPos
    while (p < len && text[p] === ' ') p++
    if (p >= len) return false
    if (!/[\u4e00-\u9fa5]/.test(text[p])) return false
    for (const flag of allModifierFlags) {
      if (text.slice(p).startsWith(flag)) return false
    }
    return true
  }

  while (i < len) {
    if (text[i] === '(') {
      let bracketDepth = 1
      i++
      while (i < len && bracketDepth > 0) {
        if (text[i] === '(') bracketDepth++
        if (text[i] === ')') bracketDepth--
        i++
      }
      continue
    }

    if (',; '.includes(text[i]) || /\d/.test(text[i])) {
      i++
      continue
    }

    if (isExplicitDelimiterMode && !isValidBlockStart(i)) {
      i++
      continue
    }

    const matchResult = matchRoleWithPrefix(text.slice(i), aliasMap)
    if (!matchResult) {
      i++
      continue
    }

    const roleEndPos = i + matchResult.consumed
    const pureAliasLength = text.slice(i, roleEndPos).replace(/\s/g, '').length
    if (pureAliasLength === 1 && isCommonWordAfterRole(roleEndPos)) {
      i++
      continue
    }

    let afterRoleOffset = 0
    while (text[roleEndPos + afterRoleOffset] === ' ') {
      afterRoleOffset++
    }
    const afterRoleStr = text.slice(roleEndPos + afterRoleOffset)
    for (const flag of sortedIntroFlags) {
      if (afterRoleStr.startsWith(flag)) {
        matchResult.isIntro = true
        afterRoleOffset += flag.length
        break
      }
    }
    const opStartPos = roleEndPos + afterRoleOffset

    let opEndPos = len
    let searchPos = opStartPos
    let searchBracketDepth = 0

    while (searchPos < len) {
      if (text[searchPos] === '(') {
        searchBracketDepth++
        searchPos++
        continue
      }
      if (text[searchPos] === ')') {
        searchBracketDepth--
        searchPos++
        continue
      }

      if (searchBracketDepth === 0) {
        if (',; '.includes(text[searchPos])) {
          searchPos++
          continue
        }
        if (isExplicitDelimiterMode && !isValidBlockStart(searchPos)) {
          searchPos++
          continue
        }

        const nextMatch = matchRoleWithPrefix(text.slice(searchPos), aliasMap)
        if (nextMatch) {
          const nextRoleEnd = searchPos + nextMatch.consumed
          const nextPureAliasLen = text.slice(searchPos, nextRoleEnd).replace(/\s/g, '').length
          if (nextPureAliasLen === 1 && isCommonWordAfterRole(nextRoleEnd)) {
            searchPos++
            continue
          }
          opEndPos = searchPos
          break
        }
      }
      searchPos++
    }

    const opStr = text.slice(opStartPos, opEndPos).trim()
    blocks.push({
      role: matchResult.role,
      isStayBack: matchResult.isStayBack,
      isIntro: matchResult.isIntro,
      opStr
    })

    i = opEndPos
  }

  return blocks
}

// ========== 流式词法解析操作序列 ==========
export function parseOperationSequence(opStr, roleName = '') {
  const ops = []
  let i = 0
  const len = opStr.length
  let leadingComment = ''

  const sortedModeEntries = Object.entries(MODE_ALIAS).sort((a, b) => b[0].length - a[0].length)
  const sortedStrongFlags = [...STRONG_FLAGS].sort((a, b) => b.length - a.length)
  const sortedKeyAliases = Object.keys(KEY_ALIAS).sort((a, b) => b.length - a.length)
  
  const roleTerms = roleName && ROLE_SPECIAL_TERMS[roleName]
    ? [...ROLE_SPECIAL_TERMS[roleName]].sort((a, b) => b.term.length - a.term.length)
    : []

  while (i < len) {
    while (i < len && '- .,'.includes(opStr[i])) i++
    if (i >= len) break

    if (opStr[i] === '(' && ops.length === 0) {
      const closeIdx = opStr.indexOf(')', i)
      if (closeIdx !== -1) {
        const text = opStr.slice(i + 1, closeIdx).trim()
        leadingComment += (leadingComment ? ' ' : '') + text
        i = closeIdx + 1
      } else {
        i++
      }
      continue
    }

    let mode = 'click'
    let strong = false
    let isHeavyAttack = false
    let modifierMatched = true

    let key = null
    let matchedTerm = null
    // 匹配角色专属术语
    if (roleTerms.length > 0) {
      for (const termItem of roleTerms) {
        if (opStr.slice(i).startsWith(termItem.term)) {
          matchedTerm = termItem
          key = termItem.key
          i += termItem.term.length
          break
        }
      }
    }
    // 通用修饰符+按键
    if (!matchedTerm) {
      while (modifierMatched) {
        modifierMatched = false
        for (const [flag, modeValue] of sortedModeEntries) {
          if (opStr.slice(i).startsWith(flag)) {
            mode = modeValue
            i += flag.length
            modifierMatched = true
            break
          }
        }
        for (const flag of sortedStrongFlags) {
          if (opStr.slice(i).startsWith(flag)) {
            strong = true
            i += flag.length
            modifierMatched = true
            break
          }
        }
      }
    }

    if (!key) {
      for (const alias of sortedKeyAliases) {
        if (opStr.slice(i).startsWith(alias)) {
          key = KEY_ALIAS[alias]
          if (alias === 'z') isHeavyAttack = true
          i += alias.length
          break
        }
      }
    }

    if (!key) {
      i++
      continue
    }

    if (matchedTerm) {
      strong = strong || matchedTerm.strong
      if (mode === 'click') {
        mode = matchedTerm.mode
      }
    } else if (isHeavyAttack && mode === 'click') {
      mode = 'hold'
    }

    let comboStart = null
    let comboEnd = null
    let numStr = ''
    while (i < len && /\d/.test(opStr[i])) {
      numStr += opStr[i]
      i++
    }

    if (numStr) {
      if (numStr.length >= 2) {
        comboStart = parseInt(numStr[0])
        comboEnd = parseInt(numStr[numStr.length - 1])
      } else {
        comboStart = parseInt(numStr)
        comboEnd = parseInt(numStr)
      }
    }

    const op = { key, mode }
    if (comboStart !== null) {
      op.comboStart = comboStart
      op.comboEnd = comboEnd
    }
    if (strong) op.strong = true

    if (leadingComment) {
      op.comment = leadingComment
      leadingComment = ''
    }

    while (true) {
      let tempI = i
      while (tempI < len && '- .,'.includes(opStr[tempI])) tempI++
      
      if (tempI < len && opStr[tempI] === '(') {
        const closeIdx = opStr.indexOf(')', tempI)
        if (closeIdx !== -1) {
          const commentText = opStr.slice(tempI + 1, closeIdx).trim()
          op.comment = op.comment
            ? op.comment + ' ' + commentText
            : commentText
          i = closeIdx + 1
        } else {
          i = tempI + 1
          break
        }
      } else {
        break
      }
    }

    ops.push(op)
  }

  const mergedOps = []
  for (const op of ops) {
    const last = mergedOps[mergedOps.length - 1]

    const canMerge =
      last &&
      last.key === op.key &&
      last.mode === op.mode &&
      !!last.strong === !!op.strong &&
      last.comboStart != null &&
      op.comboStart != null &&
      op.comboStart === last.comboEnd + 1 && // 仅连续递增的段才合并
      !last.comment &&
      !op.comment

    if (canMerge) {
      last.comboEnd = Math.max(last.comboEnd, op.comboEnd)
    } else {
      mergedOps.push({ ...op })
    }
  }

  return mergedOps
}

// ========== 单块片段解析 ==========
export function parseBlockFragment(blockData, index) {
  try {
    const { role, isStayBack, isIntro, opStr } = blockData
    if (!role) throw new Error(`第${index + 1}段无法识别角色`)

    const keyOps = []
    if (isIntro) {
      keyOps.push({ key: 'intro', mode: 'click' })
    }

    if (opStr) {
      const parsedOps = parseOperationSequence(opStr, role.name)
      keyOps.push(...parsedOps)
    }

    // 合并重复的入场/变奏操作（延露强变、延守洞悉等）
    const introOps = keyOps.filter(op => op.key === 'intro')
    if (introOps.length > 1) {
      const mergedIntro = introOps.reduce((prev, curr) => ({
        ...prev,
        ...curr,
        strong: prev.strong || curr.strong
      }), {})
      const otherOps = keyOps.filter(op => op.key !== 'intro')
      keyOps.length = 0
      keyOps.push(mergedIntro, ...otherOps)
    }

    if (keyOps.length === 0) {
      keyOps.push({ key: 'V', mode: 'click' })
    }

    return {
      roleName: role.name,
      presetId: role.presetId,
      isIntro,
      isStayBack,
      keyOps
    }
  } catch {
    return null
  }
}

// ========== 注释宽度计算 ==========
function calcCommentWidth(comment) {
  if (!comment || !comment.trim()) return 0
  
  let widthUnits = 0
  for (const char of comment) {
    // 汉字、中文标点、全角符号计 2 个宽度单位
    if (/[\u4e00-\u9fa5\u3000-\u303f\uff00-\uffef]/.test(char)) {
      widthUnits += 2
    } else {
      // 英文、数字、半角符号计 1 个宽度单位
      widthUnits += 1
    }
  }

  if (widthUnits <= 0) return 0
  // 1个单位基础宽度15，每多1个单位加5
  return 15 + (widthUnits - 1) * 5
}

// ========== 单动作宽度计算 ==========
export function calcActionWidth(op) {
  let base
  if (op.key === 'LMB' && op.mode === 'hold') {
    base = LAYOUT.baseWidth.click
  } else {
    base = LAYOUT.baseWidth[op.mode] ?? LAYOUT.baseWidth.click
  }

  let comboWidth = 0
  if (op.comboStart != null && op.comboEnd != null) {
    const segCount = op.comboEnd - op.comboStart + 1
    comboWidth = LAYOUT.comboBase + (segCount - 1) * LAYOUT.comboExtraPer
  }

  const commentWidth = calcCommentWidth(op.comment)
  return base + comboWidth + commentWidth
}

// ========== X坐标计算 ==========
export function calculateBlockX(parsedBlocks) {
  let currentX = LAYOUT.startX
  const result = []

  for (const block of parsedBlocks) {
    const ops = block.keyOps
    const opCount = ops.length

    const opsTotalWidth = ops.reduce((sum, op) => sum + calcActionWidth(op), 0)
    const gapsTotalWidth = opCount > 1 ? (opCount - 1) * LAYOUT.actionGap : 0
    const blockTotalWidth = LAYOUT.blockPadding * 2 + opsTotalWidth + gapsTotalWidth

    result.push({
      ...block,
      x: currentX,
      _blockWidth: blockTotalWidth
    })

    currentX += blockTotalWidth - 1
  }

  return result
}