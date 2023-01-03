<template> 
    <div id="Area_Pessoa_Juridica" v-on:click="pessoa_juridica">
        <router-link to="Cadastro_pt_1_P_Juridica"><h2 class="h2_p_juridica">Pessoa Juridica</h2></router-link>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Pessoa_Juridica',


    methods: {
      Cadastro_Informacoes(){
            axios({
               method: 'post',
               url: 'localhost:9000/clientes',
               data: {
                pessoa_juridica: 0,
            }
        })
      }
   }
}
</script>
<style src="./estilo_inicio_p_juridica.scss"  lang="scss">

</style>
