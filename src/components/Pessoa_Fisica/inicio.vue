<template>
  <etapas />
  
  <div id="corpo_formulario">

    <h1 id="h1-titulo">Cadastro do cliente</h1>
    <p>(Preencha os campos para cadastrar um novo cliente)</p>

    <Informacoes_Cliente />

    <div id="suframa">
      <Tipo_Suframa />
    </div>
    
    <div id="conteudo_observacoes">
      <Input_observacoes />
    </div>
    <router-link to="Cadastro_pt_2"><button class="btn_proxima_etapa" v-on:submit.prevent="(Cadastro_Informacoes)">Proxima etapa</button></router-link>
  </div>
</template>

<script>
  import Informacoes_Cliente from '@/components/Pessoa_Fisica/Informacoes_Cliente.vue';
  import Tipo_Suframa from './Tipo_Suframa.vue';
  import Input_observacoes from '@/components/Pessoa_Fisica/Input_observacoes.vue';
  import etapas from './etapas.vue'

  export default {
    name: 'Inicio',
    components: {
      Informacoes_Cliente,
      Tipo_Suframa,
      Input_observacoes,
      etapas
    }
  }
</script>

<style src="./estilo_inicio.scss"  lang="scss" />

