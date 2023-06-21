<template>
        <div id="Corpo_Tela_Inicial">
           
            <h1 class="h1-seja-bem-vindo">Seja bem-vindo</h1>
           
            <div style="width: 100%; margin-top: 5%;">
                <img src="../../assets/images/icone_cliente.png" style="width: 5%; position: absolute; margin-top: -5px; margin-left: 36%;"/>
                <h2>
                    <router-link  class="h1_Cadastro_Cliente" to="Selecao_Tipo_Pessoa">Cadastro de Clientes</router-link>
                </h2>

                <img src="../../assets/images/icone_vendas.png" style="width: 5%; position: absolute; margin-top: -5px; margin-left: 56%; "/>
                <h2>
                    <router-link  class="h1_Cadastro_Venda" to="Cadastro_Teste">Cadastro de Vendas</router-link>
                </h2>
            </div>
            
        </div>

        <Footer />
</template>

<script>
import Footer from '../Footer.vue';
 
export default{
    name: 'Tela_Inicial',
    components:{
        Footer
    }
}

</script>
<style src="./estilo_tela_inicio.scss" lang="scss"> 

</style>
