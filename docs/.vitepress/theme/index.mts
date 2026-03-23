import DefaultTheme from 'vitepress/theme'
import './custom.css'
import MermaidPlayground from './components/MermaidPlayground.vue'
import DecisionTree from './components/DecisionTree.vue'
import WorkflowExplorer from './components/WorkflowExplorer.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('MermaidPlayground', MermaidPlayground)
    app.component('DecisionTree', DecisionTree)
    app.component('WorkflowExplorer', WorkflowExplorer)
  },
  setup() {
    if (typeof window !== 'undefined') {
      // Create overlay once
      const overlay = document.createElement('div')
      overlay.id = 'svg-zoom-overlay'
      overlay.innerHTML = '<div id="svg-zoom-content"></div><span id="svg-zoom-close">✕</span>'
      document.body.appendChild(overlay)

      const close = () => {
        overlay.classList.remove('active')
        document.getElementById('svg-zoom-content')!.innerHTML = ''
      }

      overlay.addEventListener('click', (e) => {
        if (e.target === overlay || (e.target as HTMLElement).id === 'svg-zoom-close') {
          close()
        }
      })
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') close()
      })

      const bindZoom = () => {
        document.querySelectorAll('.mermaid').forEach((el) => {
          if ((el as HTMLElement).dataset.zoomBound) return
          ;(el as HTMLElement).dataset.zoomBound = 'true'
          ;(el as HTMLElement).style.cursor = 'zoom-in'
          el.addEventListener('click', () => {
            const svg = el.querySelector('svg')
            if (!svg) return
            const clone = svg.cloneNode(true) as SVGElement
            // Remove fixed dimensions so SVG can scale up
            clone.removeAttribute('width')
            clone.removeAttribute('height')
            clone.style.width = '100%'
            clone.style.height = 'auto'
            const content = document.getElementById('svg-zoom-content')!
            content.innerHTML = ''
            content.appendChild(clone)
            overlay.classList.add('active')
          })
        })
      }

      // Observe DOM for new mermaid elements
      const observer = new MutationObserver(() => {
        const mermaids = document.querySelectorAll('.mermaid:not([data-zoom-bound])')
        if (mermaids.length > 0) {
          setTimeout(bindZoom, 300)
        }
      })
      observer.observe(document.body, { childList: true, subtree: true })

      // Initial bind
      setTimeout(bindZoom, 1000)
    }
  }
}
