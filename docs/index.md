---
layout: home

hero:
  name: "Hermes Engineering"
  text: "完全指南"
  tagline: "AI 工程师的分水岭——要么停留在调 API，要么掌握系统设计的底层能力"
  image:
    src: /logo.svg
    alt: Hermes Engineering
  actions:
    - theme: brand
      text: 开始学习
      link: /01-Harness工程核心原则/
    - theme: alt
      text: GitHub →
      link: https://github.com/Kocoro-lab/Shannon

features:
  - icon: 🏗️
    title: Harness Engineering
    details: 你不再写代码，你设计环境。范式转移就从这里开始。
    link: /01-Harness工程核心原则/

  - icon: 🧠
    title: 上下文工程
    details: 当上下文腐烂，Agent 就废了。卸载、缩减、隔离——救命三板斧。
    link: /02-上下文工程/

  - icon: 🤖
    title: Agent 基础
    details: ReAct、MCP、记忆架构、CoT——不只是概念，是可运行的模式。
    link: /03-Agent基础/

  - icon: 🔗
    title: 多 Agent 架构
    details: 六种 Workflow + 四问决策框架。什么时候该用单体，什么时候该拆分。
    link: /04-多Agent架构/

  - icon: 🛠️
    title: Skill 工程
    details: 从"会聊天"到"能干活"——渐进式披露机制让 Agent 真正可用。
    link: /05-Skill工程/

  - icon: 📊
    title: Agent 评估
    details: 没有评估的 Agent 就是随机数生成器。评分器金字塔教你靠谱地测。
    link: /06-Agent评估/

  - icon: 🚀
    title: 生产实践
    details: 可观测性、安全执行、Token 预算、断点续传——从实验室到 7×24 线上。
    link: /07-生产实践/

  - icon: 🔧
    title: ECC 实战篇
    details: Everything Claude Code 深度解析——从 Hooks 到 Rules，给 Agent 装上操作系统。
    link: /08-ECC教程/

  - icon: 🗺️
    title: 学习路线图
    details: 三种路径：快速入门 / 系统学习 / 前沿热点。挑你的。
    link: /附录-知识图谱与路线图/learning-roadmap
---

<div style="max-width: 760px; margin: 0 auto; padding: 48px 24px 80px;">

<div style="text-align: center; margin-bottom: 48px;">

## 为什么是现在？

</div>

2024-2025，AI 工程发生了根本性变化。

模型能力已经不是瓶颈。**瓶颈变成了你如何组织上下文、如何设计 Agent 交互、如何把实验室原型推上生产环境。** 每个团队都在问同一个问题：怎么搭一个真正可用的 Agent 系统？

答案不在某个框架的文档里。答案在一套工程方法论里——**Harness Engineering**。

这套方法论由 Anthropic、OpenAI、LangChain、Cursor 等一线团队在实践中提炼。本教程把散落的碎片拼成完整地图，100+ 篇深度笔记提炼成 7 个核心模块，从范式转移到生产部署，一条路走通。

**如果你在 2025 年做 AI 工程，这不是"可以看看"的教程——这是你必须掌握的底层知识。**

---

<div style="text-align: center; margin: 48px 0 32px;">

## 🗺️ 学习路线图

</div>

<div style="text-align: center; margin-bottom: 48px;">

```mermaid
graph TD
    A["🏗️ Harness Engineering<br/><i>范式转移：从写代码到设计环境</i>"] --> B["🧠 上下文工程<br/><i>卸载 · 缩减 · 隔离</i>"]
    B --> C["🤖 Agent 基础<br/><i>ReAct · MCP · 记忆 · CoT</i>"]
    C --> D["🔗 多 Agent 架构<br/><i>六种 Workflow + 四问决策</i>"]
    C --> E["🛠️ Skill 工程<br/><i>渐进式披露 · 安全实践</i>"]
    D --> F["📊 Agent 评估<br/><i>评分器金字塔 · 瑞士奶酪模型</i>"]
    E --> F
    F --> G["🚀 生产实践<br/><i>可观测性 · 安全 · 成本控制</i>"]

    style A fill:#4a90d9,color:#fff,stroke:#2c5f8a
    style B fill:#6b5ce7,color:#fff,stroke:#4a3cb5
    style C fill:#e85d75,color:#fff,stroke:#b8445c
    style D fill:#f5a623,color:#fff,stroke:#c4841c
    style E fill:#f5a623,color:#fff,stroke:#c4841c
    style F fill:#50c878,color:#fff,stroke:#3a9058
    style G fill:#e74c3c,color:#fff,stroke:#b83a2f
```

</div>

学完前两个模块，你就具备了设计 Agent 系统的**架构眼光**。学完全部七个模块，你就能独立搭建生产级多 Agent 系统。不是 demo，是能跑在服务器上处理真实请求的系统。

---

<div style="text-align: center; margin: 48px 0 32px;">

## 💡 你将获得的具体能力

</div>

<div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; margin-bottom: 48px;">

<div style="padding: 16px 20px; background: var(--vp-c-bg-soft); border-radius: 8px;">
  <strong>✅ 设计 Harness</strong><br/>
  <span style="font-size: 0.9rem; color: var(--vp-c-text-2);">为任意 LLM 应用设计环境层——Prompt、Tools、Context 的组织方式</span>
