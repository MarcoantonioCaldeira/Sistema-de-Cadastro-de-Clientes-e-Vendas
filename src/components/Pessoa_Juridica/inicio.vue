<template>

  <div id="corpo_formulario_p_juridica">

    <div id="Titulo_Topo">
      <h1 id="h1-titulo">Cadastro do cliente</h1>
      <p>(Preencha os campos para cadastrar um novo cliente)</p>
    </div>
    <br><br><br>
  
    <Informacoes_Cliente />
    
  </div>
</template>

<script>

  import Informacoes_Cliente from '@/components/Pessoa_Juridica/Informacoes_Cliente.vue';

  export default {
    name: 'Inicio',
    components: {
      Informacoes_Cliente
    }
  }
</script>

<style src="./estilo_p_juridica/estilo_inicio_p_juridica.scss"  lang="scss">

</style>

