"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vRouter = {
    router: {},
    route: {}
};
function plugin(Vue) {
    Vue.mixin({
        beforeCreate: initRouter
    });
}
exports.plugin = plugin;
function initRouter() {
    var vm = this;
    Object.defineProperty(vRouter, 'router', {
        get: function () {
            return vm.$router;
        }
    });
    Object.defineProperty(vRouter, 'route', {
        get: function () {
            return vm.$route;
        }
    });
}
exports.useRouter = function () {
    return vRouter;
};
