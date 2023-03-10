<template>

  <div id="corpo_formulario">

    <div id="TituloTopo">
      <h1 id="h1-titulo">Cadastro do cliente</h1>
      <p>(Preencha os campos para cadastrar um novo cliente)</p>
    </div>
    <br><br><br>

    <Informacoes_Cliente />

  </div>
  
</template>

<script>
  import Informacoes_Cliente from '@/components/Pessoa_Fisica/Informacoes_Cliente.vue';

  export default {
    name: 'Inicio',
    data(){
      return{
        submitStatus: null
      }
    },
    components: {
      Informacoes_Cliente
    }
  }
</script>

<style src="./estilo_p_fisica/estilo_inicio_p_fisica.scss"  lang="scss" />

