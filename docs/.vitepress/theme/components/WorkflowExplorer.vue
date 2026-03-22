<template>
  <div class="explorer-wrapper">
    <div class="explorer-header">
      <span class="explorer-icon">🔍</span>
      <span class="explorer-title">Workflow 模式探索器</span>
    </div>
    <div class="explorer-body">
      <div class="explorer-tabs">
        <button
          v-for="(pattern, i) in patterns"
          :key="i"
          class="explorer-tab"
          :class="{ active: activeTab === i }"
          @click="activeTab = i"
        >
          <span class="tab-icon">{{ pattern.icon }}</span>
          <span class="tab-name">{{ pattern.name }}</span>
        </button>
      </div>
      <div class="explorer-content">
        <div class="explorer-pattern">
          <h3>{{ patterns[activeTab].icon }} {{ patterns[activeTab].name }}</h3>
          <p class="explorer-desc">{{ patterns[activeTab].desc }}</p>
          
          <div class="explorer-mermaid" v-html="patterns[activeTab].svg"></div>
          
          <div class="explorer-details">
            <div class="detail-card">
              <div class="detail-label">适用场景</div>
              <div class="detail-value">{{ patterns[activeTab].useCase }}</div>
            </div>
            <div class="detail-card">
              <div class="detail-label">复杂度</div>
              <div class="detail-value">
                <span v-for="n in patterns[activeTab].complexity" :key="n">⭐</span>
              </div>
            </div>
            <div class="detail-card">
              <div class="detail-label">并行度</div>
              <div class="detail-value">{{ patterns[activeTab].parallel }}</div>
            </div>
            <div class="detail-card">
              <div class="detail-label">典型案例</div>
              <div class="detail-value">{{ patterns[activeTab].example }}</div>
            </div>
          </div>

          <div class="explorer-pros-cons">
            <div class="pros">
              <div class="pc-label">✅ 优势</div>
              <ul>
                <li v-for="p in patterns[activeTab].pros" :key="p">{{ p }}</li>
              </ul>
            </div>
            <div class="cons">
              <div class="pc-label">⚠️ 注意</div>
              <ul>
                <li v-for="c in patterns[activeTab].cons" :key="c">{{ c }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const activeTab = ref(0)

const patterns = [
  {
    name: 'Chaining',
    icon: '🔗',
    desc: '步骤串联执行，每步输出是下一步输入。',
    useCase: '任务步骤明确、前后依赖',
    complexity: 1,
    parallel: '❌ 线性',
    example: '数据清洗→分析→报告生成',
    svg: '',
    pros: ['简单可控，容易调试', '可加 gate 做中间检查', '延迟低'],
    cons: ['不支持并行', '任何一步失败全链路停止']
  },
  {
    name: 'Routing',
    icon: '🚦',
    desc: '先判断输入类型，再分发到不同处理路径。',
    useCase: '不同输入需要不同处理策略',
    complexity: 2,
    parallel: '❌ 分流',
    example: '客服系统按问题类型分流',
    svg: '',
    pros: ['按需分配资源', '简单问题不走复杂流程', '降低整体成本'],
    cons: ['路由判断本身有误差', '新增类型需修改路由逻辑']
  },
  {
    name: 'Sectioning',
    icon: '📋',
    desc: '同质任务拆分成独立子任务并行执行。',
    useCase: '同类型的大批量任务',
    complexity: 2,
    parallel: '✅ 并行',
    example: '多语言翻译、批量文档摘要',
    svg: '',
    pros: ['并行加速', '各部分独立，互不影响', '失败可单独重试'],
    cons: ['需要合并逻辑', '并行度有上限']
  },
  {
    name: 'Voting',
    icon: '🗳️',
    desc: '多个 Agent 独立执行同一任务，取多数结果。',
    useCase: '需要一致性和正确性保障',
    complexity: 2,
    parallel: '✅ 并行',
    example: '代码审查、Fact Check',
    svg: '',
    pros: ['提高可靠性', '减少随机性影响', '可以发现模型偏见'],
    cons: ['成本倍增（N 次调用）', '可能存在一致的错误']
  },
  {
    name: 'Orchestrator-Workers',
    icon: '🏗️',
    desc: 'Orchestrator 动态拆分任务，Workers 并行执行。',
    useCase: '任务复杂度在运行时才确定',
    complexity: 3,
    parallel: '✅ 动态',
    example: '多文件代码重构',
    svg: '',
    pros: ['动态适应任务复杂度', '智能调度', '充分利用并行'],
    cons: ['Orchestrator 本身是瓶颈', '调试困难', '成本高']
  },
  {
    name: 'Evaluator-Optimizer',
    icon: '🔄',
    desc: '一个 Agent 做，另一个 Agent 评，循环直到质量达标。',
    useCase: '需要反复打磨质量',
    complexity: 3,
    parallel: '✅ 迭代',
    example: '写作、方案设计、代码优化',
    svg: '',
    pros: ['质量持续提升', '自动迭代', '不依赖人类反馈'],
    cons: ['可能陷入循环', '每次迭代都有成本', '需要明确的终止条件']
  }
]

onMounted(async () => {
  if (typeof window !== 'undefined') {
    const mermaid = (await import('mermaid')).default
    mermaid.initialize({ startOnLoad: false, theme: 'default', securityLevel: 'loose' })

    const diagramCodes = [
      `flowchart LR\n  A[输入] --> B[步骤1]\n  B --> C[步骤2]\n  C --> D[步骤3]\n  D --> E[输出]`,
      `flowchart TD\n  A[输入] --> B{路由判断}\n  B -->|类型A| C[处理路径A]\n  B -->|类型B| D[处理路径B]\n  B -->|类型C| E[处理路径C]\n  C --> F[输出]\n  D --> F\n  E --> F`,
      `flowchart TD\n  A[大任务] --> B[拆分]\n  B --> C[子任务1]\n  B --> D[子任务2]\n  B --> E[子任务3]\n  C --> F[合并]\n  D --> F\n  E --> F\n  F --> G[输出]`,
      `flowchart TD\n  A[输入] --> B[Agent1]\n  A --> C[Agent2]\n  A --> D[Agent3]\n  B --> E[投票]\n  C --> E\n  D --> E\n  E --> F[多数结果]`,
      `flowchart TD\n  A[输入] --> B[Orchestrator]\n  B --> C[Worker1]\n  B --> D[Worker2]\n  B --> E[Worker3]\n  C --> F[Orchestrator]\n  D --> F\n  E --> F\n  F --> G[输出]`,
      `flowchart TD\n  A[输入] --> B[Generator]\n  B --> C[Evaluator]\n  C -->|不通过| B\n  C -->|通过| D[输出]`
    ]

    for (let i = 0; i < diagramCodes.length; i++) {
      try {
        const { svg } = await mermaid.render('wf-' + i, diagramCodes[i])
        patterns[i].svg = svg
      } catch (e) {
        patterns[i].svg = '<p style="color:red">渲染错误</p>'
      }
    }
  }
})
</script>

<style scoped>
.explorer-wrapper {
  border: 1px solid var(--vp-c-divider);
  border-radius: var(--vp-border-radius);
  margin: 24px 0;
  overflow: hidden;
}

.explorer-header {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  background: var(--vp-c-bg-soft);
  border-bottom: 1px solid var(--vp-c-divider);
}

.explorer-icon { font-size: 1.2rem; }

.explorer-title {
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--vp-c-text-1);
}

