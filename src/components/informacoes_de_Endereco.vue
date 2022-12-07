<template>
    <div id="conteudo">

        <div id="endereco_1">
            <h2 class="h2_endereco">Endereço principal</h2>
    
            <h3>Seu CEP:</h3><input type="text" style="display:inline-block" class="input_cep">
            <input type="text" placeholder="Endereço" class="input">
            <input type="text" placeholder="Numero" class="input">
            <input type="text" placeholder="Complemento(opcional)" class="input">
            <input type="text" placeholder="Bairro" class="input">
            <input type="text" placeholder="Cidade" class="input">
            <input type="text" placeholder="Estado" class="input">
        </div>
    
        <!--<div id="endereco_2">
            <h2 class="h2_endereco">Endereço de cobrança<br>(opcional)</h2>
    
            <br>Seu CEP:<input type="text" style="display:inline-block">
            <input type="text" placeholder="Endereço" class="input">
            <input type="text" placeholder="Numero" class="input">
            <input type="text" placeholder="Complemento(opcional)">
            <input type="text" placeholder="Bairro" class="input">
            <input type="text" placeholder="Cidade" class="input">
            <input type="text" placeholder="Estado" class="input">
        </div>
    
    
        <div id="endereco_3">
            <h2 class="h2_enderco">Endereço de entrega<br>(opcional)</h2>
    
            <br>Seu CEP:<input type="text" style="display:inline-block">
            <input type="text" placeholder="Endereço" class="input">
            <input type="text" placeholder="Numero" class="input">
            <input type="text" placeholder="Complemento(opcional)">
            <input type="text" placeholder="Bairro" class="input">
            <input type="text" placeholder="Cidade" class="input">
            <input type="text" placeholder="Estado" class="input">
        </div>-->

        <router-link to="/Cadastro_concluido"><button class="btn_concluir">Comcluir cadastro</button></router-link>
    </div>
</template>
<script>
 export default{
    name: 'Informacoes_Endereco'
 }
</script>

<style>
@import "@/assets/scss/index.scss"; 
</style>
