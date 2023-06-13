<template>
    <form @submit.prevent="Enviar_Dados_do_Formulario">
        <div id="Formulario">

            <h1 class="Titulo_Cadastro_Vendas">Cadastro de Vendas</h1>
            <!-- Campos da esquerda do formulario -->
            <div class="Formulario_1">
                <!-- Esses campos de input são ligagos ao data() com a diretiva v-model -->
                <input type="text" class="InputForm_Vendas"   placeholder="Codigo da Empresa" v-model="cod_empresa">
                <!-- Botão para selecionar o nome do cliente -->
                <button class="btn_nome_cliente" v-on:click="openModal">
                    <p class="p_nome_cliente">Selecione o nome do cliente</p><i  style="margin-left: 8px; margin-top: 2px;"  class="fa-solid fa-circle-plus"></i> 
                </button>
                <!-- Area onde vai aparecer o nome do cliente selecionado -->
                <div  id="area_nome_cliente"  v-if="clienteSelecionado">
                    <p class="p_nome_cliente_r">Nome: {{ clienteSelecionado.nome }}</p>
                </div>

                <div v-if="showModal" class="modal">

                    <div class="modal-content animate">

                        <!--  X para cancelar -->
                        <i @click="closeModal" id="fa-solid-li"  class="fa-solid fa-circle-xmark"></i>

                        <!-- Campos de pesquisa para o nome do cliente -->
                        <input  class="input_pesquisa_nome_cliente"  type="text" v-model="filtro"  placeholder="Pesquise pelo nome do cliente" />

                        <!-- A API ja deixa todos os nomes pre-carregados -->
                        <div class="conteudo_registro">
                            <!-- Tabela com os nomes e outros dados dos clientes -->
                            <div v-for="(cliente, index) in Clientes_Filtrados" :key="cliente.codigo" v-on:click="selecionarCliente(cliente)" @change="atualizarVendedores">
                                <table v-if="index == 0"  style="width: 100%;">
                                    <tr>
                                        <th>Nome do Cliente</th>
                                        <th>Nome Fantasia</th>
                                        <th>Cidade</th>
                                        <th>UF</th>
                                        <th>CNPJ_CPF</th>
                                    </tr>
                                    <tr>
                                        <td>{{ cliente.nome }}</td>
                                        <td>{{ cliente.nome_fantasia }}</td>
                                        <td>{{ cliente.cidade }}</td>
                                        <td>{{ cliente.estado }}</td> 
                                        <td>{{ cliente.cnpj_cpf }}</td>
                                    </tr>
                                </table>
                                <table v-else style="width: 100%;">
                                    <tr>
                                        <td>{{ cliente.nome }}</td>
                                        <td>{{ cliente.nome_fantasia }}</td>
                                        <td>{{ cliente.cidade }}</td>
                                        <td>{{ cliente.estado }}</td> 
                                        <td>{{ cliente.cnpj_cpf }}</td>
                                    </tr>
                                </table>                          
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Nome do vendedor -->
                <br><p class="p_data_e">Selecione o nome do vendedor: </p>          
                <select class="Select_Nome_Vendedor" v-model="cod_vendedor">
                    <option  class="option_p" v-for="vendedor in vendedores" :key="vendedor.cod_vendedor" :value="vendedor.cod_vendedor"  :selected="vendedor === vendedorSelecionado">{{ vendedor.nome }}</option>
                </select>

                <!-- Seleção da tabela de preço -->
                <p class="p_data_e">Tabela de preço: </p>       
                <select class="Select_Descricao_Tab_Preco" v-on:click="Requisicao_Descricao_Tab_Preco" v-model="tabela_Preco">
                    <option  class="option_p"  v-for=" preco in precos" :key="preco.cod_tab_preco"  :value="preco.cod_tab_preco" >{{ preco.descricao }}</option>
                </select>

                <!-- Seleção do tipo da Venda -->
                <p class="p_data_e">Selecione o tipo da Venda</p>
                <select  class="Select_Tipo_Venda" v-on:click="Requisicao_Tipo_Venda" v-model="Tipo_Venda">
                    <option v-for="venda in tipo_venda" :value="venda"> {{ venda.desc_tipo_venda }}</option>
                </select>

                <div>
                    <p class="p_data_e">Data de Emissão: </p><input v-model="Data_emissao" type="date" class="InputForm_Vendas" placeholder="Data da Emissão">
                </div>

                <div>
                    <p class="p_data_p">Data de Previsão de Entrega da Empresa: </p><input  v-model="Data_Prev_Entrega"  type="date" class="InputForm_Vendas" placeholder="Data da Previsão de Entrega Solicitada">
                </div>
                
                <div>
                    <p class="p_data_p">Data de Previsão de Entrega Solicitada: </p><input v-model="Data_Entrega_Solicitada" type="date" class="InputForm_Vendas" placeholder="Data da Previsão de Entrega Solicitada">
                </div>     
                
                <p class="p_data_e">Transportadora:</p>
                <select class="Select_Trasportadora" v-on:click="Consulta_de_Transpotadoras" v-model="cod_transportadora">
                    <option v-for="transportadoras in transportadora"  :value="transportadoras.codigo_transportadoras">{{ transportadoras.nome }}</option>
                </select>

                <br><br><br><p class="p_data_e">Tipo do Frete: </p>
                <select  v-model="tipo_frete"  class="Select_Tipo_Frete">
                        <option value="Valor">Por valor</option>
                        <option value="Percentual">Por percentual</option>
                </select>

                <input type="text" v-model="displayItem"  class="InputForm_Vendas"  placeholder="Valor do Frete">


                <p class="p_data_e">Situação do frete: </p>
                <select  v-model="situacao_frete"  class="Select_Forma_Pagamento">
                    <option value="0">0 - Por conta remetente(CIF)</option>
                    <option value="1">1 - Por conta do destinatario(FOB)</option>
                    <option value="2">2 - Por conta de Terceiros</option>
                    <option value="3">3 - Transporte próprio por conta de remetente</option>
                    <option value="4">4 - Transporte próprio por conta de destinatario</option>
                    <option value="9">5 - Sem Ocorrência de frete</option>
                </select>


                <p class="p_data_e">Transportadora Redespacho</p>
                <select class="Select_Trasportadora" v-on:click="Consulta_de_Transpotadoras">
                    <option></option>
                    <option v-for="transportadoras in transportadora"  :value="transportadoras.codigo_transportadoras">{{ transportadoras.nome }}</option>
                </select>

                <p class="p_data_e">Situação do Redespacho: </p>
                <select  v-model="redespacho_situacao_frete"  class="Select_Forma_Pagamento">
                    <option value="0">0 - Por conta remetente(CIF)</option>
                    <option value="1">1 - Por conta do destinatario(FOB)</option>
                    <option value="2">2 - Por conta de Terceiros</option>
                    <option value="3">3 - Transporte próprio por conta de remetente</option>
                    <option value="4">4 - Transporte próprio por conta de destinatario</option>
                    <option value="9">5 - Sem Ocorrência de frete</option>
                </select>



            </div>
        
            <div class="Formulario_2">

                <input type="text" v-model="desconto_n1" class="InputForm_Vendas" :disabled="desconto_pagto === '100'" :class="{ 'disabled-field': desconto_pagto === '100' }" placeholder="desconto_n1 (%)">
                <input type="text" v-model="desconto_n2" class="InputForm_Vendas" :disabled="desconto_pagto === '100'" :class="{ 'disabled-field': desconto_pagto === '100' }" placeholder="desconto_n2 (%)">
                <input type="text" v-model="desconto_n3" class="InputForm_Vendas" :disabled="desconto_pagto === '100'" :class="{ 'disabled-field': desconto_pagto === '100' }" placeholder="desconto_n3 (%)">
                <input type="text" v-model="desconto_n4" class="InputForm_Vendas" :disabled="desconto_pagto === '100'" :class="{ 'disabled-field': desconto_pagto === '100' }" placeholder="desconto_n4 (R$)">

                <p class="p_data_e">Forma de pagamento: </p>
                <select  v-model="forma_pagto"  :disabled="desconto_pagto === '100'" :class="{ 'disabled-field': desconto_pagto === '100' }" class="Select_Forma_Pagamento">
                    <option value="0">A vista</option>
                    <option value="1">Contra Apresentação</option>
                    <option value="3">A prazo</option>
                </select>

                <p class="p_data_e">Prazo de pagamento: </p>
                <select  v-model="prazo_pagamento" class="Select_Forma_Pagamento" v-on:click="Consultando_prazos">
                    <option v-for="prazos in prazo" :key="prazos.cod_prazo" :value="prazos.cod_prazo">{{ prazos.descricao }}</option>
                </select>

                <input type="text" class="InputForm_Vendas"  v-model="desconto_pagto"  placeholder="Desconto de Pagamento">

                <input type="text"  v-model="desconto_s1" class="InputForm_Vendas" :disabled="desconto_pagto === '0'" :class="{ 'disabled-field': desconto_pagto === '0' }" placeholder="desconto_s1 (%)">
                <input type="text"  v-model="desconto_s2" class="InputForm_Vendas" :disabled="desconto_pagto === '0'" :class="{ 'disabled-field': desconto_pagto === '0' }" placeholder="desconto_s2 (%)">
                <input type="text"  v-model="desconto_s3" class="InputForm_Vendas" :disabled="desconto_pagto === '0'" :class="{ 'disabled-field': desconto_pagto === '0' }" placeholder="desconto_s3 (%)">
                <input type="text"  v-model="desconto_s4" class="InputForm_Vendas" :disabled="desconto_pagto === '0'" :class="{ 'disabled-field': desconto_pagto === '0' }" placeholder="desconto_s4 (R$)">
                
                <p class="p_data_e">Forma de pagamento X: </p>
                <select  v-model="forma_pagto_x"  :disabled="desconto_pagto === '100'" :class="{ 'disabled-field': desconto_pagto === '100' }" class="Select_Forma_Pagamento">
                    <option value="0">A vista</option>
                    <option value="1">Contra Apresentação</option>
                    <option value="3">A prazo</option>
                </select>

                <p class="p_data_e">Prazo de pagamento X: </p>
                <select v-model="prazo_pagamento_x"  class="Select_Forma_Pagamento" v-on:click="Consultando_prazos">
                    <option v-for="prazos in prazo" :key="prazos.cod_prazo">{{ prazos.descricao }}</option>
                </select>                        
            
            </div>
            
            <div class="Formulario_3">

                <p class="p_data_e">Observação do Pedido</p><br>
                <textarea  v-model="observacoes_pedido" class="area_obs_pedido"></textarea>

                <br><br><p class="p_data_e">Observacao do Faturamento</p><br>
                <textarea  v-model="observacoes_faturamento" class="area_obs_faturamento"></textarea>

                <br><br><p class="p_data_e">Observação da Nota Fiscal</p><br>
                <textarea  v-model="observacoes_nota" class="area_obs_nota"></textarea>

                <br><br><p class="p_data_e">Observação da Produção</p><br>
                <textarea  v-model="observacoes_producao" class="area_obs_producao"></textarea>

            </div>

        </div>
        <!-- <div>
            <router-link to="Itens_da_Venda"><button class="btn_concluir_cadastro_vendas"  v-on:click="Enviar_Dados_do_Formulario"  type="submit">Prosseguir</button></router-link>
        </div> -->
    </form>

    <!-- <Footer /> -->
