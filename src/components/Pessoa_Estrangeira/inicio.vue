<template>
  <etapas />

  <div id="corpo_formulario_estrangeiro">
    <h1 id="h1-titulo-p-estrangeira">Cadastro do cliente</h1>
    <p>(Preencha os campos para cadastrar um novo cliente)</p>
    <Informacoes_Cliente />
  </div>
</template>

<script>

import Informacoes_Cliente from '@/components/Pessoa_Estrangeira/Informacoes_Cliente.vue';


export default {
  name: 'Inicio',
  components: {
    Informacoes_Cliente
  }
}

</script>

<style src="./estilo_p_estrangeira/estilo_inicio_p_estrangeira.scss"  lang="scss" />

