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

            <input type="text" placeholder="Seu CEP"   class="input_cep" v-model="cep">
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

        <div id="AreaEnderecoSecundario">
            <h2 class="h2_endereco">Endereço Secundario(Opcional)</h2>

            <input type="text" placeholder="Seu CEP"   class="input_cep" v-model="cep">
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

        <div id="AreaEnderecoTerciario">
            <h2 class="h2_endereco">Endereço Terciario(Opcional)</h2>

            <input type="text" placeholder="Seu CEP"   class="input_cep" v-model="cep">
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
                cep: "",
                endereco:"",
                end_numero:"",
                complemento:"",
                bairro:"",
                cidade:"",
                cod_cidade:"",
                estado:"",
                cod_pais:"",
                tipo_endereco:""
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
            }
        }
    }
</script>
<style >
    @import "@/assets/scss/index.scss"; 
</style>