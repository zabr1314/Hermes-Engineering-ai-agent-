---
layout: doc
---

<svg viewBox="0 0 400 40" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g03" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#10b981;stop-opacity:0" />
      <stop offset="50%" style="stop-color:#10b981;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#10b981;stop-opacity:0" />
    </linearGradient>
  </defs>
  <line x1="0" y1="20" x2="400" y2="20" stroke="url(#g03)" stroke-width="2"/>
  <circle cx="200" cy="20" r="4" fill="#10b981"/>
</svg>

# Agent基础

> 从"说一句动一句"到"自主做事"——Agent 的核心概念与运行机制。

## 章节列表

1. [Agent的本质](./01-Agent的本质) — 四大组件、自主性等级、能做什么不能做什么
2. [工具与协议](./02-工具与协议) — Function Calling、MCP 协议、安全与生产配置
3. [记忆与上下文](./03-记忆与上下文) — 上下文窗口管理、三层存储、语义检索
4. [高级推理](./04-高级推理) — ReAct 循环、Planning、Reflection、Chain-of-Thought
