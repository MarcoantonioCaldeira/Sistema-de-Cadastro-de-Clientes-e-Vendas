<template>

    <h2>Selecione sua classificacao</h2>
    <div id="tipo_pessoa">
        <input type="radio"  v-model="pessoa" value="CPF"/>
        <label>Pessoa Fisica</label><br>
        
        <input type="radio"  v-model="pessoa" value="CNPJ"/>
        <label>Pessoa Juridica</label><br>

        <input type="radio" v-model="pessoa" value="CPF Pessoa Estrangeira"/>
        <label>Pessoa Estrangeira</label><br>
    </div>

    <div>

        <input type="text" placeholder="Digite o seu nome"  class="input">
        <input type="text" placeholder="Nome apelido" class="input">
        <input type="text" placeholder="Seu email principal" class="input">
        <input type="text" placeholder="Seu email nfe" class="input">


        <div>
            <input v-for="i in input" :key="i"  type="text" :id='"item"+i' :placeholder="'Seu email' + i" style="display: block">
        </div>    

        <button  type="button" @click="input++" class="input">Adicionar outro email</button>
      
        <input type="number" placeholder="Seu telefone" class="input">
        <input type="number" placeholder="Celular" class="input">
        <div> 
            <input type="text"  v-model="pessoas" :placeholder="[[ pessoa ]]" />
        </div>
        <br>Seu RG:<input type="text" style="display: inline">
        <br>Data de Nascimento: <input type="date" style="display: inline">
    </div>
</template>
<script>


export default{
    name: 'Informacoes_Cliente', 
    data(){
        return{
            pessoa:"CNPJ",
            pessoas: null,
            input: 1
        };
    },
    mathods: {

    }
}
</script>
<style>
#tipo_pessoa{
    width: 20%;
    height: 200px;
    background-color: rgb(170, 170, 170);
}

.input{
    display:block
}
</style>
