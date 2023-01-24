<template>

    <!--Informacoes do cliente-->

    <h2 id="h2-informacoes">Informações do cliente</h2>

    <form method="POST" @submit.prevent="Cadastrar">

        <input type="text" name="nome" placeholder="Seu Nome" v-model="nome" class="input" required>
        <div id="nome_apelido" data-text="Nome Apelido">
            <input type="text" placeholder="nome-apelido" v-model="nome_fantasia">
        </div>
        <input type="text" placeholder="Seu email principal" class="input" v-model="e_mail">

        <input type="text"  placeholder="Seu email nfe" class="input" v-model="e_mail_nfe">

        <input type="text" placeholder="Codigo do cliente" class="input" v-model="cod_cliente">

        <input type="text"  placeholder="Codigo do vendedor" class="input" v-model="cod_vendedor">

        <input type="text" placeholder="Classificação de entrega" v-model="classificacao_entrega">
    
        <input type="text" placeholder="Data do cadastro" class="input" v-model="data_cadastro">

        <input type="text" placeholder="Seu telefone" class="input" v-model="telefone_2" />
        <input type="text" placeholder="Celular" class="input" v-model="celular" />
        <div>
            <input type="text" placeholder="Seu CPF" class="input" v-model="cnpj_cpf" />
        </div>

        <br><input type="text" placeholder="CPF de entrega" style="display: inline" class="input_separado_rg" v-model="cnpj_cpf_entrega"><br><br>

        <br><label class="lb_rg">Seu RG:</label><input type="text" style="display: inline" class="input_separado_rg" v-model="inscricao_rg"><br><br>

        <br><label class="lb_dt">Data de Nascimento:</label><input type="date" style="display: inline" class="input_secundario_data" v-model="nascimento">

        <!--Tipo Suframa-->

        <h2 class="h2_suframa">Tipo <strong>SUFRAMA</strong>(Superintendência da<br>Zona Franca de Manaus)</h2>
        <br>
        <select class="select" v-model="suframa_tipo">
            <option value="0">ZFM(Zona Franca de Manaus)</option>
            <option value="1">ALC(Área de Livre Comercio)</option>
            <option value="2">Am. Ocid(Amazonia Ocidental)</option>
        </select>

        <br><label class="label_codigo_suframa">Codigo SUFRAMA:</label><input type="text" style="display: inline">

        <br><label class="label_num_inscricao">Numero de inscrição municipal: </label><input type="text" style="display: inline" class="input_inscricao" v-model="inscricao_municipal">


        <!--Observacoes-->

        <p class="p_obs">Observações</p>
        <textarea class="text_area" v-model="observacao">

        </textarea>

        <div id="endereco_principal">

            <h2 class="h2_endereco">Endereço principal</h2>

            <label class="lb_cep">Seu CEP:</label> <input type="text" class="input_cep" v-model="cep">
            <input type="text" placeholder="Endereço" class="input_endereco" v-model="endereco">
            <input type="text" placeholder="Numero" class="input_endereco" v-model="end_numero">
            <input type="text" placeholder="Complemento(opcional)" class="input_endereco" v-model="complemento">
            <input type="text" placeholder="Bairro" class="input_endereco" v-model="bairro">
            <input type="text" placeholder="Cidade" class="input_endereco" v-model="cidade">
            <input type="text" placeholder="Codigo da Cidade" class="input_endereco" v-model="cod_cidade">
            <input type="text" placeholder="Estado" class="input_endereco" v-model="estado">
            <input type="text" placeholder="Codigo do pais" class="input_endereco" v-model="cod_pais">
            <input type="text" placeholder="Tipo de Endereço" class="input_endereco" v-model="tipo_endereco">
        </div>

       <input class="btn_proxima_etapa" type="submit" value="CADASTRAR">
    </form>

</template>

<script>
import api from '../api'

export default {

    name: 'Informacoes_Cliente',

    data() {
        return {
            nome: "",
            nome_fantasia: "",
            classificacao: "1",
            classificacao_entrega: "",
            cod_cliente: "", 
            cod_vendedor: "",
            e_mail: "",
            observacao: "",
            e_mail_nfe: "",
            data_cadastro: "",
            telefone_2:"",
            celular:"",
            cnpj_cpf:"",
            cnpj_cpf_entrega:"",
            inscricao_rg:"",
            nascimento:"",
            suframa_tipo:"",
            suframa:"",
            inscricao_municipal:"",
            cep: "",
            endereco: "",
            end_numero: "",
            complemento: "",
            bairro: "",
            cidade: "",
            cod_cidade: "",
            cod_pais: "",
            estado: "",
            tipo_endereco:""
        }
    },

    created() {
        this.Cadastrar()
    },

    methods: {
        Cadastrar() {
            api
            .post("clientes",{
                clientes:[{
                    nome: this.nome,
                    nome_fantasia: this.nome_fantasia,
                    classificacao: this.classificacao,
                    classificacao_entrega: this.classificacao_entrega,
                    cod_cliente: this.cod_cliente, 
                    cod_vendedor: this.cod_vendedor,
                    e_mail: this.e_mail,
                    observacao: this.observacao,
                    e_mail_nfe: this.e_mail_nfe,
                    data_cadastro: this.data_cadastro,
                    telefone_2: this.telefone_2,
                    celular: this.celular,
                    cnpj_cpf: this.cnpj_cpf,
                    cnpj_cpf_entrega: this.cnpj_cpf_entrega,
                    inscricao_rg: this.inscricao_rg,
                    nascimento: this.nascimento,
                    suframa_tipo: this.suframa_tipo,
                    suframa: this.suframa,
                    inscricao_municipal: this.inscricao_municipal,
                    cliente_enderecos:[{
                        cep: this.cep,
                        endereco: this.endereco,
                        end_numero: this.end_numero,
                        complemento: this.complemento,
                        bairro: this.bairro,
                        cidade: this.cidade,
                        cod_cidade: this.cod_cidade,
                        cod_pais: this.cod_pais,
                        estado: this.estado,
                        tipo_endereco: this.tipo_endereco
                    }]
                }]
            })
                .then(() => {
                    console.log('Usuário cadastrado com sucesso')
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }
}
</script>

<style>
@import "@/assets/scss/index.scss";
</style>
