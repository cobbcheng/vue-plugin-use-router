"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var vue_router_1 = __importDefault(require("vue-router"));
var vRouter = {
    router: new vue_router_1.default(),
    route: new vue_router_1.default().currentRoute
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
