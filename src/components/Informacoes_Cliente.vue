<template>
    <h2 class="h2">Selecione sua classificação</h2>
    <div id="tipo_pessoa">
        <input type="radio"  v-model="pessoa" value="CPF" />
        <label>Pessoa Fisica</label><br>
        
        <input type="radio"  v-model="pessoa" value="CNPJ"/>
        <label>Pessoa Juridica</label><br>

        <input type="radio" v-model="pessoa" value="DOC"/>
        <label>Pessoa Estrangeira</label><br>
    </div>

    <h1 id="h1-informacoes">Informações do cliente</h1>

    <div>
        <input type="text" v-model="nome_fatansia" :placeholder="[[ nome_fatasia ]]" class="input"/>
        <input type="text" placeholder="Nome apelido" class="input">
        <input type="text" placeholder="Seu email principal" class="input">
        <input type="text" placeholder="Seu email nfe" class="input">


        <div>
            <input v-for="i in input" :key="i"  type="text" :id='"item"+i' :placeholder="'Seu email' + i" style="display: block" class="input">
        </div>    

        <button  type="button" @click="input++" class="btn_adicionar_email">Adicionar outro email</button>
      
        <input type="number" placeholder="Seu telefone" class="input">
        <input type="number" placeholder="Celular" class="input">
        <div> 
            <input type="text"  v-model="pessoas" :placeholder="[[ pessoa ]]" class="input"/>
        </div>
        <br>Seu RG:<input type="text" style="display: inline" class="input">
        <br>Data de Nascimento: <input type="date" style="display: inline" class="input">
    </div>
</template>
<script>


export default{
    name: 'Informacoes_Cliente', 
    data(){
        return{
            pessoa:"CNPJ",
            pessoas: null,
            nome_fatasia: "Nome Fantasia",
            input: 1
        };
    },
    mathods: {

    }
}
</script>