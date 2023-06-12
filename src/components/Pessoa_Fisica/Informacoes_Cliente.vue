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

            <p>Selecione o nome do vendedor: </p>
           
            <select class="Select_Nome_Vendedor" v-model="selectedVendedor" v-on:click="Requisicao_Vendedores">
                <option  class="option_p"  v-for="vendedor in vendedores" :value="vendedor">{{ vendedor.nome }}</option>
                <!-- <option v-for="vendedor in vendedores" :value="vendedor">{{ vendedor.nome }}</option> -->
            </select>
        
            <input type="text" placeholder="Classificação de entrega" class="InputForm" v-model="classificacao_entrega">

            <label class="lb_dt">Data do Cadastro: </label><input type="date" class="Input_Data_Cadastro" v-model="data_cadastro">

            <input type=" text" placeholder="Seu telefone"  v-maskTelefone class="InputForm" v-model="telefone_2" maxlength="14">

            <input type="text" placeholder="Celular"   v-maskCelular  class="InputForm" v-model="celular" maxlength="15">

            <input type="text" placeholder="Seu CPF"  v-maskCpf  class="InputForm" v-model="cnpj_cpf" maxlength="14">

            <input type="text" placeholder="CNPJ de Entrega"  v-maskCnpj  class="InputForm" v-model="cnpj_cpf_entrega" maxlength="15">

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

                    <input type="text" placeholder="Seu CEP" class="input_cep" v-model="Endereco_1.cep" @blur="CONSULTA_CEP">
                    <input type="text" placeholder="Endereço" class="input_endereco" v-model="Endereco_1.endereco">
                    <input type="text" placeholder="Numero" class="input_endereco" v-model="Endereco_1.end_numero">
                    <input type="text" placeholder="Complemento(opcional)" class="input_endereco" v-model="Endereco_1.complemento">
                    <input type="text" placeholder="Bairro" class="input_endereco" v-model="Endereco_1.bairro">
                    <input type="text" placeholder="Cidade" class="input_endereco" v-model="Endereco_1.cidade">
                    <input type="text" placeholder="Codigo da Cidade" class="input_endereco" v-model="Endereco_1.cod_cidade">
                    <input type="text" placeholder="Estado" class="input_endereco" v-model="Endereco_1.estado">
                    <input type="text" placeholder="Tipo de Endereço" class="input_endereco" v-model="Endereco_1.tipo_endereco">
                    
                </div>                                                                        
              
                <div id="AreaEnderecoSecundario">
                    <h2 class="h2_endereco">Endereço Secundario(Opcional)</h2>

                    <input type="text" placeholder="Seu CEP"  class="input_cep" v-model="Endereco_2.cep" @blur="CONSULTA_CEP_COB">
                    <input type="text" placeholder="Endereço" class="input_endereco" v-model="Endereco_2.endereco">
                    <input type="text" placeholder="Numero" class="input_endereco" v-model="Endereco_2.end_numero">
                    <input type="text" placeholder="Complemento(opcional)" class="input_endereco" v-model="Endereco_2.complemento">
                    <input type="text" placeholder="Bairro" class="input_endereco" v-model="Endereco_2.bairro">
                    <input type="text" placeholder="Cidade" class="input_endereco" v-model="Endereco_2.cidade">
                    <input type="text" placeholder="Codigo da Cidade" class="input_endereco" v-model="Endereco_2.cod_cidade">
                    <input type="text" placeholder="Estado" class="input_endereco" v-model="Endereco_2.estado">
                    <input type="text" placeholder="Tipo de Endereço" class="input_endereco" v-model="Endereco_2.tipo_endereco">
                </div>
                                   
                <div id="AreaEnderecoTerciario">
                    <h2 class="h2_endereco">Endereço Terciario(Opcional)</h2>

                    <input type="text" placeholder="Seu CEP" class="input_cep" v-model="Endereco_3.cep" @blur="CONSULTA_CEP_TER">
                    <input type="text" placeholder="Endereço" class="input_endereco" v-model="Endereco_3.endereco">
                    <input type="text" placeholder="Numero" class="input_endereco" v-model="Endereco_3.end_numero">
                    <input type="text" placeholder="Complemento(opcional)" class="input_endereco" v-model="Endereco_3.complemento">
                    <input type="text" placeholder="Bairro" class="input_endereco" v-model="Endereco_3.bairro">
                    <input type="text" placeholder="Cidade" class="input_endereco" v-model="Endereco_3.cidade">
                    <input type="text" placeholder="Codigo da Cidade" class="input_endereco" v-model="Endereco_3.cod_cidade">
                    <input type="text" placeholder="Estado" class="input_endereco" v-model="Endereco_3.estado">
                    <input type="text" placeholder="Tipo de Endereço" class="input_endereco" v-model="Endereco_3.tipo_endereco">
                </div>

            </div>

            <input class="btn_proxima_etapa" type="submit" value="CADASTRAR">
        </form>

