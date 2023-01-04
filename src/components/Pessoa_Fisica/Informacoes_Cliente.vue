<template>

    <h2 id="h2-informacoes">Informações do cliente</h2>

    <div @submit.prevent="submitForm">
        <input type="text" naem="nome"  placeholder="Seu Nome" class="input" v-model="nome">
        <div id="nome_apelido"  data-text="Nome Apelido">
            <input type="text" placeholder="nome-apelido" v-model="nome_apelido" >
        </div>
        <input type="text"  placeholder="Seu email principal" class="input" v-model="e_mail">
        <input type="text" for="email_nfe" placeholder="Seu email nfe" class="input" v-model="email_nfe">  

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

        <h2 class="h2_suframa">Tipo <strong>SUFRAMA</strong>(Superintendência da<br>Zona Franca de Manaus)</h2>    
        <br>
        <select class="select" v-model="tipo_suframa">
            <option>ZFM(Zona Franca de Manaus)</option>
            <option>ALC(Área de Livre Comercio)</option>
            <option>Am. Ocid(Amazonia Ocidental)</option>
        </select>
        
        <br><label class="label_codigo_suframa">Codigo SUFRAMA:</label><input type="text" style="display: inline" class="input_suframa" v-model="codigo_suframa">
        
        <br><label class="label_num_inscricao">Numero de inscrição municipal: </label><input type="text" style="display: inline" class="input_inscricao" v-model="numero_inscricao_municipal">

        <p class="p_obs">Observações</p>
        <textarea class="text_area" v-model="observacoes">

        </textarea>

        <router-link to="Cadastro_pt_2"><button type="submit" class="btn_proxima_etapa" v-on:submit.prevent="(Cadastro_Informacoes)"
        :disabled="submitStatus === 'PENDING'">Proxima etapa</button></router-link>
    </div>
</template>

<script>
import axios from 'axios';


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
