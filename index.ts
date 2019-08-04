import VueInstance, { VueConstructor } from 'vue'
import VueRouter, { Route } from 'vue-router'

const vRouter = {
  router: {},
  route: {}
}

export function plugin (Vue: VueConstructor) {
  Vue.mixin({
    beforeCreate: initRouter
  })
}

function initRouter (this: VueInstance) {
  const vm = this

  Object.defineProperty(vRouter, 'router', {
    get (): VueRouter {
      return vm.$router
    }
  })

  Object.defineProperty(vRouter, 'route', {
    get (): Route {
      return vm.$route
    }
  })
}

export const useRouter = () => {
  return vRouter
}