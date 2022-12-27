<template>

    <div id="conteudo">

        <div id="endereco_principal">
            <h2 class="h2_endereco">Endereço principal</h2>    
            <label class="lb_cep">Seu CEP:  </label><input type="text" class="input_cep" >
            <input type="text" placeholder="Endereço" class="input_endereco">
            <input type="text" placeholder="Numero" class="input_endereco">
            <input type="text" placeholder="Complemento(opcional)" class="input_endereco">
            <input type="text" placeholder="Bairro" class="input_endereco">
            <input type="text" placeholder="Cidade" class="input_endereco">
            <input type="text" placeholder="Estado" class="input_endereco">
        </div>
    
        <div id="endereco_secundario">
            <h2 class="h2_endereco">Endereço de cobrança<br>(opcional)</h2>
            <div id="campos_endereco_secundario">
                <label class="lb_cep">Seu CEP: </label><input type="text" class="input_cep" style="opacity : 0.8;">
                <input type="text" placeholder="Endereço" class="input_endereco" style="opacity : 0.8;">
                <input type="text" placeholder="Numero" class="input_endereco" style="opacity : 0.8;">
                <input type="text" placeholder="Complemento(opcional)"  class="input_endereco" style="opacity : 0.8;">
                <input type="text" placeholder="Bairro" class="input_endereco" style="opacity : 0.8;">
                <input type="text" placeholder="Cidade" class="input_endereco" style="opacity : 0.8;">
                <input type="text" placeholder="Estado" class="input_endereco" style="opacity : 0.8;">
            </div>
        </div>
    
    
        <div id="endereco_terciario">
            <h2 class="h2_endereco">Endereço de entrega<br>(opcional)</h2>
            <div id="campos_endereco_terciario">
                <label class="lb_cep">Seu CEP: </label><input type="text" class="input_cep" style="opacity : 0.8;">
                <input type="text" placeholder="Endereço" class="input_endereco" style="opacity : 0.8;">
                <input type="text" placeholder="Numero" class="input_endereco" style="opacity : 0.8;">
                <input type="text" placeholder="Complemento(opcional)" class="input_endereco" style="opacity : 0.8;">
                <input type="text" placeholder="Bairro" class="input_endereco" style="opacity : 0.8;">
                <input type="text" placeholder="Cidade" class="input_endereco" style="opacity : 0.8;">
                <input type="text" placeholder="Estado" class="input_endereco" style="opacity : 0.8;">
            </div>
        </div>

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
