import PrettyTimeline from './PrettyTimeline.vue' // 引入封装好的组件

export default {
  install: (app: any): void => {
    app.component('PrettyTimeline', PrettyTimeline)
  },
}

export { PrettyTimeline }