</template>

<script>
//import axios from 'axios';
import '@fortawesome/fontawesome-free/css/all.css'
import api, { getToken } from '../../components/services/api';
import Footer from '@/components/Footer.vue'
//import { promises } from 'stream';
//mport { table } from 'console';

export default{
    name: 'Informacoes_Venda',
    components: {
    Footer
  },

  data(){
    return{ 
        cod_empresa: "",
        cod_vendedor:"",
        tabela_Preco:"",
        Tipo_Venda:"",
        cod_transportadora:"",
        clienteSelecionado: null,
        vendedorSelecionado: null,
        Data_emissao:"",
        Data_Prev_Entrega:"",
        Data_Entrega_Solicitada:null,
        desconto_n1:null,
        desconto_n2:null,
        desconto_n3:null,
        desconto_n4:null,
        forma_pagto:null,
        prazo_pagamento:null,
        desconto_pagto:null,
        desconto_s1:null,
        desconto_s2:null,
        desconto_s3:null,
        desconto_s4:null,
        forma_pagto_x:null,
        prazo_pagamento_x:null,
        observacoes_pedido:"",
        observacoes_faturamento:"",
        observacoes_nota: "",
        observacoes_producao:"",

        showModal: false,
        vendedores: [],
        precos:[],
        tipo_venda:[],
        prazo:[],
        transportadora:[],
        codigos_prazo:[
            1,2,3,4,5,6,7
        ],
        codigo_tab_preco:[
            1,2,3,4
        ],
        codigo_transportadoras:[
            1,2,3,4
        ],
        codigos:[
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
            15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
        ],
        cod_tipo_venda:[
            1,2,3
        ],
        token: '',
        tipo_frete: '',
        displayItem: '',
        situacao_frete: '',   
        redespacho_situacao_frete:null,
        searchQuery: '',
        searchResults: [],
        cpf_cnpj: "",
        filtro: '',
        clientes: []
    }
  },

  watch: {
    tipo_frete(newVal) {
      this.displayItem = newVal;
    }
  },

  mounted(){
        this.Requisicao_Vendedores();
        this.Requisicao_Descricao_Tab_Preco();
        this.Requisicao_Tipo_Venda();
        this.Consultando_prazos();
  },


  created(){
    this.Pesquisar_Cliente();
  },

  computed:{
    Clientes_Filtrados(){
        return this.clientes.filter(cliente =>
            cliente.nome.toLowerCase().includes(this.filtro.toLowerCase())).sort((a, b) => a.nome.localeCompare(b.nome));
    },

    Vendedores_do_Cliente_Selecionado(){
        if(this.clienteSelecionado){
            return this.vendedores.filter(vendedor => vendedor.cod_vendedor === this.clienteSelecionado.cod_vendedor)
        }
        return null;
    }

  },    

  methods:{

    Enviar_Dados_do_Formulario(){
        
        const VendaDados = {
                cod_empresa: this.cod_empresa,
                cod_vendedor: this.cod_vendedor,
                cod_tipo_venda: this.Tipo_Venda,
                cod_tab_preco: this.tabela_Preco,
                data_emissao: this.Data_emissao,
                data_prev_entrega: this.Data_Prev_Entrega,
                data_entrega_solicitada: this.Data_Entrega_Solicitada,
                codigo_transportadora: this.cod_transportadora,
                desconto_n1: this.desconto_n1,
                desconto_n2: this.desconto_n2,
                desconto_n3: this.desconto_n3,
                desconto_n4: this.desconto_n4,
                forma_pagto: this.forma_pagto,
                desconto_pagto: this.desconto_pagto,
                desconto_s1: this.desconto_s1,
                desconto_s2: this.desconto_s2,
                desconto_s3: this.desconto_s3,
                desconto_s4: this.desconto_s4,
                forma_pagto_x:this.forma_pagto_x,
                prazo_pagamento:this.prazo_pagamento,
                prazo_pagamento_x:this.prazo_pagamento_x,
                obs_pedido: this.observacoes_pedido,
                obs_faturamento:this.observacoes_faturamento,
                obs_nota:this.observacoes_nota,
                obs_producao:this.observacoes_pruducao,
                vr_frete: this.displayItem,
                situacao_frete: this.situacao_frete,
                redespacho_sit_frete: this.redespacho_situacao_frete,

                cliente:{
                    celular: clienteSelecionado.celular,
                    classificacao:clienteSelecionado.classificacao,
                    classificacao_entrega: clienteSelecionado.classificacao_entrega,
                    cnpj_cpf:clienteSelecionado.cnpj_cpf,
                    cnpj_cpf_entrega: clienteSelecionado.cnpj_cpf_entrega,
                    cod_vendedor:clienteSelecionado.cod_vendedor,
                    data_cadastro:clienteSelecionado.data_cadastro,
                    e_mail:clienteSelecionado.e_mail,
                    e_mail_nfe:clienteSelecionado.e_mail_nfe,
                    inscricao_municipal:clienteSelecionado.inscricao_municipal,
                    inscricao_rg:clienteSelecionado.inscricao_rg,
                    nascimento:clienteSelecionado.nascimento,
                    nome:clienteSelecionado.nome,
                    nome_fantasia:clienteSelecionado.nome_fantasia,
                    observacao:clienteSelecionado.observacao,
                    suframa:clienteSelecionado.suframa,
                    suframa_tipo:clienteSelecionado.suframa_tipo,
                    telefone_2:clienteSelecionado.telefone_2,
                    cliente_enderecos:[{
                        bairro: clienteSelecionado.bairro,
                        cep: clienteSelecionado.cep,
                        cidade: clienteSelecionado.cidade,
                        cod_cidade: clienteSelecionado.cod_cidade,
                        cod_pais: clienteSelecionado.cod_pais,
                        complemento: clienteSelecionado.complemento,
                        endereco: clienteSelecionado.endereco,
                        end_numero: clienteSelecionado.end_numero,
                        estado: clienteSelecionado.estado,
                        fax: clienteSelecionado.fax,
                        telefone: clienteSelecionado.telefone,
                        tipo_endereco: clienteSelecionado.tipo_endereco
                    }],
                    cliente_emails: [{
                        email: clienteSelecionado.email,
                        email_recebe:[
                            { recebe:0 },
                            { recebe:1 },
                            { recebe:2 }
                        ]

                    }]
                }
        }

        this.$emit("formularioVendasEnviado", VendaDados);
        
    },

    openModal(){
        this.showModal = true;
    },

    closeModal(){
        this.showModal = false;
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

            const vendedorCliente = this.clientes.find(cliente => cliente.nome === this.vendedorCliente );
            if(vendedorCliente){
                this.vendedorSelecionado = this.codigos.find(vendedor => vendedor.cod_vendedor === vendedorCliente.cod_vendedor);
            }   
        }catch(error){
            console.log(error);
            alert("Erro ao buscar dados do vendedor");
        };  
    },

    async Requisicao_Descricao_Tab_Preco(){
        try{

            const token = await getToken();
            const headers = { Authorization: `Bearer ${token}` };

            const promises = this.codigo_tab_preco.map( async codigo => {
                const response = await api.get(`/tabelas_precos?cod_tab_preco=${codigo}`, { headers });
                return response.data;
            });
            
            const results = await Promise.all(promises);
            this.precos  = results.flat();

        }catch(error){
            console.log(error);
            alert("Erro a descricao da tabela de preco");
        }
    },

    async Requisicao_Tipo_Venda(){
        try{

            const token = await getToken();
            const headers = { Authorization: `Bearer ${token}`};

            const promises = this.cod_tipo_venda.map( async codigo => {
                const response = await api.get(`/tipos_vendas?cod_tipo_venda=${codigo}`, { headers });
                return response.data;
            });
            
            const results = await Promise.all(promises);
            this.tipo_venda  = results.flat();


        }catch(error){
            console.log(error);
            alert("Erro ao buscar o tipo da Venda");
        }
    },

    async Pesquisar_Cliente(){
        try{
            const token = await getToken();
            const headers = {Authorization: `Bearer ${token}`};

            
            const responseClientes = await api.get(`/clientes`, { headers });
            this.clientes = responseClientes.data.map(cliente => {

                return{
                    ...cliente,
                    cidade: cliente.cliente_enderecos.length > 0 ? cliente.cliente_enderecos[0].cidade: '',
                    estado: cliente.cliente_enderecos.length > 0 ? cliente.cliente_enderecos[0].estado: ''
                    
                }
            });

        }catch(error){
           console.error(error);
            
        }
    },

    async Consultando_prazos(){
        try{
            const token = await getToken();
            const headers = {Authorization: `Bearer ${token}`};

            const promises = this.codigos_prazo.map( async codigo => {
                const response = await api.get(`/prazos?cod_prazo=${codigo}`, { headers });
                return response.data;
            });

            const results = await Promise.all(promises);

            // Para os valores não virem repetidos
            const uniqueResults = results.filter((value, index, self) => {
            return self.findIndex(obj => obj.id === value.id) === index;
            });


            this.prazo = uniqueResults.flat();
            

        }catch(error){
            console.error(error);
            alert("Erro ao buscar os Prazos de Entrega");
        }
    },


    async Consulta_de_Transpotadoras(){

        try{
            const token = await getToken();
            const headers = {Authorization: `Bearer ${token}`};

            const promises = this.codigo_transportadoras.map(async codigo => {
                const response = await api.get(`/transportadoras?cod_transportadora=${codigo}`, { headers });
                return response.data;
            });

            const results = await Promise.all(promises);
            this.transportadora = results.flat();

        }catch(error){
            
            console.log(error);
            alert("Erro ao buscar o codigo da transportadora");
        }
    },

    

    selecionarCliente(cliente) {

      this.clienteSelecionado = cliente; 
      //console.log('Cliente selecionado:', cliente);
      this.closeModal();
    },

    selecionarVendedor(vendedor){

        this.vendedorSelecionado = vendedor;
        //console.log('Vededor selecionado:', vendedor);
    }

  }
}
</script>


<style src="./estilo_cadastro_vendas.scss" lang="scss" scoped>

</style>