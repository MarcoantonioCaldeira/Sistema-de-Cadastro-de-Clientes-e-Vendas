import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueSession from 'vue-session'
import { loadFonts } from './plugins/webfontloader'

// import axios from 'axios'

// axios.interceptors.request.use(config => {
//   const token = localStorage.getItem("jwt");
//   config.headers["Authorization"] = `Bearer ${token}`;
//   return config;
// });

loadFonts()

createApp(App)
  .use(router)
  .mount('#app')
  app.directive('mask', mask);
  Vue.use(VueSession);