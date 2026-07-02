// ========== 1. 全角色数据库（按元素分类，供UI展示） ==========
export const ROLE_DATABASE = {
  '冷凝': [
    { name: '绯雪', presetId: 'feiXue' },
    { name: '珂莱塔', presetId: 'keLaiTa' },
    { name: '凌阳', presetId: 'lingYang' },
    { name: '洛瑟菈', presetId: 'luoSeLa' },
    { name: '穗穗', presetId: 'suiSui' },
    { name: '折枝', presetId: 'zheZhi' },
    { name: '白芷', presetId: 'baiZhi' },
    { name: '散华', presetId: 'sanHua' },
    { name: '釉瑚', presetId: 'youHu' },
  ],
  '热熔': [
    { name: '爱弥斯', presetId: 'aiMiSi' },
    { name: '安可', presetId: 'anKe' },
    { name: '布兰特', presetId: 'buLanTe' },
    { name: '长离', presetId: 'changLi' },
    { name: '达尼娅', presetId: 'daNiYa' },
    { name: '嘉贝莉娜', presetId: 'jiaBeiLiNa' },
    { name: '露帕', presetId: 'luPa' },
    { name: '莫宁', presetId: 'moNing' },
    { name: '炽霞', presetId: 'chiXia' },
    { name: '莫特斐', presetId: 'moTeFei' },
  ],
  '导电': [
    { name: '漂泊者·导电', presetId: 'piaoBoZheDaoDian' },
    { name: '奥古斯塔', presetId: 'aoGuSiTa' },
    { name: '卡卡罗', presetId: 'kaKaLuo' },
    { name: '丽贝卡', presetId: 'liBeiKa' },
    { name: '相里要', presetId: 'xiangLiYao' },
    { name: '吟霖', presetId: 'yinLin' },
    { name: '卜灵', presetId: 'buLing' },
    { name: '灯灯', presetId: 'dengDeng' },
    { name: '渊武', presetId: 'yuanWu' },
  ],
  '气动': [
    { name: '漂泊者·气动', presetId: 'piaoBoZheQiDong' },
    { name: '鉴心', presetId: 'jianXin' },
    { name: '忌炎', presetId: 'jiYan' },
    { name: '卡提希娅', presetId: 'kaTiXiYa' },
    { name: '仇远', presetId: 'qiuYuan' },
    { name: '夏空', presetId: 'xiaKong' },
    { name: '西格莉卡', presetId: 'xiGeLiKa' },
    { name: '尤诺', presetId: 'youNuo' },
    { name: '秋水', presetId: 'qiuShui' },
    { name: '秧秧', presetId: 'yangYang' },
  ],
  '衍射': [
    { name: '漂泊者·衍射', presetId: 'piaoBoZheYanShe' },
    { name: '菲比', presetId: 'feiBi' },
    { name: '今汐', presetId: 'jinXi' },
    { name: '琳奈', presetId: 'linNai' },
    { name: '陆·赫斯', presetId: 'luHeSi' },
    { name: '露西', presetId: 'luXi' },
    { name: '守岸人', presetId: 'shouAnRen' },
    { name: '维里奈', presetId: 'weiLiNai' },
    { name: '赞妮', presetId: 'zanNi' },
  ],
  '湮灭': [
    { name: '漂泊者·湮灭', presetId: 'piaoBoZheYanMie' },
    { name: '椿', presetId: 'chun' },
    { name: '弗洛洛', presetId: 'fuLuoLuo' },
    { name: '坎特蕾拉', presetId: 'kanTeLeiLa' },
    { name: '洛可可', presetId: 'luoKeKe' },
    { name: '千咲', presetId: 'qianXiao' },
    { name: '秧秧·玄翎', presetId: 'yangYangXuanLing' },
    { name: '丹瑾', presetId: 'danJin' },
    { name: '桃祈', presetId: 'taoQi' },
  ],
}

