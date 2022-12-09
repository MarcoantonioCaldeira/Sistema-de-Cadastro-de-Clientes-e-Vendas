<template>
    <h2 class="h2">Selecione sua classificação</h2>
    <div id="tipo_pessoa">
       
        <label style="margin-left:2%">Pessoa Fisica</label>
        <input type="radio"  v-model="pessoa" value="CPF" class="radio_1"/><br>
        
       
        <label style="margin-left:2%">Pessoa Juridica</label>
        <input type="radio"  v-model="pessoa" value="CNPJ" class="radio_2"/><br>

        <label style="margin-left:2%">Pessoa Estrangeira</label>
        <input type="radio" v-model="pessoa" value="DOC"   class="radio_3"/><br>
    </div>

    <h2 id="h2-informacoes">Informações do cliente</h2>

    <div>
        <div v-if="radio_1 == true">
            <input type="text" placeholder="Seu Nome" class="input"/>
        </div>
        <div>
            <input type="text" placeholder="Seu Nome Fantasia" class="input"/>
        </div>
        <input type="text" placeholder="Nome apelido" class="input_apelido">
        <input type="text" placeholder="Seu email principal" class="input">
        <input type="text" placeholder="Seu email nfe" class="input">


        <div>
            <input v-for="i in input" :key="i"  type="text" :id='"item"+i' :placeholder="'Seu email' + i" style="display: block" class="input">
        </div>    

        <button  type="button" @click="input++" class="btn_adicionar_email">
            Adicionar outro email
            <img src="src/assets/images/icon_add.png" />
        </button>
      
        <input type="number" placeholder="Seu telefone" class="input">
        <input type="number" placeholder="Celular" class="input">
        <div> 
            <input type="text"  v-model="pessoas" :placeholder="[[ pessoa ]]" class="input"/>
        </div>
        <br><label style="margin-left: 5%">Seu RG:</label><input type="text" style="display: inline" class="input_secundario_rg">
        <br><label style="margin-left: 5%">Data de Nascimento:</label><input type="date" style="display: inline" class="input_secundario_data">
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
<style >
@import "@/assets/scss/index.scss"; 
</style>