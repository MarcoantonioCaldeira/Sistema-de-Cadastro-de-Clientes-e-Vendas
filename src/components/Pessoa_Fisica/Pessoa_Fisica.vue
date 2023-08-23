
<template> 
    <div id="Area_Pessoa_Fisica"  v-on:click="pessoa_fisica">
        <router-link to="Cadastro_pt_1_P_Fisica"><h2 class="h2_p_fisica">Pessoa Física</h2></router-link>
    </div>
</template>

<script>
export default {
    name: 'Pessoa_Fisica'
}
</script>
<style  lang="scss">
@import "@/assets/scss/index.scss";



.h2_p_fisica {
    position: center;
    color: $cor_3;
    padding-top: 30px;
    margin-left: 30%;
    text-decoration: none;
}

</style>