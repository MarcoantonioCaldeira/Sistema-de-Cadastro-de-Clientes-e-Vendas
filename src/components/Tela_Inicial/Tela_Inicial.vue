<template>
        <div id="Corpo_Tela_Inicial">
           
            <h1 class="h1-seja-bem-vindo">Seja bem-vindo</h1>
           
            <div style="width: 100%; background-color: red; margin-top: 5%;">
                <h2 class="h1_Cadastro_Cliente"><router-link to="Selecao_Tipo_Pessoa">Cadastro de Clientes</router-link></h2>
                <h2 class="h1_Cadastro_Venda"><router-link to="Cadastro_Teste">Cadastro de Vendas</router-link></h2>
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
