<template>
  <v-app>
    <v-main>
      <Menu :isComponenteAAtivo="isComponenteAAtivo" />
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Menu from './components/Menu'

export default {
  name: 'App',
  components:{
    Menu
  },
  data(){
    return{
      isComponenteAAtivo: true
    }
  },
  watch: {
    $route(to, from) {
      if(to.path === '/'){
        this.isComponenteAAtivo = false;
      }else{
        this.isComponenteAAtivo = true;
      }
    }
  }
}
</script>
