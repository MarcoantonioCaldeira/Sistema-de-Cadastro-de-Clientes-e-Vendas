<template>

    <h2 id="h2-informacoes">Informações do cliente</h2>

    <div>
        <input type="text" for="nome"  placeholder="Seu Nome" class="input" v-model="nome"/>
        <div id="nome_apelido"  data-text="Nome Apelido">
            <input type="text" placeholder="nome-apelido" v-model="nome_apelido"/>
        </div>
        <input type="text"  placeholder="Seu email principal" class="input" v-model="e_mail"/>
        <input type="text" for="email_nfe" placeholder="Seu email nfe" class="input" v-model="email_nfe"/>  

        <button  type="button" @click="input++" class="btn_adicionar_email" id="send">
            Adicionar outro email
            <img src="src/assets/images/icon_add.png" />
        </button>
      
        <input  type="text" v-mask="'(##) ####-####'"  placeholder="Seu telefone" class="input" v-model="telefone"/>
        <input  type="text" v-mask="'(##) ####-####'" placeholder="Celular" class="input" v-model="celular"/>
        <div>
            <input type="text" placeholder="Seu CPF" class="input" v-model="cpf"/>
        </div>
        <br><label  class="lb_rg">Seu RG:</label><input type="text" style="display: inline" class="input_separado_rg" v-model="rg"><br><br>
        <br><label class="lb_dt">Data de Nascimento:</label><input type="date" style="display: inline" class="input_secundario_data" v-model="data_nascimento">
    </div>
</template>

<script>
import axios from 'axios'

    export default {
        name: 'Informacoes_Cliente', 
        data(){
            return{
                num: 1,
                input: 1
            }
        },

        methods: {
            Cadastro_Informacoes(){
                    axios({
                    method: 'post',
                    url: 'localhost:9000/clientes',
                        data: {
                            nome: "",
                            nome_apelido: "",
                            e_mail: "",
                            e_mail_nfe: "",
                            celular:"",
                            telefone: "",
                            cpf: "",
                            inscricao_rg: ""
                        }
                    })
            }
        }
    }
</script>

<style>
    @import "@/assets/scss/index.scss"; 
</style>
