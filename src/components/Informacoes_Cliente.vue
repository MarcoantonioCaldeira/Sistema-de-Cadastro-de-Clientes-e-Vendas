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


        <div  v-for="(input, index) in inputs">
            <input type="text" :name="'contact[' + index + '][email]'" placeholder="Seu email">
            <button type="button" v-on:click="deletar_email(index)"><i class="fa fa-times"></i></button>
        </div>    

        <button  type="button" v-on:click="adicionar_email" class="input">Adicionar outro email</button>
      
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
    async created() {
        this.adicionar_email();
    }, 
    data(){
        return{
            pessoa:"CNPJ",
            pessoas: null,
            inputs: []
        };
    },
    mathods: {
        adicionar_email: function(){
            this.inputs.push({
                email: ""
            });
        },
        deletar_email: function(index) {
            this.inputs.splice(index, 1);
        }
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
