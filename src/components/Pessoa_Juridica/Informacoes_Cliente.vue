<template>
    <h2 id="h2-informacoes">Informações do cliente</h2>

    <div>
        <input type="text" for="nome"  placeholder="Razão Social" class="input" v-model="razao_social" />
        <div id="nome_apelido"  data-text="Nome apelido">
            <input type="text" placeholder="nome-apelido" v-model="nome_apelido"/>
        </div>
        <input type="text"  placeholder="Seu email principal" class="input" v-model="e_mail">
        <input type="text" for="email_nfe" placeholder="Seu email nfe" class="input" v-model="e_mail_nfe">


        <div>
            <input   v-for="i in input"  :key="i"  type="text" :id='"item"+i' :placeholder="'Seu email' + i" style="display: block" class="input">
            <button type="button">Deletar</button>
        </div>    

        <button  type="button" @click="input++" class="btn_adicionar_email" id="send">
            Adicionar outro email
            <img src="src/assets/images/icon_add.png" />
        </button>
      
        <input type="text" placeholder="Seu telefone" class="input" v-model="telefone">
        <input type="text" placeholder="Celular" class="input" v-model="celular">
        <div> 
            <input type="text" placeholder="Seu CNPJ" class="input" v-model="CNPJ"/>
        </div>
        <br><label  class="lb_rg">Inscrição Estadual:</label><input type="text" style="display: inline" class="input_secundario_inscricao" v-model="inscricao_estadual"><br><br>
        <br><label class="lb_dt">Data da Fundação:</label><input type="date" style="display: inline" class="input_secundario_data" v-model="data_fundacao">
    </div>
</template>
<script>


    export default{
        name: 'Informacoes_Cliente', 
        data(){
            return{
                num:1,
                input: 1
            };
        },

        methods: {
        }
    }
</script>
<style >
    @import "@/assets/scss/index.scss"; 
</style>