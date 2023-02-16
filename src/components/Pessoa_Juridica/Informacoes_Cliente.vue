<template>
    <h2 id="h2-informacoes">Informações do cliente</h2>

    <form method="POST" @submit.prevent="Cadastrar">
        <input type="text" for="nome"  placeholder="Razão Social" class="Input_Forma_P_Juridica" v-model="nome" />

        <input type="text" placeholder="nome_fantasia" class="Input_Forma_P_Juridica" v-model="nome_fantasia"/>

        <input type="text"  placeholder="Seu email principal" class="Input_Forma_P_Juridica" v-model="e_mail"/>

        <input type="text" for="email_nfe" placeholder="Seu email nfe" class="Input_Forma_P_Juridica" v-model="e_mail_nfe"/>  

        <input type="text" placeholder="Seu telefone" class="Input_Forma_P_Juridica" v-model="telefone"/>

        <input type="text" placeholder="Celular" class="Input_Forma_P_Juridica" v-model="celular"/>
             
        <input type="text" placeholder="Seu CNPJ" class="Input_Forma_P_Juridica" v-model="cnpj_cpf"/>
            
        <br><label  class="lb_rg">Inscrição Estadual:</label><input type="text" style="display: inline" class="Input_Inscricao" v-model="inscricao_estadual"><br><br>
            
        <br><label class="lb_dt">Data da Fundação:</label><input type="date" style="display: inline" class="Input_Data_Fundacao" v-model="data_cadastro">

        <div id="AreaSuframa">
            
            <h2 class="h2_suframa">Tipo <strong>SUFRAMA</strong>(Superintendência da<br>Zona Franca de Manaus)</h2>    
            <br>
            <select class="select" v-model="suframa_tipo">
                <option>ZFM(Zona Franca de Manaus)</option>
                <option>ALC(Área de Livre Comercio)</option>
                <option>Am. Ocid(Amazonia Ocidental)</option>
            </select>
            
            <br><label class="label_codigo_suframa">Codigo SUFRAMA:</label><input type="text" style="display: inline" class="input_suframa" v-model="suframa">
            
            <br><label class="label_num_inscricao">Numero de inscrição municipal: </label><input type="text" style="display: inline" class="input_inscricao" v-model="inscricao_municipal">
                
        </div>

        <div id="AreaObservacoes">
            <p class="p_obs">Observações</p>
            <textarea class="TextArea" v-model="observacao">
    
            </textarea>
        </div>

        <div id="AreaEnderecoPrincipal">
            <h2 class="h2_endereco">Endereço Principal</h2>

            <input type="text" placeholder="Seu CEP"   class="input_cep"  v-model="cep" v-on:blur="CONSULTA_CEP">
            <input type="text" placeholder="Endereço" class="input_endereco" v-model=" endereco_end_1.logradouro">
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

            <input type="text" placeholder="Seu CEP"   class="input_cep" v-model="cep_2" v-on:blur="CONSULTA_CEP_COB">
            <input type="text" placeholder="Endereço" class="input_endereco" v-model=" endereco_end_2.logradouro">
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

            <input type="text" placeholder="Seu CEP"   class="input_cep" v-model="cep_3" v-on:blur="CONSULTA_CEP_TER">
            <input type="text" placeholder="Endereço" class="input_endereco" v-model=" endereco_end_3.logradouro">
            <input type="text" placeholder="Numero" class="input_endereco" v-model="end_numero_3">
            <input type="text" placeholder="Complemento(opcional)" class="input_endereco" v-model="complemento_3">
            <input type="text" placeholder="Bairro" class="input_endereco" v-model="bairro_end_3.bairro">
            <input type="text" placeholder="Cidade" class="input_endereco" v-model="cidade_end_3.localidade">
            <input type="text" placeholder="Codigo da Cidade" class="input_endereco" v-model="cod_cidade_3">
            <input type="text" placeholder="Estado" class="input_endereco" v-model="estado_end_3.uf">
            <input type="text" placeholder="Codigo do pais" class="input_endereco" v-model="cod_pais_3">
            <input type="text" placeholder="Tipo de Endereço" class="input_endereco" v-model="tipo_endereco_3">
        </div>

        <input class="btn_proxima_etapa" type="submit" value="CADASTRAR">
    </form>
</template>
<script>
import axios from 'axios';

    export default{
        name: 'Informacoes_Cliente', 
        data(){
            return{
                nome: "",
                nome_fantasia: "",
                e_mail: "",
                e_mail_nfe: "",
                telefone:"",
                celular:"",
                cnpj_cpf:"",
                inscricao_estadual:"",
                data_cadastro:"",
                suframa_tipo:"",
                suframa:"",
                inscricao_municipal:"",
                observacao:"",
                complemento:"",

                cep: "",
                cep_2: "",
                cep_3: "",
                
                end_numero_1: "",
                end_numero_2: "",
                end_numero_3: "",

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

                complemento_1: "",
                complemento_2: "",
                complemento_3: "",

                cod_cidade_1: "",
                cod_cidade_2: "",
                cod_cidade_3: "",

                cod_pais_1:"",
                cod_pais_2:"",
                cod_pais_3:"",

                tipo_endereco_1:"",
                tipo_endereco_2:"",
                tipo_endereco_3:"",

            };
        },

        methods: {
            Cadastrar() {
                api
                .post("clientes",{
                    clientes:[{
                        nome: this.nome,
                        nome_fantasia: this.nome_fantasia,
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
                            endereco: this.endereco_end_1,
                            end_numero: this.end_numero_1,
                            complemento: this.complemento_1,
                            bairro: this.bairro_end_1,
                            cidade: this.cidade_end_1,
                            cod_cidade: this.cod_cidade_1,
                            cod_pais: this.cod_pais_1,
                            estado: this.estado_end_1,
                            tipo_endereco: this.tipo_endereco_1,

                            cep: this.cep_2,
                            endereco: this.endereco_end_2,
                            end_numero: this.end_numero_2,
                            complemento: this.complemento_2,
                            bairro: this.bairro_end_2,
                            cidade: this.cidade_end_2,
                            cod_cidade: this.cod_cidade_2,
                            cod_pais: this.cod_pais_2,
                            estado: this.estado_end_2,
                            tipo_endereco: this.tipo_endereco_2,

                            cep: this.cep_3,
                            endereco: this.endereco_end_3,
                            end_numero: this.end_numero_3,
                            complemento: this.complemento_3,
                            bairro: this.bairro_end_3,
                            cidade: this.cidade_end_3,
                            cod_cidade: this.cod_cidade_3,
                            cod_pais: this.cod_pais_3,
                            estado: this.estado_end_3,
                            tipo_endereco: this.tipo_endereco_3

                        }]
                    }]
                })
                .then((response) => {
                    if (response.data.accessToken) {
                        TokenService.setUser(response.data);
                    }
                })
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

                    .finally(function () {

                    });
            }

        }
    }
</script>
<style >
    
</style>