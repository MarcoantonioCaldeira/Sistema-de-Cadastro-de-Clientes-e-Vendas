<template>

    <!--Informacoes do cliente-->
    <Message :msg="msg" v-show="msg" />

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
            <!--<img src="src/assets/images/icon_add.png" />-->
        </button>

        <input type="text" placeholder="Seu telefone" class="input" v-model="telefone" />
        <input type="text" placeholder="Celular" class="input" v-model="celular" />
        <div>
            <input type="text" placeholder="Seu CPF" class="input" v-model="cpf" />
        </div>
        <br><label class="lb_rg">Seu RG:</label><input type="text" style="display: inline" class="input_separado_rg" v-model="rg"><br><br>

        <br><label class="lb_dt">Data de Nascimento:</label><input type="date" style="display: inline" class="input_secundario_data" v-model="data_nascimento">  
        
        <!--Tipo Suframa-->


        <h2 class="h2_suframa">Tipo <strong>SUFRAMA</strong>(Superintendência da<br>Zona Franca de Manaus)</h2>    
        <br>
        <select class="select" v-model="tipo_suframa">
            <option>ZFM(Zona Franca de Manaus)</option>
            <option>ALC(Área de Livre Comercio)</option>
            <option>Am. Ocid(Amazonia Ocidental)</option>
        </select>
        
        <br><label class="label_codigo_suframa">Codigo SUFRAMA:</label><input type="text" style="display: inline" class="input_suframa" v-model="codigo_suframa">
        
        <br><label class="label_num_inscricao">Numero de inscrição municipal: </label><input type="text" style="display: inline" class="input_inscricao" v-model="numero_inscricao_municipal">


        <!--Observacoes-->

        <p class="p_obs">Observações</p>
        <textarea class="text_area" v-model="observacoes">

        </textarea>

        <input class="btn_proxima_etapa" type="submit" value="CADASTRAR">
    </form>

</template>

<script>
import Message from './Message.vue'

export default {
    
    name: 'Informacoes_Cliente',
    components:{
        Message
    },

    data(){
        return {
            nome: "",
            nome_apelido: "",
            email: "",
            email_nfe: "",
            telefone: "",
            celular: "",
            cpf: "",
            rg: "",
            data_nascimento: "",
            tipo_suframa: [],
            observacoes: "",
            msg: null
        }
    },

    methods: {
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
                data_nascimento: this.data_nascimento,
                tipo_suframa: Array.from(this.tipo_suframa),
                observacoes: this.observacoes
            }

            const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJULkkuIEdlc3RvciIsInN1YiI6IjUwNWJhNDJlYTQ1NTUzNzYwNzkwMjk4NDc4ZDJmYmY0ZDA3OTFhMDIiLCJleHAiOjE2NzM0Mzc5Mzl9.5sj6ZQnhz77VTmB4Y7wgk2PDrRAt7elOTs90BTEtE78'
            const dataJson = JSON.stringify(data);
            const req = await fetch('http://localhost:9000/clientes', {
                method: "POST",
                mode: 'cors', // no-cors, *cors, same-origin
                cache: 'no-cache',
                credentials: 'include',
                headers: {
                    'Authorization': `Bearer  + ${token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            const res = await req.json()
            console.log(res)
            this.msg = "Cadastro realizado com sucesso!"
            // clear message
            setTimeout(() => this.msg = "", 9000)

            // limpar campos
            this.nome = "",
            this.nome_apelido = "",
            this.email = "",
            this.email_nfe = "",
            this.telefone = "",
            this.celular = "",
            this.cpf = "",
            this.rg = "",
            this.data_nascimento = "",
            this.tipo_suframa = []
            this.observacoes = "",

            alert(this.nome)

        }
    }
}
</script>

<style>
    @import "@/assets/scss/index.scss";
</style>
