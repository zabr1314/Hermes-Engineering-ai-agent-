---
layout: doc
---

<svg viewBox="0 0 400 40" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g02" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#8b5cf6;stop-opacity:0" />
      <stop offset="50%" style="stop-color:#8b5cf6;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#8b5cf6;stop-opacity:0" />
    </linearGradient>
  </defs>
  <line x1="0" y1="20" x2="400" y2="20" stroke="url(#g02)" stroke-width="2"/>
  <circle cx="200" cy="20" r="4" fill="#8b5cf6"/>
</svg>

# 上下文工程

> 用恰到好处、下一步所需的正确信息填充上下文窗口——这是一门精巧的艺术和科学。

## 章节列表

1. [上下文的诅咒](./01-上下文的诅咒) — 从提示工程到上下文工程，Context Rot 与四种失效模式
2. [三大支柱](./02-三大支柱) — 卸载、缩减、隔离的完整定义与实践方法
3. [动态上下文与实战](./03-动态上下文与实战) — Cursor 五大实践、RAG vs Agentic Search
4. [Menlo的教训](./04-Menlo的教训) — KV 缓存优化、文件系统即上下文的架构跃迁
5. [长运行Agent](./05-长运行Agent) — 压缩策略、串行接力、环境管理
