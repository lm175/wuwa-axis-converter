import { ROLE_DATABASE } from './constants'

/**
 * 生成随机ID
 */
export function genId() {
  return Math.random().toString(36).slice(2, 10)
}

/**
 * 文本预处理：统一符号、转小写、去空白
 */
export function preprocessText(text) {
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

/**
 * 根据角色名获取完整信息
 */
export function getRoleInfo(name) {
  const all = Object.values(ROLE_DATABASE).flat()
  return all.find(r => r.name === name)
}