<template>
  <etapas />

  <div id="corpo_formulario_estrangeiro">
    <h1 id="h1-titulo">Cadastro do cliente</h1>
    <p>(Preencha os campos para cadastrar um novo cliente)</p>
    <Informacoes_Cliente />

    <div id="conteudo_observacoes">
      <Input_observacoes />
    </div>
    <router-link to="Cadastro_pt_2"><button class="btn_proxima_etapa_3">Proxima etapa</button></router-link>
  </div>
</template>

<script>

import Informacoes_Cliente from '@/components/Pessoa_Estrangeira/Informacoes_Cliente.vue';
import Input_observacoes from '@/components/Pessoa_Estrangeira/Input_observacoes.vue';
import etapas from './etapas.vue'

export default {
  name: 'Inicio',
  components: {
    Informacoes_Cliente,
    Input_observacoes,
    etapas
  }
}
</script>

<style src="./estilo_inicio_p_estrangeira.scss"  lang="scss" />

