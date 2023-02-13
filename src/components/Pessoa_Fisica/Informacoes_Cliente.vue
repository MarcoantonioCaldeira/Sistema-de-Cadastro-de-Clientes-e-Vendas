<template>

    <!--Informacoes do cliente-->
<div id="Area_Formulario">

    <h2 id="h2-informacoes">Informações do cliente</h2>

    <form  method="POST" @submit.prevent="Cadastrar">

        <!--Area de Cadastro-->

        <input type="text" name="nome" placeholder="Seu Nome" v-model="nome" class="InputForm" required>

        <input type="text" placeholder="nome-apelido"  class="InputForm" v-model="nome_fantasia">

        <input type="text" placeholder="Seu email principal" class="InputForm" v-model="e_mail">

        <input type="text"  placeholder="Seu email nfe" class="InputForm" v-model="e_mail_nfe">

        <input type="text" placeholder="Codigo do cliente" class="InputForm" v-model="cod_cliente">

        <input type="text"  placeholder="Codigo do vendedor" class="InputForm" v-model="cod_vendedor">

        <input type="text" placeholder="Classificação de entrega"  class="InputForm" v-model="classificacao_entrega">
    
        <input type="text" placeholder="Data do cadastro" class="InputForm" v-model="data_cadastro">

        <input type="text" placeholder="Seu telefone" class="InputForm" v-model="telefone_2">

        <input type="text" placeholder="Celular" class="InputForm" v-model="celular">
         
        <input type="text" placeholder="Seu CPF" class="InputForm" v-model="cnpj_cpf">

        <input type="text" placeholder="CPF de Entrega" class="InputForm" v-model="cnpj_cpf_entrega">

        <input type="text" placeholder="Seu RG"  class="InputForm" v-model="inscricao_rg">

        <br><label class="lb_dt">Data de Nascimento:</label><input type="date" class="InputSecundario" v-model="nascimento">

        <!--Tipo Suframa-->

        <div id="AreaSuframa">
            <h2 class="h2_suframa">Tipo <strong>SUFRAMA</strong>(Superintendência da<br>Zona Franca de Manaus)</h2>
            <br>
            <select class="SelectSuframa" v-model="suframa_tipo">
                <option value="0">ZFM(Zona Franca de Manaus)</option>
                <option value="1">ALC(Área de Livre Comercio)</option>
                <option value="2">Am. Ocid(Amazonia Ocidental)</option>
            </select>

            <br><label class="label_codigo_suframa">Codigo SUFRAMA:</label><input type="text" class="CodigoSuframa" v-model="suframa">

            <input type="text"  placeholder="Numero de Inscrição Municipal" class="InputInscricao" v-model="inscricao_municipal">
        </div>

        <!--Observacoes do cliente-->

        <div id="AreaObservacoes">
            <p class="p_obs">Observações</p>
            <textarea class="TextArea" v-model="observacao">
    
            </textarea>
        </div>

        <div id="AreaEnderecoPrincipal">
            <h2 class="h2_endereco">Endereço Principal</h2>

            <input type="text" placeholder="Seu CEP"   class="input_cep" v-model="cep" v-on:blur="Consulta_CEP">
            <!-- onblur="Consulta_CEP(this.value);" -->
            <input type="text" placeholder="Endereço" class="input_endereco" v-if="cep_data != null" v-model="cep_data.logradouro">
            <input type="text" placeholder="Numero" class="input_endereco" v-model="end_numero">
            <input type="text" placeholder="Complemento(opcional)" class="input_endereco" v-model="complemento"> 
            <input type="text" placeholder="Bairro" class="input_endereco" v-if="cep_data != null " v-model="cep_data.bairro">
            <input type="text" placeholder="Cidade" class="input_endereco" v-if="cep_data != null " v-model="cep_data.localidade" >         
            <input type="text" placeholder="Codigo da Cidade" class="input_endereco" v-if="cep_data != null " v-model="cod_cidade">
            <input type="text" placeholder="Estado" class="input_endereco" v-if="cep_data != null " v-model="cep_data.uf">
            <input type="text" placeholder="Codigo do pais" class="input_endereco" v-if="cep_data != null " v-model="cod_pais">
            <input type="text" placeholder="Tipo de Endereço" class="input_endereco" v-if="cep_data != null " v-model="tipo_endereco">

        </div>

        <div id="AreaEnderecoSecundario">
            <h2 class="h2_endereco">Endereço Secundario(Opcional)</h2>

            <input type="text" placeholder="Seu CEP"   class="input_cep" v-model="cep_2" v-on:blur="Consulta_CEP_COB">
            <input type="text" placeholder="Endereço" class="input_endereco" v-if="cep_data_cob != null" v-model="cep_data_cob.logradouro">
            <input type="text" placeholder="Numero" class="input_endereco" v-model="end_numero">
            <input type="text" placeholder="Complemento(opcional)" class="input_endereco" v-model="complemento">
            <input type="text" placeholder="Bairro" class="input_endereco" v-if="cep_data_cob != null " v-model="cep_data_cob.bairro">
            <input type="text" placeholder="Cidade" class="input_endereco" v-if="cep_data_cob != null " v-model="cep_data_cob.localidade">
            <input type="text" placeholder="Codigo da Cidade" class="input_endereco" v-if="cep_data_cob != null" v-model="cod_cidade">
            <input type="text" placeholder="Estado" class="input_endereco" v-if="cep_data_cob != null " v-model="cep_data_cob.uf">
            <input type="text" placeholder="Codigo do pais" class="input_endereco" v-if="cep_data_cob != null " v-model="cod_pais">
            <input type="text" placeholder="Tipo de Endereço" class="input_endereco" v-if="cep_data_cob != null " v-model="tipo_endereco">
        </div>

        <div id="AreaEnderecoTerciario">
            <h2 class="h2_endereco">Endereço Terciario(Opcional)</h2>

            <input type="text" placeholder="Seu CEP"   class="input_cep" v-model="cep_3" v-on:blur="Consulta_CEP_TER">
            <input type="text" placeholder="Endereço" class="input_endereco" v-model="endereco_3">
            <input type="text" placeholder="Numero" class="input_endereco" v-model="end_numero_3">
            <input type="text" placeholder="Complemento(opcional)" v-if="cep_data_ter != null" class="input_endereco" v-model="complemento_3">
            <input type="text" placeholder="Bairro" class="input_endereco" v-if="cep_data_ter != null" v-model="cep_data_ter.bairro">
            <input type="text" placeholder="Cidade" class="input_endereco" v-if="cep_data_ter != null" v-model="cep_data_ter.cidade">
            <input type="text" placeholder="Codigo da Cidade" class="input_endereco" v-if="cep_data_ter != null" v-model="cod_cidade_3">
            <input type="text" placeholder="Estado" class="input_endereco" v-if="cep_data_ter != null" v-model="cep_data_ter.uf">
            <input type="text" placeholder="Codigo do pais" class="input_endereco" v-if="cep_data_ter != null" v-model="cod_pais_3">
            <input type="text" placeholder="Tipo de Endereço" class="input_endereco" v-if="cep_data_ter != null" v-model="tipo_endereco">
        </div>

       <input class="btn_proxima_etapa" type="submit" value="CADASTRAR">
    </form>
