
<template> 
    <div id="Area_Pessoa_Fisica"  v-on:click="pessoa_fisica">
        <router-link to="Cadastro_pt_1_P_Fisica"><h2 class="h2_p_fisica">Pessoa Fisica</h2></router-link>
    </div>
</template>

<script>
export default {
    name: 'Pessoa_Fisica'
}
</script>
<style  lang="scss">
@import "@/assets/scss/index.scss";

#Area_Pessoa_Fisica {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    width: 20%;
    margin-left: 40%;
    margin-top: 3%;
    height: 90px;
    font-family: $font_2;
    background-color: $cor_4;
    border-radius: 5px;
}


.h2_p_fisica {
    color: $cor_3;
    position: relative;
    margin-left: 20%;
    top: 28%;
    text-decoration: none;
}

</style>