import Vue from 'vue';
import App from './App.vue';
import axios from "./http.js";
import router from './router.js';


import "./assets/reset.css";
import "../public/font.css";


Vue.config.productionTip = false
Vue.prototype.$http = axios;
Vue.prototype.appkey = "undefined123_1613890771031"

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
