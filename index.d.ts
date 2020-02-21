import VueInstance, { VueConstructor } from 'vue';
import VueRouter, { Route } from 'vue-router';
declare class GetRouter {
    readonly router: VueRouter;
    readonly route: Route;
    constructor(vm: VueInstance);
}
export declare function plugin(Vue: VueConstructor): void;
export declare const useRouter: () => void | GetRouter;
export {};
//# sourceMappingURL=index.d.ts.map