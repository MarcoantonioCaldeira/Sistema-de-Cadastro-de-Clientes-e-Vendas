<template>
    <div class="Formulario">

        <h1 class="titulo">Cadastro de Vendas</h1>
    
    
        <input type="text" class="InputForm"   placeholder="Codigo da Empresa">
        <input type="text" class="InputForm" placeholder="Codigo da Tabela de Preço">
        <input type="text" class="InputForm" placeholder="Codigo do Vendedor">
    
        <p>Data de Emissão: </p><input type="date" class="InputForm" placeholder="Data da Emissão">
        <p>Data de Previsão de Entrega Solicitada: </p><input type="date" class="InputForm" placeholder="Data da Previsão de Entrega Solicitada">
        
    
        <input type="text" class="InputForm" placeholder="desconto_n1">
        <input type="text" class="InputForm" placeholder="desconto_n2">
        <input type="text" class="InputForm" placeholder="desconto_n3">
        <input type="text" class="InputForm" placeholder="desconto_n4">
    
        <input type="text" class="InputForm" placeholder="Desconto de Pagamento">
    
        <input type="text" class="InputForm" placeholder="desconto_s1">
        <input type="text" class="InputForm" placeholder="desconto_s2">
        <input type="text" class="InputForm" placeholder="desconto_s3">
        <input type="text" class="InputForm" placeholder="desconto_s4">
    
        <input type="text" class="InputForm" placeholder="Tipo de Frete">
        <input type="text" class="InputForm" placeholder="Forma de Pagamento">
        <input type="text" class="InputForm" placeholder="Codigo do Prazo">
        <!-- <input type="text" class="InputForm" placeholder="ID Venda API">
        <input type="text" class="InputForm" placeholder="ID Venda Terceiro"> -->
        <input type="text" class="InputForm" placeholder="Situação do Frete">
        <input type="text" class="InputForm" placeholder="Valor do Frete">
        <input type="text" class="InputForm" placeholder="Tipo de Venda">
    
        <button>Concluir Cadastro</button>

      </div>
      <rodape />
</template>

<script>



export default{
    name: 'Cadastro_De_Vendas'
}
</script>


<style>

</style>