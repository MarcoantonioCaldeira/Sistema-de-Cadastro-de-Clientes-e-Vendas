<template>

    <h2 id="h2-informacoes">Informações do cliente</h2>

    <div>
        <input type="text" for="nome"  placeholder="Seu Nome" class="input" v-model="nome_apelido" />
        <div id="nome_apelido"  data-text="Nome apelido" >
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

import axios from "axios";
import { assertExpressionStatement } from '@babel/types';

export default{
    name: 'Informacoes_Cliente', 
    data(){
        return{
            pessoa:"CNPJ",
            pessoas: null,
            nome_apelido: "",
            num: []
            //nome_data: null,
            //nome_keys: []
        };
    },
    mathods: {
        //gerador_nome_apelido(){
            //var self = this;

            //axios
            //.get('https://gist.githubusercontent.com/ryukebr/40df5b43f51a7daf5f0fd974cc15b0a5/raw/bc23d6e42c70ef6be2077de71735de61e03dbb1e/Tabelas%2520de%2520Nomes%2520para%2520Roll20'+this.nome+'/json/')
            //.then(function (response){

                //console.log(response);
                //self.nome_data = response.data;
                //self.nome_keys = Object.keys( self.nome_data );
            //})
            //.catch(function (error){
                //console.log(error);
            //})
            //.finally(function () {

            //});
       // }
    }
}

</script>
<style >
@import "@/assets/scss/index.scss"; 
</style>