<template>
  <div>
    <h1>Cadastro de cliente(teste)</h1>
    <p>Preencha os campos para cadastrar um novo cliente!!!</p>
    <Classificacao />
    <Informacoes_Cliente />
  </div>
</template>

<script>

import Informacoes_Cliente from './Informacoes_Cliente.vue';
import Classificacao from './Classificacao.vue';

export default {
  name: 'Inicio',
  components: {
    Classificacao,
    Informacoes_Cliente
  }
}
</script>

<style scoped>

</style>
