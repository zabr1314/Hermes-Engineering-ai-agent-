---
layout: doc
---

<svg viewBox="0 0 400 40" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g04" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#f59e0b;stop-opacity:0" />
      <stop offset="50%" style="stop-color:#f59e0b;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#f59e0b;stop-opacity:0" />
    </linearGradient>
  </defs>
  <line x1="0" y1="20" x2="400" y2="20" stroke="url(#g04)" stroke-width="2"/>
  <circle cx="200" cy="20" r="4" fill="#f59e0b"/>
</svg>

# 多Agent架构

> 不是多Agent好不好，而是什么时候用——从简单开始，按需演进。

## 章节列表

1. [何时用多Agent](./01-何时用多Agent) — 广度 vs 深度的哲学之争，三类适合场景
2. [指挥官与工人](./02-指挥官与工人) — Anthropic 的指挥官-工人架构与八条原则
3. [六种Workflow模式](./03-六种Workflow模式) — Chaining、Routing、Sectioning、Voting
4. [动态编排与迭代](./04-动态编排与迭代) — Orchestrator-Workers 与 Evaluator-Optimizer
5. [选型与实践](./05-选型与实践) — 选型框架、从简单开始、演进案例
