<template> 
    <div id="Area_Pessoa_Estrangeira" v-on:click="pessoa_estrangeira">
        <router-link to="Cadastro_pt_1_P_Estrangeira"><h2 class="h2_p_estrangeira">Pessoa Estrangeira</h2></router-link>
    </div>
</template>

<script>
export default {
    name: 'Pessoa_Estrangeira'
}
</script>
<style  lang="scss">
@import "@/assets/scss/index.scss";

  
  .h2_p_estrangeira {
    color: $cor_3;
    position: center;
    margin-left: 20%;
    padding-top: 30px;
    text-decoration: none;
  }

</style>
