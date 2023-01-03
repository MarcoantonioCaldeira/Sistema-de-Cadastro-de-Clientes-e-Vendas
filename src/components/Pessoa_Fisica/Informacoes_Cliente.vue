<template>

    <h2 id="h2-informacoes">Informações do cliente</h2>

    <div>
        <input type="text" for="nome"  placeholder="Seu Nome" class="input" v-model="clientes.nome"/>
        <div id="nome_apelido"  data-text="Nome apelido">

        </div>
        <input type="text"  placeholder="Seu email principal" class="input" v-model="clientes.e_mail"/>
        <input type="text" for="email_nfe" placeholder="Seu email nfe" class="input" v-model="clientes.email_nfe"/>  

        <button  type="button" @click="input++" class="btn_adicionar_email" id="send">
            Adicionar outro email
            <img src="src/assets/images/icon_add.png" />
        </button>
      
        <input  type="text" v-mask="'(##) ####-####'"  placeholder="Seu telefone" class="input" v-model="clientes.telefone"/>
        <input  type="text" v-mask="'(##) ####-####'" placeholder="Celular" class="input" v-model="clientes.celular"/>
        <div>
            <input type="text" placeholder="Seu CPF" class="input" v-model="clientes.cpf"/>
        </div>
        <br><label  class="lb_rg">Seu RG:</label><input type="text" style="display: inline" class="input_separado_rg" v-model="clientes.rg"><br><br>
        <br><label class="lb_dt">Data de Nascimento:</label><input type="date" style="display: inline" class="input_secundario_data" v-model="clientes.data_nascimento">
    </div>
</template>

<script>
import { makeBlock } from '@vue/compiler-core';
import axios from 'axios'

    export default {
        name: 'Informacoes_Cliente', 
        data(){
            return{
                num: 1,
                input: 1,
                nome: "",
                nome_fantasia: "",
                e_mail: "",
                e_mail_nfe: "",
                celular:"",
                telefone: "",
                cpf: "",
                inscricao_rg: ""
            }
        }
    }
</script>

<style>
    @import "@/assets/scss/index.scss"; 
</style>
