<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Login from './components/Login/Login.vue'

export default {
  name: 'App',
  components:{
    Login
  }
}
</script>