</div>

<div style="padding: 16px 20px; background: var(--vp-c-bg-soft); border-radius: 8px;">
  <strong>✅ 管控上下文窗口</strong><br/>
  <span style="font-size: 0.9rem; color: var(--vp-c-text-2);">诊断上下文腐烂问题，应用卸载/缩减/隔离策略修复</span>
</div>

<div style="padding: 16px 20px; background: var(--vp-c-bg-soft); border-radius: 8px;">
  <strong>✅ 构建 Agent 循环</strong><br/>
  <span style="font-size: 0.9rem; color: var(--vp-c-text-2);">实现 ReAct 模式，集成 MCP 工具协议，设计记忆架构</span>
</div>

<div style="padding: 16px 20px; background: var(--vp-c-bg-soft); border-radius: 8px;">
  <strong>✅ 设计多 Agent 系统</strong><br/>
  <span style="font-size: 0.9rem; color: var(--vp-c-text-2);">从六种 Workflow 中选择合适的模式，用四问框架做架构决策</span>
</div>

<div style="padding: 16px 20px; background: var(--vp-c-bg-soft); border-radius: 8px;">
  <strong>✅ 开发 Agent Skill</strong><br/>
  <span style="font-size: 0.9rem; color: var(--vp-c-text-2);">设计三要素 Skill，实现渐进式披露的三层加载机制</span>
</div>

<div style="padding: 16px 20px; background: var(--vp-c-bg-soft); border-radius: 8px;">
  <strong>✅ 建立评估体系</strong><br/>
  <span style="font-size: 0.9rem; color: var(--vp-c-text-2);">搭建评分器金字塔，用 Pass@k 概率统计量化 Agent 质量</span>
</div>

<div style="padding: 16px 20px; background: var(--vp-c-bg-soft); border-radius: 8px;">
  <strong>✅ 部署生产系统</strong><br/>
  <span style="font-size: 0.9rem; color: var(--vp-c-text-2);">配置可观测性、安全沙箱、Token 预算、断点续传</span>
</div>

<div style="padding: 16px 20px; background: var(--vp-c-bg-soft); border-radius: 8px;">
  <strong>✅ 评估架构选型</strong><br/>
  <span style="font-size: 0.9rem; color: var(--vp-c-text-2;">面对真实需求时，判断单体 vs 多 Agent、选哪种 Workflow</span>
</div>

</div>

---

<div style="text-align: center; margin: 48px 0 32px;">

## 🏛️ 内容来源

</div>

这不是一个人的观点。本教程综合了以下团队的公开实践和研究：

<div style="text-align: center; margin-bottom: 48px;">

| 来源 | 贡献 |
|------|------|
| **Anthropic** | *Building Effective Agents*、*Multi-Agent Research*、*Agent Skills*、*Evals for AI Agents* |
| **OpenAI** | Codex 团队的 Harness Engineering 实践 |
| **LangChain** | 上下文工程系列、Workflow 五种模式 |
| **Cursor** | 动态上下文发现机制 |
| **Menlo** | 上下文工程生产实践 |
| **Shannon (Kocoro-lab)** | 三层架构多 Agent 系统开源实现 |

</div>

来自 100+ 篇原始笔记的系统性整理。不是翻译，是消化后的工程方法论。

---

<div style="text-align: center; margin: 48px 0 32px;">

## 📊 教程规模

</div>

<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-bottom: 48px; text-align: center;">

<div>
  <div style="font-size: 2.5rem; font-weight: 700; color: var(--vp-c-brand-1);">100+</div>
  <div style="font-size: 0.85rem; color: var(--vp-c-text-3); margin-top: 4px;">源笔记文章</div>
</div>

<div>
  <div style="font-size: 2.5rem; font-weight: 700; color: var(--vp-c-brand-1);">7</div>
  <div style="font-size: 0.85rem; color: var(--vp-c-text-3); margin-top: 4px;">核心模块</div>
</div>

<div>
  <div style="font-size: 2.5rem; font-weight: 700; color: var(--vp-c-brand-1);">3,000+</div>
  <div style="font-size: 0.85rem; color: var(--vp-c-text-3); margin-top: 4px;">行教程内容</div>
</div>

</div>

---

<div style="text-align: center; margin: 48px 0 32px;">

## 👤 适合谁

</div>

- 正在构建 Agent 系统但总觉得"差了点什么"的**后端工程师**
- 需要设计多 Agent 协作架构但不确定选型的**技术负责人**
- 关心成本、安全、可观测性却找不到系统化资料的**架构师**
- 用 LangChain/CrewAI 搭过 demo 但推不上生产的**AI 开发者**

---

<div style="text-align: center; margin-top: 48px; padding: 40px 32px; background: var(--vp-c-bg-soft); border-radius: 12px; border-left: 4px solid var(--vp-c-brand-1);">

<div style="font-size: 1.4rem; font-weight: 700; margin-bottom: 12px;">准备好了吗？</div>

<div style="color: var(--vp-c-text-2); font-size: 1rem; margin-bottom: 24px; line-height: 1.6;">

AI 工程的竞争窗口正在收窄。  
别人已经在用这些方法论搭建系统了。  
你还在等什么？

</div>

[开始学习 →](/01-Harness工程核心原则/)

</div>

</div>
