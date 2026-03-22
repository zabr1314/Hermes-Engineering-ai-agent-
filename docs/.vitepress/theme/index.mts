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
  }
}
