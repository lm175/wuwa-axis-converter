<template>
  <div class="app">
    <header class="header">
      <h1>鸣潮文字轴转JSON工具</h1>
      <p class="subtitle">通过文字轴导出_D4Rk_标准的Json格式</p>
    </header>

    <main class="main">
      <!-- 左侧输入区 -->
      <section class="panel input-panel">
        <!-- 队伍选择器 -->
        <div class="team-selector">
          <div class="team-selector-title">队伍配置（可选，未选择时将尝试自动识别）</div>
          <div class="team-slots">
            <div class="team-slot">
              <label>1号位</label>
              <select v-model="teamSlot1">
                <option value="">自动识别</option>
                <optgroup v-for="(roles, element) in ROLE_DATABASE" :key="element" :label="element">
                  <option v-for="role in roles" :key="role.presetId" :value="role.name">
                    {{ role.name }}
                  </option>
                </optgroup>
              </select>
            </div>
            <div class="team-slot">
              <label>2号位</label>
              <select v-model="teamSlot2">
                <option value="">自动识别</option>
                <optgroup v-for="(roles, element) in ROLE_DATABASE" :key="element" :label="element">
                  <option v-for="role in roles" :key="role.presetId" :value="role.name">
                    {{ role.name }}
                  </option>
                </optgroup>
              </select>
            </div>
            <div class="team-slot">
              <label>3号位</label>
              <select v-model="teamSlot3">
                <option value="">自动识别</option>
                <optgroup v-for="(roles, element) in ROLE_DATABASE" :key="element" :label="element">
                  <option v-for="role in roles" :key="role.presetId" :value="role.name">
                    {{ role.name }}
                  </option>
                </optgroup>
              </select>
            </div>
            <button class="btn-ghost" @click="clearTeam">清空</button>
          </div>
        </div>

        <div class="panel-header">
          <h2>文字轴输入</h2>
          <button class="btn-ghost" @click="clearInput">清空</button>
        </div>
        <textarea
          v-model="inputText"
          class="input-area"
          placeholder="示例：
长 E，露 E，船 a12，露 R-E，切回长 R-预输入Z，切回船 a12，切回露 a12，长 狂按a-E，船 a，切回露 a34，切回长 跳-a，船 a12，切回长 a34，露 强E，切回船 a，切回长 跳-Q，切回露 Q，延奏船 强E-R-a1-长按Z-a3-Q-闪-a34-强E，延奏长 a-E-预输入Z-R-预输入Z，延奏露 强变R-E"
        ></textarea>

        <div class="syntax-tip">
          <h3>使用说明</h3>
          <ul>
            <li>导出的 JSON 文件可直接导入https://wuwa-afyg.200503.xyz/使用</li>
            <li>兼容社区绝大多数文字轴写法，可直接粘贴解析</li>
            <li>部分特殊写法可能存在识别偏差，导入后可自行微调</li>
            <li>角色识别不准确时，建议上方手动选择队伍配置</li>
          </ul>
        </div>
      </section>

      <!-- 右侧预览区 -->
      <section class="panel output-panel">
        <div class="panel-header">
          <h2>JSON 预览</h2>
          <div class="btn-group">
            <button @click="copyJson" :disabled="!!error">复制JSON</button>
            <button @click="downloadJson" :disabled="!!error">下载文件</button>
          </div>
        </div>

        <div v-if="error" class="error-box">
          <strong>解析出错：</strong>{{ error }}
        </div>

        <pre v-else class="json-preview">{{ outputJson }}</pre>
      </section>
    </main>

    <footer class="footer">
      <!-- <span>生成的 JSON 文件可直接导入椰果排轴工具</span> -->
    </footer>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { textAxisToJson, ROLE_DATABASE } from './utils/axisParser'

const inputText = ref('')
const error = ref('')

// 队伍选择三个槽位
const teamSlot1 = ref('')
const teamSlot2 = ref('')
const teamSlot3 = ref('')

// 组装选定的队伍（按1-2-3号位顺序）
const selectedTeam = computed(() => {
  const slotNames = [teamSlot1.value, teamSlot2.value, teamSlot3.value].filter(Boolean)
  if (slotNames.length === 0) return null

  const team = []
  const allRoles = Object.values(ROLE_DATABASE).flat()
  for (const name of slotNames) {
    const found = allRoles.find(r => r.name === name)
    if (found) team.push(found)
  }
  return team.length > 0 ? team : null
})

