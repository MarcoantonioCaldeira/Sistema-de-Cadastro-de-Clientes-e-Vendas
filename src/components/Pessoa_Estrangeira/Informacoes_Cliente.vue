<template>
    <h2 id="h2-informacoes">Informações do cliente</h2>

    <div>

        <input type="text" for="nome"  placeholder="Seu Nome" class="input" v-model="nome_apelido"/>
        <div id="nome_apelido"  data-text="Nome apelido">
            {{ nome_apelido }} {{ num++ }}
        </div>
        <input type="text"  placeholder="Seu email principal" class="input">
        <input type="text" for="email_nfe" placeholder="Seu email nfe" class="input">


        <div>
            <input   v-for="i in input"  :key="i"  type="text" :id='"item"+i' :placeholder="'Seu email' + i" style="display: block" class="input">
            <button type="button" @click="deleteRow(index)">Deletar</button>
        </div>    

        <button  type="button" @click="input++" class="btn_adicionar_email" id="send">
            Adicionar outro email
            <img src="src/assets/images/icon_add.png" />
        </button>
      
        <input type="number" placeholder="Seu telefone" class="input">
        <input type="number" placeholder="Celular" class="input">
        <div> 
            <input type="text"  v-model="pessoas" :placeholder="[[ pessoa ]]" class="input"/>
        </div>
        <br><label  class="lb_rg">Seu RG:</label><input type="text" style="display: inline" class="input_secundario_rg"><br><br>
        <br><label class="lb_dt">Data de Nascimento:</label><input type="date" style="display: inline" class="input_secundario_data">
    </div>
</template>
<script>

import { required, minLength, between } from 'vuelidate/lib/validators';


export default{
    name: 'Informacoes_Cliente', 
    data(){
        return{
            pessoa:"CNPJ",
            pessoas: null,
            nome_apelido: "",
            num:1,
            input: 1
        };
    },
    mathods: {
        deleteRow(index) {
            this.input.splice(index, 1);
        },
        validations: {
        nome: {
                required,
                minLength: minLength(4)
            }
        }
    }
   
}
</script>
<style >
@import "@/assets/scss/index.scss"; 
</style>