// ========== 2. 角色别名映射（按角色分组，避免重复键覆盖） ==========
const ROLE_ALIASES = {
  // 冷凝
  '绯雪': ['绯雪', '绯', '雪'],
  '珂莱塔': ['珂莱塔', '柯莱塔', '珂', '柯', '土豆'],
  '凌阳': ['凌阳', '凌', '雪豹', '豹'],
  '洛瑟菈': ['洛瑟菈', '洛', '校长', '菈'],
  '穗穗': ['穗穗', '穗'],
  '折枝': ['折枝', '折'],
  '白芷': ['白芷', '白'],
  '散华': ['散华', '散'],
  '釉瑚': ['釉瑚', '釉'],

  // 热熔
  '爱弥斯': ['爱弥斯', '爱', '小爱', '机兵'],
  '安可': ['安可', '安'],
  '布兰特': ['布兰特', '船长', '船'],
  '长离': ['长离', '长', '离'],
  '达尼娅': ['达尼娅', '达', '娅', '白娅', '黑娅'],
  '嘉贝莉娜': ['嘉贝莉娜', '嘉贝', '嘉', '贝'],
  '露帕': ['露帕', '露'],
  '莫宁': ['莫宁', '莫', '宁'],
  '炽霞': ['炽霞', '炽', '霞', '马小芳', '马', '小芳'],
  '莫特斐': ['莫特斐', '斐', '石头人'],

  // 导电
  '漂泊者·导电': ['漂泊者·导电', '电漂', '雷漂', '电主', '雷主', '雷', '电'],
  '奥古斯塔': ['奥古斯塔', '奥古', '奥', '总督', '日'],
  '卡卡罗': ['卡卡罗', '牢卡', '卡'],
  '丽贝卡': ['丽贝卡', '丽', '贝'],
  '相里要': ['相里要', '里哥', '相', '里', '鸡', '坤'],
  '吟霖': ['吟霖', '吟', '霖'],
  '卜灵': ['卜灵', '卜'],
  '灯灯': ['灯灯', '灯'],
  '渊武': ['渊武', '渊'],

  // 气动
  '漂泊者·气动': ['漂泊者·气动', '风漂', '风主', '风'],
  '鉴心': ['鉴心', '鉴'],
  '忌炎': ['忌炎', '牢忌', '忌'],
  '卡提希娅': ['卡提希娅', '卡提', '小卡', '大卡', '圣女', '芙', '卡'],
  '仇远': ['仇远', '仇', '远'],
  '夏空': ['夏空', '夏'],
  '西格莉卡': ['西格莉卡', '西格', '西西', '粑粑柑', '西'],
  '尤诺': ['尤诺', '尤', '月'],
  '秋水': ['秋水', '秋'],
  '秧秧': ['秧秧', '秧'],

  // 衍射
  '漂泊者·衍射': ['漂泊者·衍射', '光漂', '光主', '光'],
  '菲比': ['菲比', '菲'],
  '今汐': ['今汐', '今', '汐'],
  '琳奈': ['琳奈', '琳', '奈'],
  '陆·赫斯': ['陆·赫斯', '陆赫斯', '陆', '赫斯'],
  '露西': ['露西', '露'],
  '守岸人': ['守岸人', '岸宝', '守', '岸'],
  '维里奈': ['维里奈', '小维', '维'],
  '赞妮': ['赞妮', '赞', '妮'],

  // 湮灭
  '漂泊者·湮灭': ['漂泊者·湮灭', '暗漂', '暗主', '暗'],
  '椿': ['椿'],
  '弗洛洛': ['弗洛洛', '弗'],
  '坎特蕾拉': ['坎特蕾拉', '坎特', '家主', '坎'],
  '洛可可': ['洛可可', '洛'],
  '千咲': ['千咲', '千', '咲'],
  '秧秧·玄翎': ['秧秧·玄翎', '秧秧玄翎', '玄翎', '玄', '翎', '秧秧', '秧'],
  '丹瑾': ['丹瑾', '小西王', '丹', '瑾'],
  '桃祈': ['桃祈', '桃子', '桃', '祈'],
}


