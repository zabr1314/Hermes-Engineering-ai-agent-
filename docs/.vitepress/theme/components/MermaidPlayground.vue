<template>
  <div class="playground-wrapper">
    <div class="playground-header">
      <span class="playground-icon">🎮</span>
      <span class="playground-title">{{ title || 'Mermaid Playground' }}</span>
      <button class="playground-btn" @click="expanded = !expanded">
        {{ expanded ? '收起' : '打开编辑器' }}
      </button>
    </div>
    <div v-if="expanded" class="playground-body">
      <div class="playground-editor">
        <textarea
          v-model="code"
          class="playground-textarea"
          spellcheck="false"
          @input="updatePreview"
        ></textarea>
      </div>
      <div class="playground-preview">
        <div v-if="error" class="playground-error">{{ error }}</div>
        <div v-else class="playground-diagram" v-html="svg"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'

const props = defineProps({
  title: { type: String, default: '' },
  initialCode: { type: String, default: '' }
})

const expanded = ref(false)
const code = ref(props.initialCode)
const svg = ref('')
const error = ref('')

let mermaid = null

onMounted(async () => {
  if (typeof window !== 'undefined') {
    mermaid = (await import('mermaid')).default
    mermaid.initialize({
      startOnLoad: false,
      theme: 'default',
      securityLevel: 'loose'
    })
    updatePreview()
  }
})

function updatePreview() {
  if (!mermaid || !code.value.trim()) return
  try {
    const id = 'mermaid-' + Date.now()
    mermaid.render(id, code.value).then(({ svg: renderedSvg }) => {
      svg.value = renderedSvg
      error.value = ''
    }).catch(e => {
      error.value = '图表语法错误：' + e.message
    })
  } catch (e) {
    error.value = '图表语法错误：' + e.message
  }
}

watch(() => props.initialCode, (newCode) => {
  code.value = newCode
  updatePreview()
})
</script>

<style scoped>
.playground-wrapper {
  border: 1px solid var(--vp-c-divider);
  border-radius: var(--vp-border-radius);
  margin: 24px 0;
  overflow: hidden;
}

.playground-header {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  background: var(--vp-c-bg-soft);
  border-bottom: 1px solid var(--vp-c-divider);
}

.playground-icon {
  font-size: 1.2rem;
}

.playground-title {
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--vp-c-text-1);
  flex: 1;
}

.playground-btn {
  background: var(--vp-c-brand-1);
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 6px 16px;
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
}

.playground-btn:hover {
  background: var(--vp-c-brand-3);
}

.playground-body {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 300px;
}

@media (max-width: 768px) {
  .playground-body {
    grid-template-columns: 1fr;
  }
}

.playground-editor {
  border-right: 1px solid var(--vp-c-divider);
}

.playground-textarea {
  width: 100%;
  height: 100%;
  min-height: 300px;
  padding: 16px;
  border: none;
  outline: none;
  resize: vertical;
  font-family: var(--vp-font-family-mono);
  font-size: 0.85rem;
  line-height: 1.6;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
}

.playground-preview {
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--vp-c-bg);
  overflow: auto;
}

.playground-error {
  color: #ef4444;
  font-size: 0.9rem;
  padding: 12px;
  background: #fef2f2;
  border-radius: 6px;
  width: 100%;
}

.dark .playground-error {
  background: #3b1111;
}

.playground-diagram {
  width: 100%;
  text-align: center;
}

.playground-diagram :deep(svg) {
  max-width: 100%;
  height: auto;
}
</style>
