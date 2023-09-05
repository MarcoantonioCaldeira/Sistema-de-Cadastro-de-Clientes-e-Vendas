import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueSession from 'vue-session'
import store from '../src/components/services/store'
import { loadFonts } from './plugins/webfontloader'

// import axios from 'axios'

// axios.interceptors.request.use(config => {
//   const token = localStorage.getItem("jwt");
//   config.headers["Authorization"] = `Bearer ${token}`;
//   return config;
// });

loadFonts()

const app = createApp(App)

  app.use(store);
  app.use(router);
  app.mount('#app');
  app.directive('mask', mask);
  Vue.use(VueSession);