// ========== 3. 按键与模式映射 ==========
const KEY_ALIAS = {
  'e': 'E', '技能': 'E', '小技能': 'E', '共鸣技能': 'E',
  'q': 'Q', '声骸': 'Q',
  'r': 'R', '大招': 'R', '解放': 'R', '共鸣解放': 'R',
  'a': 'LMB', 'z': 'LMB', '普攻': 'LMB', '平a': 'LMB', '平z': 'LMB',
  '闪': 'RMB', '闪避': 'RMB',
  '跳': 'jump', '跳跃': 'jump', '空格': 'jump',
  '下落': 'X', '下落攻击': 'X', '下砸': 'X', '下落a': 'X', '落a': 'X',
  't': 'T', '工具': 'T', '探索': 'T', '钩锁': 'T',
  'f': 'F', '处决': 'F', '谐度': 'F', '谐度破坏': 'F', '处': 'F',
  'v': 'V', '空操作': 'V',
  '入场': 'intro', '延奏': 'intro',
}

// 模式修饰词 -> 标准mode值
const MODE_ALIAS = {
  '长按': 'hold', '按住': 'hold', '蓄力': 'hold',
  '狂按': 'rapid_click', '连点': 'rapid_click', '速点': 'rapid_click',
  '预输入': 'preinput_action', '预输': 'preinput_action', '预': 'preinput_action',
  '切人预输': 'preinput_swap',
}

// 强化修饰词
const STRONG_FLAGS = ['强', '强化']
// 入场/延奏修饰词
const INTRO_FLAGS = ['延奏', '变奏', '延', '变']
// 切回/留场衔接修饰词
const STAY_BACK_FLAGS = ['切回', '衔接', '接']

const ROLE_SPECIAL_TERMS = {
  '绯雪': [
    { term: '居合', key: 'LMB', mode: 'click', strong: true },
    { term: '居',   key: 'LMB', mode: 'click', strong: true },
  ],
  '千咲': [
    { term: '电锯终结', key: 'LMB', mode: 'click', strong: true },
    { term: '终结', key: 'LMB', mode: 'click', strong: true },
  ],
  '爱弥斯': [
    { term: '光翼共奏', key: 'E', mode: 'click', strong: true },
    { term: '光翼', key: 'E', mode: 'click', strong: true },
  ],
  '卡提希娅': [
    { term: '三剑下落', key: 'X', mode: 'click', strong: true },
    { term: '三剑', key: 'X', mode: 'click', strong: true },
    { term: '下落', key: 'X', mode: 'click', strong: true },
  ],
  '奥古斯塔': [
    { term: '旋切', key: 'LMB', mode: 'hold', strong: true },
    { term: '旋', key: 'LMB', mode: 'hold', strong: true },
    { term: '升拳', key: 'jump', mode: 'click', strong: true },
    { term: '升', key: 'jump', mode: 'click', strong: true },
  ],
  '卡卡罗': [
    { term: '死告', key: 'LMB', mode: 'hold', strong: true },
  ],
  '今汐': [
    { term: '龙喷', key: 'E', mode: 'click', strong: true },
    { term: '喷', key: 'E', mode: 'click', strong: true },
  ],
  '守岸人': [
    { term: '洞悉', key: 'intro', mode: 'click', strong: true },
    { term: '强变', key: 'intro', mode: 'click', strong: true },
  ],
  '露帕': [
    { term: '你无法逃离！', key: 'intro', mode: 'click', strong: true },
    { term: '强变', key: 'intro', mode: 'click', strong: true },
  ],
  '赞妮': [
    { term: '终夜', key: 'LMB', mode: 'click', strong: true },
    { term: '终', key: 'LMB', mode: 'click', strong: true },
  ],
  '仇远': [
    { term: '答剑', key: 'LMB', mode: 'hold', strong: true },
    { term: '一日竹', key: 'LMB', mode: 'hold', strong: true },
  ],
  '西格莉卡': [
    { term: '我即语义', key: 'E', mode: 'click', strong: true },
    { term: '一日灵', key: 'E', mode: 'click', strong: true },
  ],
  '椿': [
    { term: '一日花', key: 'E', mode: 'click', strong: true },
    { term: '永生花', key: 'E', mode: 'click', strong: true },
    { term: '花', key: 'E', mode: 'click', strong: true },
  ],
  '弗洛洛': [
    { term: '谱曲终末', key: 'LMB', mode: 'hold', strong: true },
    { term: '一日谱', key: 'LMB', mode: 'hold', strong: true },
    { term: '谱', key: 'LMB', mode: 'hold', strong: true },
  ],
  '坎特蕾拉': [
    { term: '感知汲取', key: 'E', mode: 'click', strong: true },
    { term: '一日吸', key: 'E', mode: 'click', strong: true },
    { term: '吸', key: 'E', mode: 'click', strong: true },
  ],
}

