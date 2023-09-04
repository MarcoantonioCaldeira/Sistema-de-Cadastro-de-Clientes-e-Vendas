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
  computed: {
    isComponenteAAtivo() {
      // Defina a lógica para ativar/desativar o menu com base na rota atual
      return this.$route.path === '/'; // Desabilita o menu na página de login ("/")
    }
  }
}
</script>
