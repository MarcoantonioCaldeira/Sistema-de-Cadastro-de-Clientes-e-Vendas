<template>
  <etapas />
  <div id="corpo_formulario">

    <h1 id="h1-titulo">Cadastro do cliente</h1>
    <p>(Preencha os campos para cadastrar um novo cliente)</p>

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

<style src="./estilo_inicio.scss"  lang="scss" />