// ========== 4. 布局常量 ==========
const LAYOUT = {
  startX: 4,
  blockPadding: 7,
  actionGap: 2,
  baseWidth: {
    click: 20,
    hold: 49,
    preinput_action: 49,
    preinput_swap: 49,
    rapid_click: 49,
  },
  comboBase: 11,
  comboExtraPer: 5,
}

// 快速查询：角色名 -> 完整信息
const getRoleInfo = (name) => {
  const all = Object.values(ROLE_DATABASE).flat()
  return all.find(r => r.name === name)
}

// ========== 基础工具函数 ==========
function genId() {
  return Math.random().toString(36).slice(2, 10)
}

function preprocessText(text) {
  return text
    .replace(/→|->|➡️/g, ',')
    .replace(/，/g, ',')
    .replace(/；/g, ';')
    .replace(/、/g, '-')
    .replace(/（/g, '(').replace(/）/g, ')')
    .replace(/【/g, '(').replace(/】/g, ')')
    .replace(/\((变奏|变)\)|（(变奏|变)）/g, '变')
    .replace(/\((延奏|延)\)|（(延奏|延)）/g, '延')
    .replace(/\n/g, ',')
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .trim()
}
// ========== 候选角色别名映射构建 ==========
/**
 * 根据候选队伍构建无冲突别名映射
 * 规则：按角色名长度升序（原生短名角色优先），别名先到先得，重复的直接跳过
 */
