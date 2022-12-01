<template>
  <div id="corpo_formulario">
    <h1>Cadastro de cliente(teste)</h1>
    <p>Preencha os campos para cadastrar um novo cliente!!!</p>
    <Informacoes_Cliente />
    <Tipo_Suframa />
    <Input_observacoes />
    <router-link to="/Cadastro_pt_2">Proxima etapa</router-link>
  </div>
</template>

<script>

import Informacoes_Cliente from './Informacoes_Cliente.vue';
import Tipo_Suframa from './Tipo_Suframa.vue';
import Input_observacoes from './Input_observacoes.vue';

export default {
  name: 'Inicio',
  components: {
    Informacoes_Cliente,
    Tipo_Suframa,
    Input_observacoes 
  }
}
</script>

<style>

#corpo_formulario{
  width: 100%;
  height: 800px;
}

</style>
