<template>
    <h2>Selecione sua classificacao</h2>
    <div id="tipo_pessoa">
        Pessoa Fisica<input type="radio">
        Pessoa Juridica<input type="radio">
        Pessoa Estrangeira<input type="radio">
    </div>
</template>
<script>
export default{
    name: 'Classificacao'
}
</script>
<style>
    #tipo_pessoa{
        width: 20%;
        height: 200px;
        background-color: rgb(170, 170, 170);
    }

    input{
        display: block;
    }
</style>