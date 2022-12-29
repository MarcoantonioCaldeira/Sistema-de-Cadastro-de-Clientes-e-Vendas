<template>

    <h2 id="h2-informacoes">Informações do cliente</h2>

    <div>
        <input type="text" for="nome"  placeholder="Seu Nome" class="input" v-model="nome_apelido"/>
        <div id="nome_apelido"  data-text="Nome apelido" >
            {{ pessoa_fisica.nome_apelido }} {{ num++ }}
        </div>
        <input type="text"  placeholder="Seu email principal" class="input" v-model="pessoa_fisica.e_mail"/>
        <input type="text" for="email_nfe" placeholder="Seu email nfe" class="input" v-model="pessoa_fisica.email_nfe"/>


        <div>
            <input   v-for="i in input"  :key="i"  type="text" :id='"item"+i' :placeholder="'Seu email' + i" style="display: block" class="input" />
            <button type="button">Deletar</button>
        </div>    

        <button  type="button" @click="input++" class="btn_adicionar_email" id="send">
            Adicionar outro email
            <img src="src/assets/images/icon_add.png" />
        </button>
      
        <input  type="text" v-mask="'(##) ####-####'"  placeholder="Seu telefone" class="input" v-model="pessoa_fisica.telefone"/>
        <input  type="text" v-mask="'(##) ####-####'" placeholder="Celular" class="input" v-model="pessoa_fisica.celular"/>
        <div>
            <input type="text" placeholder="Seu CPF" class="input" v-model="pessoa_fisica.cpf"/>
        </div>
        <br><label  class="lb_rg">Seu RG:</label><input type="text" style="display: inline" class="input_separado_rg" v-model="pessoa_fisica.rg"><br><br>
        <br><label class="lb_dt">Data de Nascimento:</label><input type="date" style="display: inline" class="input_secundario_data" v-model="pessoa_fisica.data_nascimento">
    </div>
</template>

<script>
import { makeBlock } from '@vue/compiler-core';


    export default {
        name: 'Informacoes_Cliente', 
        data(){
            return{
                num: 1,
                input: 1,
                pessoa_fisica:{
                    nome_apelido: "",
                    e_mail: "",
                    email_nfe: "",
                    telefone: "",
                    celular: "",
                    cpf:"",
                    rg: "",
                    data_nascimento: "" 
                }
            }
        } ,
        
        
        methods:{
            salvar(){
                pessoa_fisica.salvar(this.pessoa_fisica).then(resposta => {
                    alert("Salvo com sucesso!!!")
                })
            }
        }
    }
</script>

<style>
    @import "@/assets/scss/index.scss"; 
</style>
