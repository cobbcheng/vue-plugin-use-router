import { VueConstructor } from 'vue';
import VueRouter, { Route } from 'vue-router';
interface RouterBox {
    router: VueRouter;
    route: Route;
}
export declare function plugin(Vue: VueConstructor): void;
export declare const useRouter: () => RouterBox;
export {};
//# sourceMappingURL=index.d.ts.map