import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
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
  .use(vuetify)
  .mount('#app')