</template>

<script>
import '@fortawesome/fontawesome-free/css/all.css'
import axios from 'axios';
import api, { getToken } from '../services/api';
import VueImg from 'v-img';
import { throwStatement } from '@babel/types';
import {maskCpf, maskCnpj ,maskRG, maskTelefone, maskCelular} from '../services/funcoes';


export default{

    name: 'Informacoes_Cliente',

    directives: {
        maskCpf,
        maskRG,
        maskTelefone,
        maskCelular,
        maskCnpj
    },

    created() {
        this.add_email();
    },

    data() {
        return {
            //vendedores: [],
            selectedVendedor: null,
            vendedores: [],
            codigos:[
                1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
                15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
            ],
            

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

            // Informações do Primeiro Endereço
            Endereco_1:{
                cep: "",
                cep_keys: [],
                endereco: "",
                end_numero: "",
                complemento: "",
                bairro: "",
                cidade: "",
                cod_cidade: null,
                cod_pais:"1058",
                estado: "",
                tipo_endereco: "", 
            },
            //Informações do Segundo Endereço
            Endereco_2:{
                cep: "",
                cep_keys: [],
                endereco: "",
                end_numero: "",
                complemento: "",
                bairro: "",
                cidade: "",
                cod_cidade: null,
                cod_pais:"1058",
                estado: "",
                tipo_endereco: "", 
            },
            //Informações do Terceiro Endereço
            Endereco_3:{
                cep: "",
                cep_keys: [],
                endereco: "",
                end_numero: "",
                complemento: "",
                bairro: "",
                cidade: "",
                cod_cidade: null,
                cod_pais:"1058",
                estado: "",
                tipo_endereco: "", 
            },
            inputs: []
        }
    },

    mounted(){
        this.Requisicao_Vendedores();
    },
    methods: {

    add_email() {
        this.inputs.push({
            email: null
        })
    },

    clearInput(){
        this.Mostrar_Email = false;
    },

    async Cadastrar() {

        try {
     
            const token = await getToken();
            const headers = { Authorization: `Bearer ${token}` };

            const clientes = {
                nome: this.nome,
                nome_fantasia: this.nome_fantasia,
                classificacao: this.classificacao,
                classificacao_entrega: this.classificacao_entrega,
                cod_cliente: this.cod_cliente,
                cod_vendedor: this.cod_vendedor,
                e_mail: this.e_mail,
                e_mail: this.e_mail_adicional,
                observacao: this.observacao,
                e_mail_nfe: this.e_mail_nfe,
                data_cadastro: this.data_cadastro,
                telefone_2: this.telefone_2,
                celular: this.celular,
                cnpj_cpf: this.cnpj_cpf,
                cnpj_cpf_entrega: this.cnpj_cpf_entrega,
                rg: this.inscricao_rg,
                nascimento: this.nascimento,
                suframa_tipo: this.suframa_tipo,
                suframa: this.suframa,
                inscricao_municipal: this.inscricao_municipal,
                cliente_enderecos: [{
                    cep: this.Endereco_1.cep,
                    endereco: this.Endereco_1.endereco,
                    end_numero: this.Endereco_1.end_numero,
                    complemento: this.Endereco_1.complemento,
                    bairro: this.Endereco_1.bairro,
                    cidade: this.Endereco_1.cidade,
                    cod_cidade: this.Endereco_1.cod_cidade,
                    cod_pais: this.Endereco_1.cod_pais,
                    estado: this.Endereco_1.estado,
                    tipo_endereco: this.Endereco_1.tipo_endereco,

                    cep: this.Endereco_2.cep,
                    endereco: this.Endereco_2.endereco,
                    end_numero: this.Endereco_2.end_numero,
                    complemento: this.Endereco_2.complemento,
                    bairro: this.Endereco_2.bairro,
                    cidade: this.Endereco_2.cidade,
                    cod_cidade: this.Endereco_2.cod_cidade,
                    cod_pais: this.Endereco_2.cod_pais,
                    estado: this.Endereco_2.estado,
                    tipo_endereco: this.Endereco_2.tipo_endereco,

                    cep: this.Endereco_3.cep,
                    endereco: this.Endereco_3.endereco,
                    end_numero: this.Endereco_3.end_numero,
                    complemento: this.Endereco_3.complemento,
                    bairro: this.Endereco_3.bairro,
                    cidade: this.Endereco_3.cidade,
                    cod_cidade: this.Endereco_3.cod_cidade,
                    cod_pais: this.Endereco_3.cod_pais,
                    estado: this.Endereco_3.estado,
                    tipo_endereco: this.Endereco_3.tipo_endereco,

                }],
            }

        await api.post("/clientes",{ clientes: [clientes]},{ headers })
            .then(function(resp){
                console.log("Cliente inserido com sucesso", resp)
            })
        }catch(error){
            console.log(error);
            alert("Erro ao buscar dados do vendedor");
        };
    },

        CONSULTA_CEP() {
            var self = this;

            axios
                .get('https://viacep.com.br/ws/' + this.Endereco_1.cep + '/json/')
                .then(function (response) {
                    const data = response.data;
                    console.log(response);
                    self.Endereco_1.endereco = data.logradouro;
                    self.Endereco_1.cidade = data.localidade;
                    self.Endereco_1.estado = data.uf;
                    self.Endereco_1.bairro = data.bairro;

                    self.Endereco_1.cep_keys = Object.keys(self.Endereco_1.endereco);
                    self.Endereco_1.cep_keys = Object.keys(self.Endereco_1.cidade);
                    self.Endereco_1.cep_keys = Object.keys(self.Endereco_1.estado);
                    self.Endereco_1.cep_keys = Object.keys(self.Endereco_1.bairro);
                })
                .catch(function (error) {
                    console.log(error);
                })
                .finally(function () {

                });
        },


        CONSULTA_CEP_COB() {
            var self = this;

            axios
                .get('https://viacep.com.br/ws/' + this.Endereco_2.cep + '/json/')
                .then(function (response) {

                    const data = response.data;
                    console.log(response);
                    self.Endereco_2.endereco = data.logradouro;
                    self.Endereco_2.cidade = data.localidade;
                    self.Endereco_2.estado = data.uf;
                    self.Endereco_2.bairro = data.bairro;

                    self.Endereco_2.cep_keys = Object.keys(self.Endereco_2.endereco);
                    self.Endereco_2.cep_keys = Object.keys(self.Endereco_2.cidade);
                    self.Endereco_2.cep_keys = Object.keys(self.Endereco_2.estado);
                    self.Endereco_2.cep_keys = Object.keys(self.Endereco_2.bairro);
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
                .get('https://viacep.com.br/ws/' + this.Endereco_3.cep + '/json/')
                .then(function (response) {

                    const data = response.data;
                    console.log(response);
                    self.Endereco_3.endereco = data.logradouro;
                    self.Endereco_3.cidade = data.localidade;
                    self.Endereco_3.estado = data.uf;
                    self.Endereco_3.bairro = data.bairro;

                    self.Endereco_3.cep_keys = Object.keys(self.Endereco_3.endereco);
                    self.Endereco_3.cep_keys = Object.keys(self.Endereco_3.cidade);
                    self.Endereco_3.cep_keys = Object.keys(self.Endereco_3.estado);
                    self.Endereco_3.cep_keys = Object.keys(self.Endereco_3.bairro);
                })

                .catch(function (error) {
                    console.log(error);
                })

                .finally(function() {

                });
        },
 
        async Requisicao_Vendedores(){                                                     

            try {
                const token = await getToken();
                const headers = { Authorization: `Bearer ${token}` };


                const promises = this.codigos.map( async codigo => {
                    const response = await api.get(`/vendedores?cod_vendedor=${codigo}`, { headers });
                    return response.data;
                });
            
                               
                const results = await Promise.all(promises);
                this.vendedores  = results.flat();
                           
            }catch(error){
                console.log(error);
                alert("Erro ao buscar dados do vendedor");
            };  
        }
    }

    }
</script>

<style>

</style>
