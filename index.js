"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const composition_api_1 = require("@vue/composition-api");
class GetRouter {
    constructor(vm) {
        this.router = vm.$router;
        this.route = vm.$route;
    }
}
const vRouter = Symbol();
function plugin(Vue) {
    Vue.mixin({
        beforeCreate() {
            const vm = this;
            composition_api_1.provide(vRouter, new GetRouter(vm));
        }
    });
}
exports.plugin = plugin;
exports.useRouter = () => composition_api_1.inject(vRouter);
