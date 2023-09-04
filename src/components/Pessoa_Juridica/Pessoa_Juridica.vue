<template> 
    <div id="Area_Pessoa_Juridica" v-on:click="pessoa_juridica">
        <router-link to="Cadastro_pt_1_P_Juridica"><h2 class="h2_p_juridica">Pessoa Jurídica</h2></router-link>
    </div>
</template>

<script>

export default{
  name: 'Pessoa_Juridica'
}

</script>
<style  lang="scss">
@import "@/assets/scss/index.scss";

.h2_p_juridica {
  color: $cor_3;
  margin-left: 25%;
  padding-top: 30px;
  text-decoration: none;
}

</style>
