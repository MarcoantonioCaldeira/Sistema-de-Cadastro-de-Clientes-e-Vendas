<template>
    <h2 id="h2-informacoes">Informações do cliente</h2>

    <div>
        <input type="text" for="nome"  placeholder="Razão Social" class="input" v-model="nome_apelido"/>
        <div id="nome_apelido"  data-text="Nome fatasia">
            <input type="text" placeholder="nome-fantasia" v-model="nome_fantasia"/>
        </div>
        <input   v-for="i in input"  :key="i"  type="text" :id='"item"+i' :placeholder="'Seu email Principal' + i" style="display: block" class="input" v-model="e_mail">
        <input type="text" for="email_nfe" placeholder="Seu email nfe" class="input" v-model="e_mail_nfe">


        <div>
            <button type="button" @click="deleteRow(index)">Deletar</button>
        </div>    

        <button  type="button" @click="input++" class="btn_adicionar_email" id="send">
            Adicionar outro email
            <img src="src/assets/images/icon_add.png" />
        </button>
      
        <input type="number" placeholder="Seu telefone" class="input" v-model="telefone">
        <input type="number" placeholder="Celular" class="input" v-model="celular">
        <div> 
            <input type="text"  v-model="CMPJ" :placeholder="[[ pessoa ]]" class="input"/>
        </div>
        <br><label class="lb_dt">Data da Fundação:</label><input type="date" style="display: inline" class="input_secundario_data" v-model="data_fundacao">
    </div>
</template>
<script>
import axios from 'axios';
import { required, minLength, between } from 'vuelidate/lib/validators';


export default{
    name: 'Informacoes_Cliente', 
    data(){
        return{
            pessoa:"CNPJ",
            num:1,
            input: 1
        };
    },
  
        methods: {
            Cadastro_Informacoes(){
                    axios({
                    method: 'post',
                    url: 'localhost:9000/clientes',
                        data: {
                            nome_apelido: "",
                            nome_fantasia: "",
                            e_mail: "",
                            e_mail_nfe: "",
                            celular:"", 
                            telefone: "",
                            CNPJ: "",
                            data_fundacao: ""
                        }
                    })
            }
        }
    }

</script>
<style >
@import "@/assets/scss/index.scss"; 
</style>