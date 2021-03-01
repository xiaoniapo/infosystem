import Vue from 'vue';
import App from './App.vue';
import api from "./http.js";
import router from './router.js';
import store from "./store.js";


import "./assets/reset.css";
import "../public/font.css";

import alert from "./MesAlert.js";

Vue.config.productionTip = false
Vue.prototype.$http = api;
Vue.prototype.$alert = alert;

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
