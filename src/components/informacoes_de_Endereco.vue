<template>
    <div id="conteudo">

        <div id="endereco_1">
            <h2>Endereço principal</h2>
    
            <br>Seu CEP:<input type="text" style="display:inline-block">
            <input type="text" placeholder="Endereço" class="input">
            <input type="text" placeholder="Numero" class="input">
            <input type="text" placeholder="Complemento(opcional)">
            <input type="text" placeholder="Bairro" class="input">
            <input type="text" placeholder="Cidade" class="input">
            <input type="text" placeholder="Estado" class="input">
        </div>
    
        <div id="endereco_2">
            <h2>Endereço de cobrança<br>(opcional)</h2>
    
            <br>Seu CEP:<input type="text" style="display:inline-block">
            <input type="text" placeholder="Endereço" class="input">
            <input type="text" placeholder="Numero" class="input">
            <input type="text" placeholder="Complemento(opcional)">
            <input type="text" placeholder="Bairro" class="input">
            <input type="text" placeholder="Cidade" class="input">
            <input type="text" placeholder="Estado" class="input">
        </div>
    
    
        <div id="endereco_3">
            <h2>Endereço de entrega<br>(opcional)</h2>
    
            <br>Seu CEP:<input type="text" style="display:inline-block">
            <input type="text" placeholder="Endereço" class="input">
            <input type="text" placeholder="Numero" class="input">
            <input type="text" placeholder="Complemento(opcional)">
            <input type="text" placeholder="Bairro" class="input">
            <input type="text" placeholder="Cidade" class="input">
            <input type="text" placeholder="Estado" class="input">
        </div>
    
        <router-link to="/Cadastro_pt_1"><button>Comcluir cadastro</button></router-link>
        
    </div>
</template>
<script>


 export default{
    name: 'Informacoes_Endereco'
 }
</script>

<style>

#conteudo{
    width: 100%;
    height: 1000px;
}

#endereco_1, #endereco_2, #endereco_3{
    display: inline-block;
}

.input{
    @include input;
}
</style>
