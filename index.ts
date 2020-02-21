import VueInstance, { VueConstructor } from 'vue'
import VueRouter, { Route } from 'vue-router'
import { provide, inject, InjectionKey } from '@vue/composition-api'

class GetRouter {
  readonly router: VueRouter
  readonly route: Route

  constructor (vm: VueInstance) {
    this.router = vm.$router
    this.route = vm.$route
  }
}

const vRouter: InjectionKey<GetRouter> = Symbol()

export function plugin (Vue: VueConstructor) {
  Vue.mixin({
    beforeCreate () {
      const vm = this
      provide(vRouter, new GetRouter(vm))
    }
  })
}

export const useRouter = () => inject(vRouter)
