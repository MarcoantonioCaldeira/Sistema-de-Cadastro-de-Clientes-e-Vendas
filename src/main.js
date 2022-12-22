import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { VueMaskDirective } from "v-mask";

Vue.config.productionTip = false;

Vue.directive("mask", VueMaskDirective);

new Vue({
    render: h => h()
}).$mount("#app")


