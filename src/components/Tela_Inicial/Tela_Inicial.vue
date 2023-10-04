<template>
        <div id="Corpo_Tela_Inicial">
           
            <h1 class="h1-seja-bem-vindo">Seja bem-vindo</h1>
           
            <div class="opcoes_tela_inicio">
                <img  class="img_icone_cliente"  src="../../assets/images/icone_cliente.png"/>
                <h2>
                    <router-link  class="h1_Cadastro_Cliente" to="Selecao_Tipo_Pessoa">Cadastro de Clientes</router-link>
                </h2>

                <img class="img_icone_vendedor" src="../../assets/images/icone_vendas.png"/>
                
                <h2>
                    <router-link  class="h1_Cadastro_Venda" to="Cadastro_de_Vendas">Cadastro de Vendas</router-link>
                </h2>
            </div>
            
        </div>

        <Footer />
</template>

<script>
import Footer from '../Footer.vue';
//import Menu from '../Menu.vue'
 
export default{
    name: 'Tela_Inicial',
    components:{
        Footer
    },

    methods:{
        // barra_prograsso(){
        //     Menu.methods.barra_prograsso();
        // }
    }
}

</script>
<style src="./estilo_tela_inicio.scss" lang="scss"> 

</style>
