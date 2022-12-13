<template>
    <div id="corpo_info_endereco">
      <h1 class="h1_info_endereco">Informações de endereço</h1>
      <Informacoes_Endereco />
    </div>
    <Footer />  

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
<style  src="./estilo.scss"  lang="scss">
</style>