</div>

</template>

<script>
import axios from 'axios';
import { assertExpressionStatement } from '@babel/types';


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
            cep_2:"",
            cep_3: "",
            endereco: this.logradouro,
            end_numero: "",
            complemento: "",
            bairro: this.bairro,
            cidade: this.localidade,
            cod_cidade: "",
            cod_pais: "",
            estado: this.uf,
            tipo_endereco:"",
            cep_data: null,
            cep_data_cob: null,
            cep_data_ter: null,
            cep_keys : [],
            cep_keys_cob: [],
            cep_keys_ter: []
        }
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
                        tipo_endereco: this.tipo_endereco,

                        cep: this.cep_2,
                        endereco: this.endereco,
                        end_numero: this.end_numero,
                        complemento: this.complemento,
                        bairro: this.bairro,
                        cidade: this.cidade,
                        cod_cidade: this.cod_cidade,
                        cod_pais: this.cod_pais,
                        estado: this.estado,
                        tipo_endereco: this.tipo_endereco,

                         cep: this.cep_3,
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
            .then((response) => {
                if (response.data.accessToken) {
                    TokenService.setUser(response.data);
                }
            })
    },

    Consulta_CEP() {
        var self = this;

        axios
        .get('https://viacep.com.br/ws/'+this.cep+'/json/')
        .then(function (response) {

            console.log(response);
            self.cep_data = response.data;

            self.cep_keys = Object.keys( self.cep_data );
        })

        .catch(function (error){
            //console.log(error);
        })

        .finally(function () {

        });
    },


    Consulta_CEP_COB() {
        var self = this;

        axios
        .get('https://viacep.com.br/ws/'+this.cep_2+'/json/')
        .then(function (response) {

            console.log(response);
            self.cep_data_cob = response.data;

            self.cep_keys_cob = Object.keys( self.cep_data_cob );
        })

        .catch(function (error){
            //console.log(error);
        })

        .finally(function () {

        });
    },

    Consulta_CEP_TER() {
        var self = this;

        axios
        .get('https://viacep.com.br/ws/'+this.cep_3+'/json/')
        .then(function (response) {

            console.log(response);
            self.cep_data_ter = response.data;

            self.cep_keys_ter = Object.keys( self.cep_data_ter );
        })

        .catch(function (error){
            //console.log(error);
        })

        .finally(function () {

        });
    }

  }
}
</script>

<style>
</style>
