"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const composition_api_1 = require("@vue/composition-api");
class GetRouter {
    constructor(vm) {
        this.router = vm.$router;
        this.route = vm.$route;
    }
}
function useRouter() {
    const vm = composition_api_1.getCurrentInstance();
    return new GetRouter(vm);
}
exports.default = useRouter;
