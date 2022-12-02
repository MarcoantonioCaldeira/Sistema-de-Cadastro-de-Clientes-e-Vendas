<template>
  <div id="corpo_formulario">

    <div id="etapas">
      <h3>Aqui vai ficar as etapas</h3>
    </div>

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

<style src="./estilo_inicio.scss"  lang="scss" />

