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

#Area_Pessoa_Estrangeira {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    width: 400px !important;
    margin-left: 35%;
    margin-top: 3%;
    height: 100px;
    font-family: $font_2;
    background-color: $cor_4;
    border-radius: 5px;
  }
  
  .h2_p_estrangeira {
    color: $cor_3;
    position: center;
    margin-left: 20%;
    padding-top: 30px;
    text-decoration: none;
  }

</style>
