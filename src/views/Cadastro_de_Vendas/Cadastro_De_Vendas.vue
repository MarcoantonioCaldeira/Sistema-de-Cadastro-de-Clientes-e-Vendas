<template>
    <div id="Formulario">

        <h1 class="Titulo_Cadastro_Vendas">Cadastro de Vendas</h1>
    
        <div class="Formulario_1">
            <input type="text" class="InputForm_Vendas"   placeholder="Codigo da Empresa">
            <input type="text" class="InputForm_Vendas" placeholder="Codigo da Tabela de Preço">
            <input type="text" class="InputForm_Vendas" placeholder="Codigo do Vendedor">

            <div>
                <p class="p_data_e">Data de Emissão: </p><input type="date" class="InputForm_Vendas" placeholder="Data da Emissão">
            </div>
            
            <div>
                <p class="p_data_p">Data de Previsão de Entrega Solicitada: </p><input type="date" class="InputForm_Vendas" placeholder="Data da Previsão de Entrega Solicitada">
            </div>            
        
            <input type="text" class="InputForm_Vendas" placeholder="desconto_n1">
            <input type="text" class="InputForm_Vendas" placeholder="desconto_n2">
            <input type="text" class="InputForm_Vendas" placeholder="desconto_n3">
            <input type="text" class="InputForm_Vendas" placeholder="desconto_n4">
    
        </div>
    
        <div class="Formulario_2">
            <input type="text" class="InputForm_Vendas" placeholder="Desconto de Pagamento">
            <input type="text" class="InputForm_Vendas" placeholder="desconto_s1">
            <input type="text" class="InputForm_Vendas" placeholder="desconto_s2">
            <input type="text" class="InputForm_Vendas" placeholder="desconto_s3">
            <input type="text" class="InputForm_Vendas" placeholder="desconto_s4">
        
            <input type="text" class="InputForm_Vendas" placeholder="Tipo de Frete">
            <input type="text" class="InputForm_Vendas" placeholder="Forma de Pagamento">
            <input type="text" class="InputForm_Vendas" placeholder="Codigo do Prazo">
          
            
            <input type="text" class="InputForm_Vendas" placeholder="Situação do Frete">
            <input type="text" class="InputForm_Vendas" placeholder="Valor do Frete">
            <input type="text" class="InputForm_Vendas" placeholder="Tipo de Venda">
        </div>
        
        <router-link to="Itens_da_Venda"><button class="btn_concluir_cadastro_vendas" type="submit">Concluir Cadastro</button></router-link>

    </div>
    <Footer />
</template>

<script>

import Footer from '@/components/Footer.vue'

export default{
    name: 'Cadastro_De_Vendas',
    components: {
    Footer
  }
}
</script>


<style src="./estilo.scss" lang="scss">

</style>