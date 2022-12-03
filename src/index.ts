import PrettyTimeline from './components/PrettyTimeline.vue' // 引入封装好的组件

export { PrettyTimeline } // 实现按需引入*

const components = [PrettyTimeline]
const install = function (App: any) {
  components.forEach((component) => {
    App.component(component.name, component)
  })
}
export default { install }
