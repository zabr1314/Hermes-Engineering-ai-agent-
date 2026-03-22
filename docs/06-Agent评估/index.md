---
layout: doc
---

<svg viewBox="0 0 400 40" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g06" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#06b6d4;stop-opacity:0" />
      <stop offset="50%" style="stop-color:#06b6d4;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#06b6d4;stop-opacity:0" />
    </linearGradient>
  </defs>
  <line x1="0" y1="20" x2="400" y2="20" stroke="url(#g06)" stroke-width="2"/>
  <circle cx="200" cy="20" r="4" fill="#06b6d4"/>
</svg>

# Agent评估

> Agent 不是自动贩卖机——需要全新的评估方法来衡量概率性输出。

## 章节列表

1. [为什么需要评估](./01-为什么需要评估) — Pass@k / Pass^k、评估三元组、四个层次
2. [评分器体系](./02-评分器体系) — 代码/模型/人类评分器、评估金字塔
3. [四类评估与纵深防御](./03-四类评估与纵深防御) — 瑞士奶酪模型、纵深防御
4. [从零构建](./04-从零构建) — 九步路线图、工具选型
