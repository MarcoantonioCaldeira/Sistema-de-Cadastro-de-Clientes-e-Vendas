<template>
  <etapas />
  <Message :msg="msg" v-show="msg" />
  <form-box id="corpo_formulario" method="POST" @click="$emit('Cadastrar')">

    <h1 id="h1-titulo">Cadastro do cliente</h1>
    <p>(Preencha os campos para cadastrar um novo cliente)</p>

    <Informacoes_Cliente />

    <div id="suframa">
      <Tipo_Suframa />
    </div>
    
    <div id="conteudo_observacoes">
      <Input_observacoes />
    </div>

    <!---<router-link to="Cadastro_pt_2"><button type="submit" class="btn_proxima_etapa">Proxima etapa</button></router-link>--->
    <input class="submit-btn" type="submit" value="CADASTRAR">
  </form-box>
  <slot></slot>
</template>

<script>
  import Message from './Message.vue'
  import Informacoes_Cliente from '@/components/Pessoa_Fisica/Informacoes_Cliente.vue';
  import Tipo_Suframa from './Tipo_Suframa.vue';
  import Input_observacoes from '@/components/Pessoa_Fisica/Input_observacoes.vue';
  import etapas from './etapas.vue'

  export default {
    name: 'Inicio',
    data(){
      return{
        submitStatus: null
      }
    },
    components: {
      Informacoes_Cliente,
      Tipo_Suframa,
      Input_observacoes,
      etapas,
      Message
    }
  }
</script>

<style src="./estilo_inicio.scss"  lang="scss" />

