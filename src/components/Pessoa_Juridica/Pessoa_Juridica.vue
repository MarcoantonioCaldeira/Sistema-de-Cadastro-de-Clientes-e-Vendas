<template> 
    <div id="Area_Pessoa_Juridica" v-on:click="pessoa_juridica">
        <router-link to="Cadastro_pt_1_P_Juridica"><h2 class="h2_p_juridica">Pessoa Juridica</h2></router-link>
    </div>
</template>

<script>

export default{
  name: 'Pessoa_Juridica'
}

</script>
<style  lang="scss">
@import "@/assets/scss/index.scss";

#Area_Pessoa_Juridica {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  width:400px !important;
  margin-top: 3%;
  margin-left: 35%;
  height: 100px;
  font-family: $font_2;
  background-color: $cor_4;
  border-radius: 5px;
}

.h2_p_juridica {
  color: $cor_3;
  position: center;
  padding-top: 30px;
  text-decoration: none;
}

</style>
