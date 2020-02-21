import VueInstance from 'vue';
import VueRouter, { Route } from 'vue-router';
declare class GetRouter {
    readonly router: VueRouter;
    readonly route: Route;
    constructor(vm: VueInstance);
}
declare function useRouter(): GetRouter;
export default useRouter;
//# sourceMappingURL=index.d.ts.map