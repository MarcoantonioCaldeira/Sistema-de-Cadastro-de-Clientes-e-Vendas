<template>
  <div id="corpo_formulario">
    <h1 id="h1-titulo">Cadastro do cliente</h1>
    <p>(Preencha os campos para cadastrar um novo cliente)</p>
    <Informacoes_Cliente />
    <Tipo_Suframa />
    <Input_observacoes />
    <router-link to="Cadastro_p1_2/Cadastro_pt_2">Proxima etapa</router-link>
  </div>
</template>

<script>

import Informacoes_Cliente from '@/components/Informacoes_Cliente.vue';
import Tipo_Suframa from '@/components/Tipo_Suframa.vue';
import Input_observacoes from '@/components/Input_observacoes.vue';

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
  height: 1200px;
}

#h1-titulo{
  font-family: Arial, Helvetica, sans-serif;
  margin-left: 5%;
  color: #9B9A9A;
  margin-top: 13%;
}

p{
  font-family: Arial, Helvetica, sans-serif;
  margin-left: 5%;
  color: #9B9A9A;
}

</style>
