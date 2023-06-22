<template>
    <Message :msg="msg" v-show="msg"></Message>

    <h2 id="h2-informacoes">Informações do cliente</h2>

    <form  method="POST" @submit.prevent="Cadastrar">
        
        <input type="text" for="nome"  placeholder="Razão Social" class="input" v-model="nome_apelido" required/>
        
        <input type="text" placeholder="nome-fantasia" class="input"  v-model="nome_fantasia"/>
        
        <input type="text" placeholder="Seu email Principal" style="display: block" class="input" v-model="e_mail">
        
        <input type="text" for="email_nfe" placeholder="Seu email nfe" class="input" v-model="e_mail_nfe">
    
        <input type="text" placeholder="Seu telefone" class="input" v-model="telefone">

        <input type="text" placeholder="Celular" class="input" v-model="celular">
        
        <input type="text"  v-model="cnpj_cpf" placeholder="CNPJ" class="input">
        
        <br><label class="lb_dt">Data da Fundação:</label><input type="date" style="display: inline" class="data_p_estrangeira" v-model="data_fundacao">
       

        <div id="AreaObservacoes">
            <p class="p_obs">Observações</p>
            <textarea class="text_area_p_estrangeira" v-model="observacoes">
                    
            </textarea>
        </div>

        <input class="btn_proxima_etapa" type="submit" value="CADASTRAR">
    </form>

</template>

<script>
import api from '../services/api';
import { getToken } from '../services/api';
import Message from '../Message/Message.vue';

export default{
    name: 'Informacoes_Cliente', 
    data(){
        return{
            num:1,
            input: 1,
            nome_apelido: "",
            nome_fantasia: "",
            e_mail: "",
            e_mail_nfe: "",
            telefone: "",
            celular: "",
            cnpj_cpf: "",
            data_fundacao: "",
            msg: ''
        };
    },
  
    methods: {

        async Cadastrar(){

            try{
                const token = await getToken()
                const headers = {Authorization: `Bearer ${token}`};

                const clientes = {
                    nome_apelido: this.nome_apelido,
                    nome_fantasia: this.nome_fantasia,
                    e_mail: this.e_mail,
                    e_mail_nfe: this.e_mail_nfe,
                    telefone: this.telefone,
                    celular: this.celular,
                    cnpj_cpf: this.cnpj_cpf,
                    data_fundacao: this.data_fundacao,
                }

                var self = this

                await api.post("/clientes", {clientes: [clientes]}, {headers})
                .then(function(){
                    self.msg = "Cliente cadastrado com sucesso"
                    setTimeout(() => self.msg = "", 2000)
                })          

            }catch(error){
                console.log(error);            
            }

        }

    }
}

</script>
<style >

</style>