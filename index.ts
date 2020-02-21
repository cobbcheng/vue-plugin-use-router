import VueInstance from 'vue'
import VueRouter, { Route } from 'vue-router'
import { getCurrentInstance } from '@vue/composition-api'

class GetRouter {
  readonly router: VueRouter
  readonly route: Route

  constructor (vm: VueInstance) {
    this.router = vm.$router
    this.route = vm.$route
  }
}

function useRouter () {
  const vm = getCurrentInstance() as any
  return new GetRouter(vm)
}

export default useRouter
