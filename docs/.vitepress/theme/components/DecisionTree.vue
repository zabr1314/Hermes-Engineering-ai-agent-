<template>
  <div class="tree-wrapper">
    <div class="tree-header">
      <span class="tree-icon">🌳</span>
      <span class="tree-title">交互式决策树</span>
      <button v-if="history.length > 0" class="tree-reset" @click="reset">重置</button>
    </div>
    <div class="tree-body">
      <div class="tree-question">
        <p class="tree-q-text">{{ currentNode.question }}</p>
        <div class="tree-options">
          <button
            v-for="(option, i) in currentNode.options"
            :key="i"
            class="tree-option"
            :class="{ selected: selectedOption === i }"
            @click="selectOption(i)"
          >
            <span class="tree-option-icon">{{ option.icon }}</span>
            <span class="tree-option-text">{{ option.text }}</span>
          </button>
        </div>
      </div>
      <div v-if="history.length > 0" class="tree-path">
        <span class="tree-path-label">你的路径：</span>
        <span v-for="(h, i) in history" :key="i" class="tree-path-step">
          {{ h }}
          <span v-if="i < history.length - 1" class="tree-path-arrow">→</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const tree = {
  question: '你的任务复杂吗？能用一个 Prompt 说清楚吗？',
  options: [
    {
      text: '能，一个 Prompt 就够了',
      icon: '✅',
      result: {
        title: '单 LLM 节点',
        desc: '你的任务不需要编排。用一个好 Prompt + 合适的模型就行。',
        color: '#10b981'
      }
    },
    {
      text: '不能，需要多个步骤',
      icon: '🔀',
      next: {
        question: '不同类型的输入需要走不同处理路径吗？',
        options: [
          {
            text: '需要（如客服分流）',
            icon: '🚦',
            result: {
              title: 'Routing 模式',
              desc: '先判断输入类型，再分发到不同处理路径。',
              color: '#3b82f6'
            }
          },
          {
            text: '不需要，步骤固定',
            icon: '🔗',
            next: {
              question: '步骤之间可以并行执行吗？',
              options: [
                {
                  text: '可以并行',
                  icon: '⚡',
                  next: {
                    question: '子任务能事先确定吗？',
                    options: [
                      {
                        text: '能，任务明确',
                        icon: '📋',
                        result: {
                          title: 'Sectioning 模式',
                          desc: '同质任务拆分并行，各自独立完成后合并。',
                          color: '#8b5cf6'
                        }
                      },
                      {
                        text: '不能，需要动态拆分',
                        icon: '🎯',
                        next: {
                          question: '需要迭代优化质量吗？',
                          options: [
                            {
                              text: '需要（如写作/方案设计）',
                              icon: '🔄',
                              result: {
                                title: 'Evaluator-Optimizer',
                                desc: '一个 Agent 做，另一个 Agent 评价，循环直到质量达标。',
                                color: '#ec4899'
                              }
                            },
                            {
                              text: '不需要',
                              icon: '🏗️',
                              result: {
                                title: 'Orchestrator-Workers',
                                desc: '一个 Orchestrator 动态拆分任务，多个 Worker 并行执行。',
                                color: '#f59e0b'
                              }
                            }
                          ]
                        }
                      }
                    ]
                  }
                },
                {
                  text: '必须串行',
                  icon: '➡️',
                  result: {
                    title: 'Prompt Chaining',
                    desc: '步骤串联执行，每步输出是下一步输入。可加 gate 做质量检查。',
                    color: '#06b6d4'
                  }
                }
              ]
            }
          }
        ]
      }
    }
  ]
}

const currentNode = ref(tree)
const history = ref([])
const selectedOption = ref(-1)

function selectOption(index) {
  selectedOption.value = index
  const option = currentNode.value.options[index]
  history.value.push(option.text)

  if (option.result) {
    // Show result
    setTimeout(() => {
      currentNode.value = {
        question: `🎯 推荐：${option.result.title}`,
        options: [
          {
            text: option.result.desc,
            icon: '',
            result: option.result
          },
          {
            text: '重新选择',
            icon: '🔄',
            action: 'reset'
          }
        ]
      }
      selectedOption.value = -1
    }, 300)
  } else if (option.next) {
    setTimeout(() => {
      currentNode.value = option.next
      selectedOption.value = -1
    }, 300)
  } else if (option.action === 'reset') {
    reset()
  }
}

function reset() {
  currentNode.value = tree
  history.value = []
  selectedOption.value = -1
}
</script>

<style scoped>
.tree-wrapper {
  border: 1px solid var(--vp-c-divider);
  border-radius: var(--vp-border-radius);
  margin: 24px 0;
  overflow: hidden;
}

.tree-header {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  background: var(--vp-c-bg-soft);
  border-bottom: 1px solid var(--vp-c-divider);
}

.tree-icon { font-size: 1.2rem; }

.tree-title {
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--vp-c-text-1);
  flex: 1;
}

.tree-reset {
  background: none;
  border: 1px solid var(--vp-c-border);
  border-radius: 6px;
  padding: 4px 12px;
  font-size: 0.8rem;
  color: var(--vp-c-text-2);
  cursor: pointer;
  transition: all 0.2s;
}

.tree-reset:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.tree-body {
  padding: 24px;
}

.tree-q-text {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0 0 20px 0;
}

.tree-options {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.tree-option {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 18px;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  text-align: left;
  font-size: 0.95rem;
  color: var(--vp-c-text-1);
}

.tree-option:hover {
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
  transform: translateX(4px);
}

.tree-option.selected {
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
}

.tree-option-icon {
  font-size: 1.3rem;
  flex-shrink: 0;
}

.tree-path {
  margin-top: 20px;
  padding: 12px;
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
}

.tree-path-label {
  font-weight: 500;
  color: var(--vp-c-text-3);
}

.tree-path-step {
  color: var(--vp-c-text-1);
  font-weight: 500;
}

.tree-path-arrow {
  color: var(--vp-c-text-3);
  margin: 0 4px;
}
</style>
