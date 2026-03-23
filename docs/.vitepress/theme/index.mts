import DefaultTheme from 'vitepress/theme'
import './custom.css'
import MermaidPlayground from './components/MermaidPlayground.vue'
import DecisionTree from './components/DecisionTree.vue'
import WorkflowExplorer from './components/WorkflowExplorer.vue'
import mediumZoom from 'medium-zoom'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('MermaidPlayground', MermaidPlayground)
    app.component('DecisionTree', DecisionTree)
    app.component('WorkflowExplorer', WorkflowExplorer)
  },
  setup() {
    if (typeof window !== 'undefined') {
      let zoomInstance: ReturnType<typeof mediumZoom> | null = null

      const applyZoom = () => {
        if (zoomInstance) zoomInstance.detach()
        zoomInstance = mediumZoom('.mermaid svg, .vp-doc img:not(.no-zoom)', {
          background: 'rgba(0, 0, 0, 0.85)',
          margin: 24,
          scrollOffset: 0,
        })
      }

      // Watch for DOM changes — covers both initial load and SPA navigation
      const observer = new MutationObserver(() => {
        const svgs = document.querySelectorAll('.mermaid svg')
        if (svgs.length > 0) {
          // Small delay to let all diagrams finish rendering
          setTimeout(applyZoom, 200)
        }
      })
      observer.observe(document.body, { childList: true, subtree: true })

      // Also try immediately in case diagrams are already there
      setTimeout(applyZoom, 1000)
    }
  }
}
