<template>
    <div class="home">
        <h1>Cadastro da Pessoa Estrangeira</h1>
      <Inicio/>
      <Footer />
    </div>
  </template>
  
  <script>
  
  import Inicio from '@/components/Pessoa_Juridica/inicio.vue'
  import Footer from '@/components/Footer.vue'
  
  export default {
    name: 'Home',
    components: {
      Inicio,
      Footer
    }
  }
  </script>
  