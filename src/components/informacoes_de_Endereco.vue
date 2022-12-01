<template>
    <div>
        <h2>Endereço principal</h2>

        <br>Seu CEP:<input type="text" style="display:inline-block">
        <input type="text" placeholder="Endereço" class="input">
        <input type="text" placeholder="Numero" class="input">
        <input type="text" placeholder="Complemento(opcional)">
        <input type="text" placeholder="Bairro" class="input">
        <input type="text" placeholder="Cidade" class="input">
        <input type="text" placeholder="Estado" class="input">
    </div>

    <div>
        <h2>Endereço de cobrança<br>(opcional)</h2>

        <br>Seu CEP:<input type="text" style="display:inline-block">
        <input type="text" placeholder="Endereço" class="input">
        <input type="text" placeholder="Numero" class="input">
        <input type="text" placeholder="Complemento(opcional)">
        <input type="text" placeholder="Bairro" class="input">
        <input type="text" placeholder="Cidade" class="input">
        <input type="text" placeholder="Estado" class="input">
    </div>


    <div>
        <h2>Endereço de entrega<br>(opcional)</h2>

        <br>Seu CEP:<input type="text" style="display:inline-block">
        <input type="text" placeholder="Endereço" class="input">
        <input type="text" placeholder="Numero" class="input">
        <input type="text" placeholder="Complemento(opcional)">
        <input type="text" placeholder="Bairro" class="input">
        <input type="text" placeholder="Cidade" class="input">
        <input type="text" placeholder="Estado" class="input">
    </div>

</template>
<script>
 export default{
    name: 'Informacoes_Endereco'
 }
</script>

<style>
.input{
    display: block;
}

div{
    display: inline-block;
}
</style>
