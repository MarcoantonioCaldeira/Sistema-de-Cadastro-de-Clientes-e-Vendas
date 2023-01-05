<template>

    <h2 id="h2-informacoes">Informações do cliente</h2>

    <form method="POST" @submit="Cadastrar">
        <input type="text" naem="nome" placeholder="Seu Nome" v-model="nome" class="input" required>
        <div id="nome_apelido" data-text="Nome Apelido">
            <input type="text" placeholder="nome-apelido" v-model="nome_apelido">
        </div>
        <input type="text" placeholder="Seu email principal" class="input" v-model="e_mail">
        <input type="text" for="email_nfe" placeholder="Seu email nfe" class="input" v-model="email_nfe">

        <button type="button" @click="input++" class="btn_adicionar_email" id="send">
            Adicionar outro email
            <img src="src/assets/images/icon_add.png" />
        </button>

        <input type="text" v-mask="'(##) ####-####'" placeholder="Seu telefone" class="input" v-model="telefone" />
        <input type="text" v-mask="'(##) ####-####'" placeholder="Celular" class="input" v-model="celular" />
        <div>
            <input type="text" placeholder="Seu CPF" class="input" v-model="cpf" />
        </div>
        <br><label class="lb_rg">Seu RG:</label><input type="text" style="display: inline" class="input_separado_rg"
            v-model="rg"><br><br>
        <br><label class="lb_dt">Data de Nascimento:</label><input type="date" style="display: inline"
            class="input_secundario_data" v-model="data_nascimento">
    </form>
</template>

<script>
//import axios from 'axios';


export default {
    name: 'Informacoes_Cliente',
    data() {
        return {
            num: 1,
            input: 1
        }
    },

    methods: {
        //Cadastro_Informacoes(){
        //axios({
        //method: 'post',
        //url: 'localhost:9000/clientes',
        //data: {
        //nome: "",
        //nome_apelido: "",
        //e_mail: "",
        //e_mail_nfe: "",
        //celular:"",
        //telefone: "",
        //cpf: "",
        //inscricao_rg: ""
        //}
        //})

        async Cadastrar(e) {

            e.preventDefault();

            const data = {
                nome: this.nome,
                nome_apelido: this.nome_apelido,
                email: this.email,
                email_nfe: this.email_nfe,
                telefone: this.telefone,
                celular: this.celular,
                cpf: this.cpf,
                rg: this.rg,
                data_nascimento: this.data_nascimento
            }

            const dataJson = JSON.stringify(data);
            const req = await fetch('http://localhost:9000/clientes', {
                method: "POST",
                headers: {
                    'Authorization': "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJULkkuIEdlc3RvciIsInN1YiI6IjUwNWJhNDJlYTQ1NTUzNzYwNzkwMjk4NDc4ZDJmYmY0ZDA3OTFhMDIiLCJleHAiOjE2NzI5MzA3MjJ9.UlV_zi5p_nplZJLHHRAyCs1mTDs2FPMOJoX-RPOI-j4",
                    "Content-Type": "application/json"
                },
                body: dataJson
            });
            const res = await req.json()
            console.log(res)
            this.msg = "Cadastro realizado com sucesso!"
            // clear message
            setTimeout(() => this.msg = "", 9000)
            // limpar campos

        }
    }
}
</script>

<style>
    @import "@/assets/scss/index.scss";
</style>
