<template>
  <div id="corpo_formulario">
    <div id="etapas">
      <v-img :src="require('@/assets/images/cronograma.png')" />
    </div>
    <h1 id="h1-titulo">Cadastro do cliente</h1>
    <p>(Preencha os campos para cadastrar um novo cliente)</p>
    <Informacoes_Cliente />

    <div id="suframa">
      <Tipo_Suframa />
    </div>
    
    <div id="conteudo_observacoes">
      <Input_observacoes />
    </div>
    <router-link to="Cadastro_pt_2"><button class="btn_proxima_etapa">Proxima etapa</button></router-link>
  </div>
</template>

<script>

import Informacoes_Cliente from '@/components/Pessoa_Juridica/Informacoes_Cliente.vue';
import Tipo_Suframa from './Tipo_Suframa.vue';
import Input_observacoes from '@/components/Pessoa_Juridica/Input_observacoes.vue';

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

