import VueInstance, { VueConstructor } from 'vue'
import Router, { Route } from 'vue-router'

let vRouter = {
  router: new Router,
  route: new Router().currentRoute
}

export function plugin (Vue: VueConstructor) {
  Vue.mixin({
    beforeCreate: initRouter
  })
}

function initRouter (this: VueInstance) {
  const vm = this

  Object.defineProperty(vRouter, 'router', {
    get (): Router {
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