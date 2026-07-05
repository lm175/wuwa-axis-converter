import {
  splitIntoRoleBlocks,
  parseBlockFragment,
  calculateBlockX
} from './parser'
import { genId, preprocessText } from './utils'
import {
  ROLE_DATABASE,
  KEY_ALIAS,
  MODE_ALIAS,
  LAYOUT
} from './constants'

export { ROLE_DATABASE, KEY_ALIAS, MODE_ALIAS, LAYOUT }

/**
 * 主入口：文字轴转JSON结构
 * @param {string} inputText 输入的文字轴文本
 * @param {object} options 配置项
 * @returns 
 */
export function textAxisToJson(inputText, options = {}) {
  try {
    const { title = '', selectedTeam = null } = options
    const cleaned = preprocessText(inputText)

    const candidates = selectedTeam && selectedTeam.length > 0
      ? selectedTeam.filter((r, i, arr) => arr.findIndex(x => x.name === r.name) === i)
      : null

    const rawBlocks = splitIntoRoleBlocks(cleaned, candidates)
    if (rawBlocks.length === 0) {
      throw new Error('未识别到有效轴内容')
    }

    const parsedBlocks = rawBlocks
      .map((block, i) => parseBlockFragment(block, i))
      .filter(Boolean)
    const blocksWithX = calculateBlockX(parsedBlocks)

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

    const defaultTitle = team.map(role => role.name.charAt(0)).join('') || '文字轴导入'
    const finalTitle = title || defaultTitle

    return {
      version: "1.0",
      metadata: { title: finalTitle, description: "", createdAt: now, updatedAt: now },
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