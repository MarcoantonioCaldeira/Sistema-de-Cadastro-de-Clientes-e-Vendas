<template> 
    <div id="Formulario_Itens_Venda"> 

        <h1 class="Titulo_Itens_Venda">Itens da Venda</h1>

        <div id="conteudo_formulario">
            <input type="text" class="Input_Form_Itens_Venda" placeholder="Codigo de linha" v-model="cod_referencia">
            <input type="text" class="Input_Form_Itens_Venda" placeholder="Codigo de modelo" v-model="cod_referencia">
            <input type="text" class="Input_Form_Itens_Venda" placeholder="Codigo de cor" v-model="cod_referencia">

            <input type="text" class="Input_Form_Itens_Venda" placeholder="Quantidade de Caixa" v-model="qtd_caixa">
            <input type="text" class="Input_Form_Itens_Venda" placeholder="tipo do Item" v-model="tipo_do_item">
            <input type="text" class="Input_Form_Itens_Venda" placeholder="Observação do Item" v-model="obs_item">

            <input type="text" class="Input_Form_Itens_Venda" placeholder="Temanho" v-model="tamanho">
            <input type="text" class="Input_Form_Itens_Venda" placeholder="Quantidade de Itens"  v-model="qtd_tamanho">
            <input type="text" class="Input_Form_Itens_Venda" placeholder="Valor Unitario" v-model="valor_unitario">
        </div>
    

        <button class="btn_cadastro_itens_venda">Cadastrar Itens da Venda</button>
    </div>
    <Footer />
</template>

<script>

import Footer from '@/components/Footer.vue';

export default{
    name: 'Itens_da_Venda',
    components:{
        Footer 
    },

    data(){
    
    }
}

</script>


<style src="./estilo_itens_da_venda.scss" lang="scss"> 
</style>
