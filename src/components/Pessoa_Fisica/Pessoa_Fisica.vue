<template> 
    <div id="Area_Pessoa_Fisica"  v-on:click="pessoa_fisica">
        <router-link to="Cadastro_pt_1_P_Fisica"><h2 class="h2_p_fisica">Pessoa Fisica</h2></router-link>
    </div>
</template>

<script>

export default {
    name: 'Pessoa_Fisica',

    methods: {
      Cadastro_Informacoes(){
            axios({
               method: 'post',
               url: 'localhost:9000/clientes',
               data: {
                pessoa_fisica: 1,
            }
        })
      }
   }
}
</script>
<style src="./estilo_inicio.scss"  lang="scss">

</style>
