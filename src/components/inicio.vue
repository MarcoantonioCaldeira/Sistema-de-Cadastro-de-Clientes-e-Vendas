<template>
  <div>
    <h1>Cadastro de cliente(teste)</h1>
    <p>Preencha os campos para cadastrar um novo cliente!!!</p>
    <Classificacao />
    <Informacoes_Cliente />
    <Tipo_Suframa />
    <Input_observacoes />
    <router-link to="/Sobre">Proxima etapa</router-link>
  </div>
</template>

<script>

import Informacoes_Cliente from './Informacoes_Cliente.vue';
import Classificacao from './Classificacao.vue';
import Tipo_Suframa from './Tipo_Suframa.vue';
import Input_observacoes from './Input_observacoes.vue';

export default {
  name: 'Inicio',
  components: {
    Classificacao,
    Informacoes_Cliente,
    Tipo_Suframa,
    Input_observacoes 
  }
}
</script>

<style scoped>

</style>
