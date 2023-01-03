<template> 
<p class="p_obs">Observações</p>
<textarea class="text_area" v-model="observacoes">

</textarea>
</template>

<script>
import axios from 'axios'

export default{

   name: 'Input_observacoes',

   methods: {
      Cadastro_Informacoes(){
            axios({
               method: 'post',
               url: 'localhost:9000/clientes',
               data: {
                  observacoes: "",
            }
         })
      }
   }

}
</script>

<style>

</style>