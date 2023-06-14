<template>
    <Message :msg="msg" v-show="msg" />
    <!-- Informacoes do cliente para a pessoa juridica -->
    <h2 id="h2-informacoes">Informações do cliente</h2>

    <form method="POST" @submit.prevent="Cadastrar">
        <input type="text" for="nome"  placeholder="Razão Social" class="Input_Forma_P_Juridica" v-model="nome" />

        <input type="text" placeholder="nome_fantasia" class="Input_Forma_P_Juridica" v-model="nome_fantasia"/>

        <input type="text"  placeholder="Seu email principal" class="Input_Forma_P_Juridica" v-model="e_mail"/>

        <input type="text" for="email_nfe" placeholder="Seu email nfe" class="Input_Forma_P_Juridica" v-model="e_mail_nfe"/>  

        <input type="text" placeholder="Seu telefone" class="Input_Forma_P_Juridica" v-model="telefone"/>

        <input type="text" placeholder="Celular" class="Input_Forma_P_Juridica" v-model="celular"/>
             
        <input type="text" placeholder="Seu CNPJ" class="Input_Forma_P_Juridica" v-model="cnpj_cpf"/>
            
        <br><label  class="lb_rg">Inscrição Estadual:</label><input type="text" class="Input_Inscricao_Estadual" v-model="inscricao_estadual"><br><br>
            
        <br><label class="lb_dt">Data da Fundação:</label><input type="date" class="Input_Data_Fundacao" v-model="data_cadastro">

        <div id="AreaSuframa">
            
            <h2 class="h2_suframa">Tipo <strong>SUFRAMA</strong>(Superintendência <br>da Zona Franca de Manaus)</h2>    
            <br>
            <select class="select" v-model="suframa_tipo">
                <option>ZFM(Zona Franca de Manaus)</option>
                <option>ALC(Área de Livre Comercio)</option>
                <option>Am. Ocid(Amazonia Ocidental)</option>
            </select>
            
            <br><label class="label_codigo_suframa">Codigo SUFRAMA:</label><input type="text"  class="input_suframa" v-model="suframa">
            
            <br><label class="label_num_inscricao">Numero de inscrição municipal: </label><input type="text"  class="Input_Inscricao_Municipal" v-model="inscricao_municipal">
                
        </div>

        <div id="AreaObservacoes">
            <p class="p_obs">Observações</p>
            <textarea class="text_area" v-model="observacao">
    
            </textarea>
        </div>

        <div id="Area_Enderecos">
            <div id="AreaEnderecoPrincipal">
                <h2 class="h2_endereco">Endereço Principal</h2>
    
                <input type="text" placeholder="Seu CEP"   class="input_cep"  v-model="Endereco_1.cep" @blur="CONSULTA_CEP">
                <input type="text" placeholder="Endereço" class="input_endereco" v-model=" Endereco_1.endereco">
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
    
                <input type="text" placeholder="Seu CEP"   class="input_cep" v-model="Endereco_2.cep" @blur="CONSULTA_CEP_COB">
                <input type="text" placeholder="Endereço" class="input_endereco" v-model=" Endereco_2.endereco">
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
    
                <input type="text" placeholder="Seu CEP"   class="input_cep" v-model="Endereco_3.cep" @blur="CONSULTA_CEP_TER">
                <input type="text" placeholder="Endereço" class="input_endereco" v-model=" Endereco_3.endereco">
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
import Message from '../Message/Message.vue'
import axios from 'axios';
import { getToken } from '../services/api';

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
                msg:''
            };
        },

        methods: {
            async Cadastrar() {

                try{
                    const token = await getToken();
                    const headers = { Authorization: `Bearer ${token}` };


                    const clientes = {
                 
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

                                cep: this.Endereco_1.cep,
                                endereco: this.Endereco_1.endereco,
                                end_numero: this.Endereco_1.end_numero,
                                complemento: this.Endereco_1.complemento,
                                bairro: this.Endereco_1.bairro,
                                cidade: this.Endereco_1.cidade,
                                cod_cidade: this.Endereco_1.cod_cidade,
                                cod_pais: this.Endereco_1.cod_pais,
                                estado: this.Endereco_1.estado_end,
                                tipo_endereco: this.Endereco_1.tipo_endereco,

                                cep: this.Endereco_2.cep,
                                endereco: this.Endereco_2.endereco,
                                end_numero: this.Endereco_2.end_numero,
                                complemento: this.Endereco_2.complemento,
                                bairro: this.Endereco_2.bairro,
                                cidade: this.Endereco_2.cidade,
                                cod_cidade: this.Endereco_2.cod_cidade,
                                cod_pais: this.Endereco_2.cod_pais,
                                estado: this.Endereco_2.estado_end,
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
                                tipo_endereco: this.Endereco_3.tipo_endereco

                            }]
                    }

                    var self = this;

                    await api.post("/clientes",{clientes: [clientes]},{headers})
                    .then(function(){
                        self.msg = "Cliente cadastrado com sucesso"
                        setTimeout(() => self.msg = "", 5000)
                    })
                }catch(error){
                    console.log(error)
                }
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
                    //console.log(error);
                })

                .finally(function () {

                });
            },


            CONSULTA_CEP_COB() {
                var self = this;

                axios
                    .get('https://viacep.com.br/ws/' + this.Endereco_2.cep_2 + '/json/')
                    .then(function (response) {

                        console.log(response);
                        self.Endereco_2.endereco = response.data;
                        self.Endereco_2.cidade = response.data;
                        self.Endereco_2.estado = response.data;
                        self.Endereco_2.bairro = response.data;

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
                    .get('https://viacep.com.br/ws/' + this.Endereco_3.cep_3 + '/json/')
                    .then(function (response) {

                        console.log(response);
                        self.Endereco_3.endereco = response.data;
                        self.Endereco_3.cidade = response.data;
                        self.Endereco_3.estado = response.data;
                        self.Endereco_3.bairro = response.data;

                        self.Endereco_3.cep_keys = Object.keys(self.Endereco_3.endereco);
                        self.Endereco_3.cep_keys = Object.keys(self.Endereco_3.cidade);
                        self.Endereco_3.cep_keys = Object.keys(self.Endereco_3.estado);
                        self.Endereco_3.cep_keys = Object.keys(self.Endereco_3.bairro);
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
<style scoped>

</style>