.explorer-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  padding: 12px 16px;
  border-bottom: 1px solid var(--vp-c-divider);
}

.explorer-tab {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  background: var(--vp-c-bg);
  cursor: pointer;
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
  transition: all 0.2s;
}

.explorer-tab:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.explorer-tab.active {
  background: var(--vp-c-brand-soft);
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
  font-weight: 500;
}

.explorer-content {
  padding: 24px;
}

.explorer-pattern h3 {
  margin: 0 0 8px 0;
  font-size: 1.3rem;
}

.explorer-desc {
  color: var(--vp-c-text-2);
  margin: 0 0 20px 0;
  font-size: 0.95rem;
}

.explorer-mermaid {
  text-align: center;
  padding: 20px;
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
  margin-bottom: 20px;
  min-height: 150px;
}

.explorer-mermaid :deep(svg) {
  max-width: 100%;
  height: auto;
}

.explorer-details {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 12px;
  margin-bottom: 20px;
}

.detail-card {
  padding: 12px;
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
}

.detail-label {
  font-size: 0.8rem;
  color: var(--vp-c-text-3);
  font-weight: 500;
  margin-bottom: 4px;
}

.detail-value {
  font-size: 0.9rem;
  color: var(--vp-c-text-1);
}

.explorer-pros-cons {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.pros, .cons {
  padding: 16px;
  border-radius: 8px;
}

.pros {
  background: rgba(16, 185, 129, 0.06);
  border: 1px solid rgba(16, 185, 129, 0.15);
}

.cons {
  background: rgba(245, 158, 11, 0.06);
  border: 1px solid rgba(245, 158, 11, 0.15);
}

.pc-label {
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 8px;
}

.pc-label ul, .explorer-pros-cons ul {
  margin: 0;
  padding-left: 18px;
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
}

.pc-label li, .explorer-pros-cons li {
  margin-bottom: 4px;
}
</style>