function buildCandidateAliasMap(candidates) {
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
/**
 * 在字符串起始位置匹配「修饰前缀 + 角色名」组合
 * 返回 { role, isStayBack, isIntro, consumed } 或 null
 * 支持多前缀连写（如"切回变"、"变切回"）
 */
function matchRoleWithPrefix(str, aliasMap) {
  let offset = 0
  let isStayBack = false
  let isIntro = false

  let hasPrefix = true
  while (hasPrefix) {
    hasPrefix = false
    // 匹配切回/衔接类前缀
    for (const flag of STAY_BACK_FLAGS) {
      if (str.slice(offset).startsWith(flag)) {
        isStayBack = true
        offset += flag.length
        hasPrefix = true
        break
      }
    }
    // 匹配入场/延奏类前缀
    for (const flag of INTRO_FLAGS) {
      if (str.slice(offset).startsWith(flag)) {
        isIntro = true
        offset += flag.length
        hasPrefix = true
        break
      }
    }
  }

  // 跳过前缀后的空格
  while (str[offset] === ' ') offset++

  // 最长优先匹配角色别名
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

// ========== 智能切块（新增括号跳过，避免注释误识别为角色） ==========
function splitIntoRoleBlocks(text, candidates = null) {
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

  while (i < len) {
    // ✅ 核心修复：遇到括号直接整块跳过，不参与角色匹配
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

    // 跳过分隔符与纯数字轮次标记
    if (',; '.includes(text[i]) || /\d/.test(text[i])) {
      i++
      continue
    }

    // 仅在括号外区域匹配前缀+角色
    const matchResult = matchRoleWithPrefix(text.slice(i), aliasMap)
    if (!matchResult) {
      i++
      continue
    }

    const roleEndPos = i + matchResult.consumed

    // 检查角色名后方是否紧跟入场修饰词（后缀写法）
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

    // ✅ 向后查找下一个角色时，同样跳过括号内的注释内容
    let opEndPos = len
    let searchPos = opStartPos
    let searchBracketDepth = 0

    while (searchPos < len) {
      // 维护括号深度
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

      // 仅在括号外进行分隔符跳过和角色匹配
      if (searchBracketDepth === 0) {
        if (',; '.includes(text[searchPos])) {
          searchPos++
          continue
        }
        const nextMatch = matchRoleWithPrefix(text.slice(searchPos), aliasMap)
        if (nextMatch) {
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
/**
 * 逐字符扫描解析操作，支持连写、横杠、空格、点号分隔
 * 兼容 eqr1aa、a12、长按z、强E、角色专属术语、逐操作括号备注
 * 括号默认挂载到**前一个操作**，符合 操作(备注) 的书写习惯
 * @param {string} opStr 操作字符串
 * @param {string} roleName 当前角色名，用于匹配专属术语
 */
function parseOperationSequence(opStr, roleName = '') {
  const ops = []
  let i = 0
  const len = opStr.length
  let leadingComment = '' // 开头无主括号，兜底挂到第一个操作

  // 按长度降序排序，保证最长优先匹配
  const sortedModeEntries = Object.entries(MODE_ALIAS).sort((a, b) => b[0].length - a[0].length)
  const sortedStrongFlags = [...STRONG_FLAGS].sort((a, b) => b.length - a.length)
  const sortedKeyAliases = Object.keys(KEY_ALIAS).sort((a, b) => b.length - a.length)
  
  // 当前角色的专属术语（按长度降序，长术语优先匹配）
  const roleTerms = roleName && ROLE_SPECIAL_TERMS[roleName]
    ? [...ROLE_SPECIAL_TERMS[roleName]].sort((a, b) => b.term.length - a.term.length)
    : []

  while (i < len) {
    // 跳过分隔符
    while (i < len && '- .,'.includes(opStr[i])) i++
    if (i >= len) break

    // 开头无主括号处理：还没解析到操作时遇到括号，先暂存
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

    // 循环匹配修饰词（支持多修饰词连写）
    let modifierMatched = true
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

    let key = null
    let matchedTerm = null

    // 优先匹配角色专属术语（优先级高于通用按键）
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

    // 未匹配到术语时，走通用按键匹配逻辑
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

    // 应用术语默认属性 + 重击z默认逻辑
    if (matchedTerm) {
      strong = strong || matchedTerm.strong
      if (mode === 'click') {
        mode = matchedTerm.mode
      }
    } else if (isHeavyAttack && mode === 'click') {
      mode = 'hold'
    }

    // 匹配连击数字
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

    // 组装当前操作
    const op = { key, mode }
    if (comboStart !== null) {
      op.comboStart = comboStart
      op.comboEnd = comboEnd
    }
    if (strong) op.strong = true

    // 1. 挂载开头暂存的无主备注（仅第一个操作生效）
    if (leadingComment) {
      op.comment = leadingComment
      leadingComment = ''
    }

    // 向后扫描操作后的括号，挂载到当前这个刚解析完的操作
    while (true) {
      // 跳过操作与括号之间的分隔符
      let tempI = i
      while (tempI < len && '- .,'.includes(opStr[tempI])) tempI++
      
      if (tempI < len && opStr[tempI] === '(') {
        const closeIdx = opStr.indexOf(')', tempI)
        if (closeIdx !== -1) {
          const commentText = opStr.slice(tempI + 1, closeIdx).trim()
          // 追加到当前操作的备注中，多个括号用空格拼接
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

  // 连段合并
  const mergedOps = []
  for (const op of ops) {
    const last = mergedOps[mergedOps.length - 1]

    // 合并条件：按键/模式/强化完全一致，且双方都带有连击段数，且都无注释
    const canMerge =
      last &&
      last.key === op.key &&
      last.mode === op.mode &&
      !!last.strong === !!op.strong &&
      last.comboStart != null &&
      op.comboStart != null &&
      !last.comment &&
      !op.comment

    if (canMerge) {
      // 合并为从最左到最右的连续段
      last.comboEnd = Math.max(last.comboEnd, op.comboEnd)
    } else {
      mergedOps.push({ ...op })
    }
  }

  return mergedOps
}

// ========== 单块片段解析 ==========
function parseBlockFragment(blockData, index) {
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

    // 空块自动补V空操作
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

// ========== 单动作宽度计算 ==========
function calcActionWidth(op) {
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

  return base + comboWidth
}

// ========== X坐标计算 ==========
function calculateBlockX(parsedBlocks) {
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

    currentX += blockTotalWidth
  }

  return result
}

// ========== 主入口（完全向后兼容） ==========
export function textAxisToJson(inputText, options = {}) {
  try {
    const { title = '文字轴导入', selectedTeam = null } = options
    const cleaned = preprocessText(inputText)

    // 候选队伍预处理：去重、保留原顺序
    const candidates = selectedTeam && selectedTeam.length > 0
      ? selectedTeam.filter((r, i, arr) => arr.findIndex(x => x.name === r.name) === i)
      : null

    // 智能切块
    const rawBlocks = splitIntoRoleBlocks(cleaned, candidates)
    if (rawBlocks.length === 0) {
      throw new Error('未识别到有效轴内容')
    }

    // 逐块解析 + 坐标计算
    const parsedBlocks = rawBlocks
      .map((block, i) => parseBlockFragment(block, i))
      .filter(Boolean)
    const blocksWithX = calculateBlockX(parsedBlocks)

    // 生成队伍配置
    const roleMap = new Map()
    const team = []
    const now = new Date().toISOString()

    if (candidates) {
      candidates.forEach(roleInfo => {
        const roleId = genId()
        roleMap.set(roleInfo.name, roleId)
        team.push({
          id: roleId,
          name: roleInfo.name,
          presetId: roleInfo.presetId
        })
      })
    } else {
      blocksWithX.forEach(block => {
        if (!roleMap.has(block.roleName)) {
          const roleId = genId()
          roleMap.set(block.roleName, roleId)
          team.push({
            id: roleId,
            name: block.roleName,
            presetId: block.presetId
          })
        }
      })
    }

    // 组装方块与留场标记
    const blocks = []
    const stayFieldMarkers = []
    const lastBlockIdMap = new Map()

    blocksWithX.forEach(block => {
      const blockId = genId()
      const characterId = roleMap.get(block.roleName)

      if (block.isStayBack && lastBlockIdMap.has(block.roleName)) {
        stayFieldMarkers.push({
          id: genId(),
          characterId: characterId,
          fromBlockId: lastBlockIdMap.get(block.roleName),
          toBlockId: blockId
        })
      }

      blocks.push({
        id: blockId,
        characterId: characterId,
        label: '',
        x: block.x,
        isIntro: block.isIntro,
        introOverride: null,
        keyOps: block.keyOps,
        customIcons: []
      })

      lastBlockIdMap.set(block.roleName, blockId)
    })

    return {
      version: "1.0",
      metadata: { title, description: "", createdAt: now, updatedAt: now },
      team,
      rotation: {
        blocks,
        swapLinks: [],
        stayFieldMarkers
      }
    }
  } catch (err) {
    return {
      success: false,
      error: `解析异常：${err.message}`,
      data: null
    }
  }
}

export { KEY_ALIAS, MODE_ALIAS, LAYOUT }