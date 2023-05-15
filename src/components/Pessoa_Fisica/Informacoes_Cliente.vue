<template>

        <h2 id="h2-informacoes">Informações do cliente</h2>

        <form method="POST" @submit.prevent="Cadastrar">

            <!--Area de Cadastro-->

            <input type="text" name="nome" placeholder="Seu Nome" v-model="nome" class="InputForm" required>

            <input type="text" placeholder="nome-apelido" class="InputForm" v-model="nome_fantasia">

            <input type="text" placeholder="Seu email principal" class="InputForm" v-model="e_mail">

            <div class="Form_Email" v-for="(input, index) in inputs">

                <button  class="btn_add_email" v-if="!Mostrar_Email" @click="Mostrar_Email = true">
                    Adicionar outro E-mail<i class="fa-solid fa-circle-plus"></i> 
                </button>

                <div v-if="Mostrar_Email">    
                <!-- <img v-img:src   class="icon_btn_add_email"  src="@/assets/images/icon_add_email.png"> -->
                    <input type="text" v-if="Mostrar_Email" placeholder="Seu E-mail secundario" class="InputForm_Email_Opcional" v-model="e_mail_adicional">
                    <i @click="clearInput"  id="fa-solid-li"  class="fa-solid fa-circle-xmark"></i>
                   
                </div>

            </div>

            <!-- class="btn btn-outline-secondary" -->

            <input type="text" placeholder="Seu email nfe" class="InputForm" v-model="e_mail_nfe">

            <input type="text" placeholder="Codigo do cliente" class="InputForm" v-model="cod_cliente">

            <!-- <input type="text" placeholder="Nome do vendedor" class="InputForm" v-model="cod_vendedor"> -->

            <select class="Select_Nome_Vendedor" v-model="vendedorSelecionado" @change="Requisicao_Vendedores">

                <option value="" disabled selected style="color:#9B9A9A;">Nome do Vendedor</option>
                <option v-for="nomeVendedor in nomesVendedores" :value="nomeVendedor">{{ nomeVendedor }}</option>

            </select>
        
            <input type="text" placeholder="Classificação de entrega" class="InputForm" v-model="classificacao_entrega">

            <label class="lb_dt">Data do Cadastro: </label><input type="date" class="Input_Data_Cadastro" v-model="data_cadastro">

            <input type=" celphone" placeholder="Seu telefone"  v-maskTelefone class="InputForm" v-model="telefone_2" maxlength="14">

            <input type="text" placeholder="Celular"   v-maskTelefone  class="InputForm" v-model="celular" maxlength="15">

            <input type="text" placeholder="Seu CPF"  v-maskCpf  class="InputForm" v-model="cnpj_cpf" maxlength="14">

            <input placeholder="CPF de Entrega"  v-maskCpf  class="InputForm" v-model="cnpj_cpf_entrega" maxlength="14">

            <input type="text" placeholder="Seu RG"  v-maskRG  class="InputForm" v-model="rg">

            <br><label class="lb_dt">Data de Nascimento:</label><input type="date" class="Input_Data_Nascimento" v-model="nascimento">


            <!-- Tipo Suframa-->

            <div id="AreaSuframa">
                <h2 class="h2_suframa">Tipo <strong>SUFRAMA</strong>(Superintendência <br>da Zona Franca de Manaus)</h2>
                <br>
                <select class="SelectSuframa" v-model="suframa_tipo">
                    <option value="0">ZFM(Zona Franca de Manaus)</option>
                    <option value="1">ALC(Área de Livre Comercio)</option>
                    <option value="2">Am. Ocid(Amazonia Ocidental)</option>
                </select>

                <br><label class="label_codigo_suframa">Codigo SUFRAMA:</label><input type="text" class="CodigoSuframa" v-model="suframa">

                <input type="text" placeholder="Numero de Inscrição Municipal" class="InputInscricao" v-model="inscricao_municipal">
            </div>

            <!--Observacoes do cliente -->

            <div id="AreaObservacoes">
                <p class="p_obs">Observações</p>

                <textarea class="TextArea" v-model="observacao">

                </textarea>
            </div>

            <div id="Area_Enderecos">
                <div id="AreaEnderecoPrincipal">
                    <h2 class="h2_endereco">Endereço Principal</h2>

                    <input type="text" placeholder="Seu CEP" class="input_cep" v-model="cep" v-on:blur="CONSULTA_CEP" maxlength="9">
                    <input type="text" placeholder="Endereço" class="input_endereco" v-model="endereco_end_1.logradouro">
                    <input type="text" placeholder="Numero" class="input_endereco" v-model="end_numero_1">
                    <input type="text" placeholder="Complemento(opcional)" class="input_endereco" v-model="complemento_1">
                    <input type="text" placeholder="Bairro" class="input_endereco" v-model="bairro_end_1.bairro">
                    <input type="text" placeholder="Cidade" class="input_endereco" v-model="cidade_end_1.localidade">
                    <input type="text" placeholder="Codigo da Cidade" class="input_endereco" v-model="cod_cidade_1">
                    <input type="text" placeholder="Estado" class="input_endereco" v-model="estado_end_1.uf">
                    <input type="text" placeholder="Codigo do pais" class="input_endereco" v-model="cod_pais_1">
                    <input type="text" placeholder="Tipo de Endereço" class="input_endereco" v-model="tipo_endereco_1">
                </div>
              
                <div id="AreaEnderecoSecundario">
                    <h2 class="h2_endereco">Endereço Secundario(Opcional)</h2>

                    <input type="text" placeholder="Seu CEP"  class="input_cep" v-model="cep_2" v-on:blur="CONSULTA_CEP_COB" maxlength="9">
                    <input type="text" placeholder="Endereço" class="input_endereco" v-model="endereco_end_2.logradouro">
                    <input type="text" placeholder="Numero" class="input_endereco" v-model="end_numero_2">
                    <input type="text" placeholder="Complemento(opcional)" class="input_endereco" v-model="complemento_2">
                    <input type="text" placeholder="Bairro" class="input_endereco" v-model="bairro_end_2.bairro">
                    <input type="text" placeholder="Cidade" class="input_endereco" v-model="cidade_end_2.localidade">
                    <input type="text" placeholder="Codigo da Cidade" class="input_endereco" v-model="cod_cidade_2">
                    <input type="text" placeholder="Estado" class="input_endereco" v-model="estado_end_2.uf">
                    <input type="text" placeholder="Codigo do pais" class="input_endereco" v-model="cod_pais_2">
                    <input type="text" placeholder="Tipo de Endereço" class="input_endereco" v-model="tipo_endereco_2">
                </div>
               
                    
                <div id="AreaEnderecoTerciario">
                    <h2 class="h2_endereco">Endereço Terciario(Opcional)</h2>

                    <input type="text" placeholder="Seu CEP" class="input_cep" v-model="cep_3" v-on:blur="CONSULTA_CEP_TER" maxlength="9">
                    <input type="text" placeholder="Endereço" class="input_endereco" v-model="bairro_end_3.logradouro">
                    <input type="text" placeholder="Numero" class="input_endereco" v-model="end_numero_3">
                    <input type="text" placeholder="Complemento(opcional)" class="input_endereco" v-model="complemento_3">
                    <input type="text" placeholder="Bairro" class="input_endereco" v-model="bairro_end_3.bairro">
                    <input type="text" placeholder="Cidade" class="input_endereco" v-model="cidade_end_3.localidade">
                    <input type="text" placeholder="Codigo da Cidade" class="input_endereco" v-model="cod_cidade_3">
                    <input type="text" placeholder="Estado" class="input_endereco" v-model="estado_end_3.uf">
                    <input type="text" placeholder="Codigo do pais" class="input_endereco" v-model="cod_pais_3">
                    <input type="text" placeholder="Tipo de Endereço" class="input_endereco" v-model="tipo_endereco_3">
                </div>

            </div>

            <input class="btn_proxima_etapa" type="submit" value="CADASTRAR">
        </form>

