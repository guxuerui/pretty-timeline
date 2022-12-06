import { resolveRef } from '@vueuse/core'

export function isMobile() {
  return resolveRef(() => {
    // return navigator.userAgent.match(
    //   /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i,
    // )
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  })
}
