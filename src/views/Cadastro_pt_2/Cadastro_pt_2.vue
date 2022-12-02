<template>
  <div class="sobre-nos">
    <h1>Informações de endereço</h1>
    <Informacoes_Endereco />
    <Footer />  
  </div>
</template>


<script>

import Inicio from '@/components/Inicio/inicio.vue'
import Footer from '@/components/Footer.vue'
import Informacoes_Endereco from '@/components/informacoes_de_Endereco.vue'

export default {
  name: 'Cadastro_pt_2',
  components: {
    Inicio,
    Informacoes_Endereco,
    Footer
  }
}
</script>
