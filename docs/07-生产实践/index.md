---
layout: doc
---

<svg viewBox="0 0 400 40" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g07" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#ef4444;stop-opacity:0" />
      <stop offset="50%" style="stop-color:#ef4444;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#ef4444;stop-opacity:0" />
    </linearGradient>
  </defs>
  <line x1="0" y1="20" x2="400" y2="20" stroke="url(#g07)" stroke-width="2"/>
  <circle cx="200" cy="20" r="4" fill="#ef4444"/>
</svg>

# 生产实践

> 可观测性、安全与成本控制——让 Agent 系统从实验室走向 7×24 小时运行。

## 章节列表

1. [可观测性](./01-可观测性) — Trace/Metrics/Logs 三层架构，Trace 即反馈
2. [安全与权限](./02-安全与权限) — 沙箱隔离、L1-L4 权限分级、审计日志
3. [成本与可靠性](./03-成本与可靠性) — Token 预算、分层模型、断点续传、优雅降级
