import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

export default withMermaid(defineConfig({
  title: 'Hermes Engineering 完全指南',
  description: 'AI 时代的软件工程范式——从 Harness 到多 Agent 系统的设计与实践',
  lang: 'zh-CN',

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#b4876e' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Hermes Engineering 完全指南' }],
    ['meta', { property: 'og:description', content: 'AI 时代的软件工程范式——从 Harness 到多 Agent 系统的设计与实践' }],
    ['meta', { property: 'og:image', content: '/og-cover.png' }],
    ['meta', { property: 'og:url', content: 'https://hermes-engineering.dev/' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'Hermes Engineering 完全指南' }],
    ['meta', { name: 'twitter:description', content: '100+ 篇深度笔记提炼而成，7 大模块覆盖从范式到生产的完整知识体系' }],
  ],

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'Hermes Engineering',

    nav: [
      { text: '教程', link: '/01-Harness工程核心原则/' },
      { text: '路线图', link: '/附录-知识图谱与路线图/learning-roadmap' },
      { text: '知识图谱', link: '/附录-知识图谱与路线图/knowledge-graph' },
    ],

    sidebar: [
      {
        text: '🏗️ 01 - Harness Engineering',
        collapsed: false,
        items: [
          { text: '总览', link: '/01-Harness工程核心原则/' },
          { text: '01 范式转移', link: '/01-Harness工程核心原则/01-范式转移' },
          { text: '02 让 Agent 拥有感官', link: '/01-Harness工程核心原则/02-让Agent拥有感官' },
          { text: '03 成本、自主与熵增', link: '/01-Harness工程核心原则/03-成本、自主与熵增' },
          { text: '04 Harness 即操作系统', link: '/01-Harness工程核心原则/04-Harness即操作系统' },
          { text: '05 验证、工具与优化', link: '/01-Harness工程核心原则/05-验证、工具与优化' },
          { text: '06 争论与未来', link: '/01-Harness工程核心原则/06-争论与未来' },
          { text: '⚡ 速查', link: '/01-Harness工程核心原则/速查' },
        ],
      },
      {
        text: '🧠 02 - 上下文工程',
        collapsed: false,
        items: [
          { text: '总览', link: '/02-上下文工程/' },
          { text: '01 上下文的诅咒', link: '/02-上下文工程/01-上下文的诅咒' },
          { text: '02 三大支柱', link: '/02-上下文工程/02-三大支柱' },
          { text: '03 动态上下文与实战', link: '/02-上下文工程/03-动态上下文与实战' },
          { text: '04 Menlo 的教训', link: '/02-上下文工程/04-Menlo的教训' },
          { text: '05 长运行 Agent', link: '/02-上下文工程/05-长运行Agent' },
          { text: '⚡ 速查', link: '/02-上下文工程/速查' },
        ],
      },
      {
        text: '🤖 03 - Agent 基础',
        collapsed: false,
        items: [
          { text: '总览', link: '/03-Agent基础/' },
          { text: '01 Agent 的本质', link: '/03-Agent基础/01-Agent的本质' },
          { text: '02 工具与协议', link: '/03-Agent基础/02-工具与协议' },
          { text: '03 记忆与上下文', link: '/03-Agent基础/03-记忆与上下文' },
          { text: '04 高级推理', link: '/03-Agent基础/04-高级推理' },
          { text: '⚡ 速查', link: '/03-Agent基础/速查' },
        ],
      },
      {
        text: '🔗 04 - 多 Agent 架构',
        collapsed: false,
        items: [
          { text: '总览', link: '/04-多Agent架构/' },
          { text: '01 何时用多 Agent', link: '/04-多Agent架构/01-何时用多Agent' },
          { text: '02 指挥官与工人', link: '/04-多Agent架构/02-指挥官与工人' },
          { text: '03 六种 Workflow 模式', link: '/04-多Agent架构/03-六种Workflow模式' },
          { text: '04 动态编排与迭代', link: '/04-多Agent架构/04-动态编排与迭代' },
          { text: '05 选型与实践', link: '/04-多Agent架构/05-选型与实践' },
          { text: '⚡ 速查', link: '/04-多Agent架构/速查' },
        ],
      },
      {
        text: '🛠️ 05 - Skill 工程',
        collapsed: false,
        items: [
          { text: '总览', link: '/05-Skill工程/' },
          { text: '01 Skill 是什么', link: '/05-Skill工程/01-Skill是什么' },
          { text: '02 渐进式披露', link: '/05-Skill工程/02-渐进式披露' },
          { text: '03 开发与安全', link: '/05-Skill工程/03-开发与安全' },
          { text: '⚡ 速查', link: '/05-Skill工程/速查' },
        ],
      },
      {
        text: '📊 06 - Agent 评估',
        collapsed: false,
        items: [
          { text: '总览', link: '/06-Agent评估/' },
          { text: '01 为什么需要评估', link: '/06-Agent评估/01-为什么需要评估' },
          { text: '02 评分器体系', link: '/06-Agent评估/02-评分器体系' },
          { text: '03 四类评估与纵深防御', link: '/06-Agent评估/03-四类评估与纵深防御' },
          { text: '04 从零构建', link: '/06-Agent评估/04-从零构建' },
          { text: '⚡ 速查', link: '/06-Agent评估/速查' },
        ],
      },
      {
        text: '🚀 07 - 生产实践',
        collapsed: false,
        items: [
          { text: '总览', link: '/07-生产实践/' },
          { text: '01 可观测性', link: '/07-生产实践/01-可观测性' },
          { text: '02 安全执行', link: '/07-生产实践/02-安全执行' },
          { text: '03 成本控制与可靠性', link: '/07-生产实践/03-成本控制与可靠性' },
          { text: '⚡ 速查', link: '/07-生产实践/速查' },
        ],
      },
      {
        text: '📎 附录',
        collapsed: false,
        items: [
          { text: '学习路线图', link: '/附录-知识图谱与路线图/learning-roadmap' },
          { text: '知识图谱与术语表', link: '/附录-知识图谱与路线图/knowledge-graph' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Kocoro-lab/Shannon' },
    ],

    footer: {
      message: '基于 CC BY-SA 4.0 协议发布',
      copyright: 'Hermes Engineering · 2026',
    },

    search: { provider: 'local' },

    outline: { label: '页面导航', level: [2, 3] },
    docFooter: { prev: '上一篇', next: '下一篇' },
    darkModeSwitchLabel: '外观',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部',
    lastUpdated: { text: '最后更新于' },
  },

  markdown: { lineNumbers: true },
  lastUpdated: true,
}))