</template>

<script>
import '@fortawesome/fontawesome-free/css/all.css'
import axios from 'axios';
import api from '../services/api';
import api_2  from '../services/api_2';
import VueImg from 'v-img';
import { throwStatement } from '@babel/types';
import {maskCpf, maskRG, maskTelefone, maskCep} from '../services/funcoes';


export default{

    name: 'Informacoes_Cliente',

    directives: {
        maskCpf,
        maskRG,
        maskTelefone,
        // 'mask-cep': maskCep
    },

    created() {
        this.add_email();
    },

    data() {
        return {
            cod_vendedor: "",
            cod_vendedor_data: {},
            cod_vendedor_keys: [],
            nomesVendedores: [],
            vendedorSelecionado: '',

            response: {
                show: false,
                class: 'warning',
                msg : '',
            }, 

            Icone_Adicionar_Email: "./assets/images/icon_add_email.svg",
            Mostrar_Email: false,
            enviandoDados: false,
            token: '',
            nome: "",
            nome_fantasia: "",
            classificacao: "1",
            classificacao_entrega: "",
            cod_cliente: "",
            e_mail: "",
            e_mail_adicional: "",
            e_mail_2:"",
            observacao: "",
            e_mail_nfe: "",
            data_cadastro: "",
            telefone_2: "",
            celular: "",
            cnpj_cpf: "",
            cnpj_cpf_entrega: "",
            rg: "",
            nascimento: "",
            suframa_tipo: "",
            suframa: "",
            inscricao_municipal: "",
            cep: "",
            cep_2: "",
            cep_3: "",

            end_numero_1: "",
            end_numero_2: "",
            end_numero_3: "",

            complemento_1: "",
            complemento_2: "",
            complemento_3: "",

            endereco_end_1: "",
            bairro_end_1: "",
            cidade_end_1: "",
            estado_end_1: "",

            endereco_end_2: "",
            bairro_end_2: "",
            cidade_end_2: "",
            estado_end_2: "",

            endereco_end_3: "",
            bairro_end_3: "",
            cidade_end_3: "",
            estado_end_3: "",

            cod_cidade_1: "",
            cod_cidade_2: "",
            cod_cidade_3: "",

            cod_pais_1: "",
            cod_pais_2: "",
            cod_pais_3: "",

            tipo_endereco_1: "",
            tipo_endereco_2: "",
            tipo_endereco_3: "",

            cep_keys: [],
            inputs: []
        }
    },


    methods: {

     Cadastrar() {

            var self = this;

            api.post("/clientes",{
                    clientes: [{
                        nome: self.nome,
                        nome_fantasia: self.nome_fantasia,
                        classificacao: self.classificacao,
                        classificacao_entrega: self.classificacao_entrega,
                        cod_cliente: self.cod_cliente,
                        cod_vendedor: self.cod_vendedor,
                        e_mail: self.e_mail,
                        e_mail: self.e_mail_adicional,
                        observacao: self.observacao,
                        e_mail_nfe: self.e_mail_nfe,
                        data_cadastro: self.data_cadastro,
                        telefone_2: self.telefone_2,
                        celular: self.celular,
                        cnpj_cpf: self.cnpj_cpf,
                        cnpj_cpf_entrega: self.cnpj_cpf_entrega,
                        rg: self.inscricao_rg,
                        nascimento: self.nascimento,
                        suframa_tipo: self.suframa_tipo,
                        suframa: self.suframa,
                        inscricao_municipal: self.inscricao_municipal,
                        cliente_enderecos: [{

                            cep: self.cep,
                            endereco: self.endereco_end_1,
                            end_numero: self.end_numero_1,
                            complemento: self.complemento_1,
                            bairro: self.bairro_end_1,
                            cidade: self.cidade_end_1,
                            cod_cidade: self.cod_cidade_1,
                            cod_pais: self.cod_pais_1,
                            estado: self.estado_end_1,
                            tipo_endereco: self.tipo_endereco_1,

                            cep: self.cep_2,
                            endereco: self.endereco_end_2,
                            end_numero: self.end_numero_2,
                            complemento: self.complemento_2,
                            bairro: self.bairro_end_2,
                            cidade: self.cidade_end_2,
                            cod_cidade: self.cod_cidade_2,
                            cod_pais: self.cod_pais_2,
                            estado: self.estado_end_2,
                            tipo_endereco: self.tipo_endereco_2,

                            cep: self.cep_3,
                            endereco: self.endereco_end_3,
                            end_numero: self.end_numero_3,
                            complemento: self.complemento_3,
                            bairro: self.bairro_end_3,
                            cidade: self.cidade_end_3,
                            cod_cidade: self.cod_cidade_3,
                            cod_pais: self.cod_pais_3,
                            estado: self.estado_end_3,
                            tipo_endereco: self.tipo_endereco_3
                    }],
                }],
             }, 
            {
                headers: {

                    authorization: 'Bearer '+ self.$session.get('token')

                }}).then(function(resp){
                console.log("Inserio o Cliente", resp)
            })
        },

        add_email() {
            this.inputs.push({
                email: null
            })
        },

        clearInput(){
            this.Mostrar_Email = false;
        },


        CONSULTA_CEP() {
            var self = this;

            axios
                .get('https://viacep.com.br/ws/' + this.cep + '/json/')
                .then(function (response) {

                    console.log(response);
                    self.endereco_end_1 = response.data;
                    self.cidade_end_1 = response.data;
                    self.estado_end_1 = response.data;
                    self.bairro_end_1 = response.data;

                    self.cep_keys = Object.keys(self.endereco_end_2);
                    self.cep_keys = Object.keys(self.cidade_end_1);
                    self.cep_keys = Object.keys(self.estado_end_1);
                    self.cep_keys = Object.keys(self.bairro_end_1);
                })

                .catch(function (error) {
                    //console.log(error);
                })

                .finally(function () {

                });
        },


        CONSULTA_CEP_COB() {
            var self = this;

            axios
                .get('https://viacep.com.br/ws/' + this.cep_2 + '/json/')
                .then(function (response) {

                    console.log(response);
                    self.endereco_end_2 = response.data;
                    self.cidade_end_2 = response.data;
                    self.estado_end_2 = response.data;
                    self.bairro_end_2 = response.data;

                    self.cep_keys = Object.keys(self.endereco_end_2);
                    self.cep_keys = Object.keys(self.cidade_end_2);
                    self.cep_keys = Object.keys(self.estado_end_2);
                    self.cep_keys = Object.keys(self.bairro_end_2);
                })

                .catch(function (error) {
                    //console.log(error);
                })

                .finally(function () {

                });
        },

        CONSULTA_CEP_TER() {
            var self = this;
    
            axios
                .get('https://viacep.com.br/ws/' + this.cep_3 + '/json/')
                .then(function (response) {

                    console.log(response);
                    self.endereco_end_3 = response.data;
                    self.cidade_end_3 = response.data;
                    self.estado_end_3 = response.data;
                    self.bairro_end_3 = response.data;

                    self.cep_keys = Object.keys(self.endereco_end_3);
                    self.cep_keys = Object.keys(self.cidade_end_3);
                    self.cep_keys = Object.keys(self.estado_end_3);
                    self.cep_keys = Object.keys(self.bairro_end_3);
                })

                .catch(function (error) {
                    console.log(error);
                })

                .finally(function() {

                });
        },

        Requisicao_Vendedores(){                                                                                                                                                                                                                    
            var self = this;

            api_2.get(`/vendedores?cod_vendedor=${self.cod_vendedor}`)

            .then((response) => {
                console.log(response);
                self.cod_vendedor_data = response.data;
                self.cod_vendedor_keys = Object.keys(self.cod_vendedor_data);

                const nomesVendedores = Object.values(self.cod_vendedor_data).map(vendedor => vendedor.nome);

                self.nomesVendedores = nomesVendedores;
            })
            .catch((error) => {

                console.log(error);
                alert("Erro ao buscar dados do vendedor");
            });
        }

    }

    }
</script>

<style>

</style>
