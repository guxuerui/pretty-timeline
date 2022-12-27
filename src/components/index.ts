import PrettyTimeline from './PrettyTimeline.vue' // 引入封装好的组件
import '@unocss/reset/tailwind.css'
import 'uno.css'

export default {
  install: (app: any): void => {
    app.component('PrettyTimeline', PrettyTimeline)
  },
}

export { PrettyTimeline }