// 解析生成JSON
const axisData = computed(() => {
  error.value = ''
  if (!inputText.value.trim()) return null
  try {
    return textAxisToJson(inputText.value, {
      selectedTeam: selectedTeam.value
    })
  } catch (e) {
    error.value = e.message
    return null
  }
})

const outputJson = computed(() => {
  if (!axisData.value) return '// 输入文字轴后自动生成JSON'
  return JSON.stringify(axisData.value, null, 2)
})

function clearInput() {
  inputText.value = ''
}

function clearTeam() {
  teamSlot1.value = ''
  teamSlot2.value = ''
  teamSlot3.value = ''
}

async function copyJson() {
  if (!axisData.value) return
  try {
    await navigator.clipboard.writeText(outputJson.value)
    alert('已复制到剪贴板')
  } catch (e) {
    alert('复制失败，请手动复制')
  }
}

function downloadJson() {
  if (!axisData.value) return
  const blob = new Blob([outputJson.value], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `${axisData.value.metadata.title || 'axis'}.json`
  a.click()
  URL.revokeObjectURL(url)
}
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.app {
  min-height: 100vh;
  background: #f5f7fa;
  display: flex;
  flex-direction: column;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  color: #1f2937;
}

.header {
  padding: 20px 32px;
  background: #fff;
  border-bottom: 1px solid #e5e7eb;
}

.header h1 {
  font-size: 20px;
  font-weight: 600;
}

.subtitle {
  font-size: 13px;
  color: #6b7280;
  margin-top: 4px;
}

.main {
  flex: 1;
  display: flex;
  gap: 16px;
  padding: 16px 32px;
}

.panel {
  flex: 1;
  background: #fff;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

/* 队伍选择器样式 */
.team-selector {
  padding: 12px 16px;
  border-bottom: 1px solid #e5e7eb;
  background: #f9fafb;
}

.team-selector-title {
  font-size: 13px;
  font-weight: 600;
  color: #374151;
  margin-bottom: 8px;
}

.team-slots {
  display: flex;
  gap: 12px;
  align-items: flex-end;
}

.team-slot {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.team-slot label {
  font-size: 12px;
  color: #6b7280;
}

.team-slot select {
  padding: 6px 8px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 13px;
  background: #fff;
  outline: none;
  cursor: pointer;
}

.team-slot select:focus {
  border-color: #3b82f6;
}

.panel-header {
  padding: 12px 16px;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.panel-header h2 {
  font-size: 15px;
  font-weight: 600;
}

.input-area {
  flex: 1;
  width: 100%;
  padding: 12px 16px;
  border: none;
  outline: none;
  resize: none;
  font-family: 'Consolas', 'Monaco', monospace;
  font-size: 14px;
  line-height: 1.6;
}

.syntax-tip {
  padding: 12px 16px;
  border-top: 1px solid #e5e7eb;
  background: #f9fafb;
  font-size: 12px;
  color: #6b7280;
}

.syntax-tip h3 {
  font-size: 13px;
  margin-bottom: 6px;
  color: #374151;
}

.syntax-tip ul {
  padding-left: 18px;
  line-height: 1.8;
}

.json-preview {
  flex: 1;
  padding: 12px 16px;
  overflow: auto;
  font-family: 'Consolas', 'Monaco', monospace;
  font-size: 13px;
  line-height: 1.6;
  background: #f9fafb;
  white-space: pre-wrap;
  word-break: break-all;
}

.error-box {
  padding: 16px;
  margin: 16px;
  background: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 6px;
  color: #b91c1c;
  font-size: 13px;
}

.btn-group {
  display: flex;
  gap: 8px;
}

button {
  padding: 6px 14px;
  border: 1px solid #d1d5db;
  background: #fff;
  border-radius: 6px;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.2s;
}

button:hover:not(:disabled) {
  background: #f3f4f6;
  border-color: #9ca3af;
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn-ghost {
  border: none;
  color: #6b7280;
  background: transparent;
}

.btn-ghost:hover {
  color: #1f2937;
  background: #e5e7eb;
}

.footer {
  padding: 12px 32px;
  text-align: center;
  font-size: 12px;
  color: #9ca3af;
  border-top: 1px solid #e5e7eb;
  background: #fff;
}
</style>