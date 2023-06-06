<template>
    <div id="Formulario">

        <h1 class="Titulo_Cadastro_Vendas">Cadastro de Vendas</h1>
    
        <div class="Formulario_1">

            <input type="text" class="InputForm_Vendas"   placeholder="Codigo da Empresa">

            <button class="btn_nome_cliente" v-on:click="openModal">
                <p class="p_nome_cliente">Selecione o nome do cliente</p><i  style="margin-left: 8px; margin-top: 2px;"  class="fa-solid fa-circle-plus"></i> 
            </button>

            <div  id="area_nome_cliente"  v-if="clienteSelecionado">

                <p class="p_nome_cliente_r">Nome: {{ clienteSelecionado.nome }}</p>

            </div>

            <div v-if="showModal" class="modal">

                <div class="modal-content animate">

                    <!--  X para cancelar -->
                    <i @click="closeModal"  
                        style="position: absolute; 
                               color:#9B9A9A; 
                               margin-left: 87%;
                               margin-top: 16px;"   
                                id="fa-solid-li"  class="fa-solid fa-circle-xmark"></i>

                    <input  class="input_pesquisa_nome_cliente"  type="text" v-model="filtro"  placeholder="Pesquise pelo nome do cliente" />

                    <!-- A API ja deixa todos os nomes pre-carregados -->
                    <div class="conteudo_registro">

                        <div  v-for="cliente in (Clientes_Filtrados)" :key="cliente.codigo" v-on:click="selecionarCliente(cliente)" @change="atualizarVendedores">
                            <table style="width: 100%;">
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
                            
                        </div>

                    </div>

                </div>

            </div>
            
            <!-- Nome do vendedor -->
            <br><p class="p_data_e">Selecione o nome do vendedor: </p>

            <select class="Select_Nome_Vendedor" v-model="vendedorSelecionado">
                <option  class="option_p" v-for="vendedor in vendedores" :key="vendedor.cod_vendedor" :value="vendedor.cod_vendedor"  :selected="vendedor === vendedorSelecionado">{{ vendedor.nome }}</option>
            </select>

            <p class="p_data_e">Tabela de preço: </p>
        
            <select class="Select_Descricao_Tab_Preco" v-on:click="Requisicao_Descricao_Tab_Preco">
                <option  class="option_p"  v-for=" preco in Tabela_de_preco_Vendedores" :key="preco.cod_tab_preco"  :value="preco.cod_tab_preco">{{ preco.descricao }}</option>
            </select>

            <p class="p_data_e">Selecione o tipo da Venda</p>

            <select  class="Select_Tipo_Venda" v-on:click="Requisicao_Tipo_Venda">
                <option v-for="venda in tipo_venda" :value="venda"> {{ venda.desc_tipo_venda }}</option>
            </select>

            <div>
                <p class="p_data_e">Data de Emissão: </p><input type="date" class="InputForm_Vendas" placeholder="Data da Emissão">
            </div>

            <div>
                <p class="p_data_p">Data de Previsão de Entrega da Empresa: </p><input type="date" class="InputForm_Vendas" placeholder="Data da Previsão de Entrega Solicitada">
            </div>
            
            <div>
                <p class="p_data_p">Data de Previsão de Entrega Solicitada: </p><input type="date" class="InputForm_Vendas" placeholder="Data da Previsão de Entrega Solicitada">
            </div>     
            
            <p>Transportadora</p>

            <select class="Select_Trasportadora">
                <option></option>
            </select>

            <br><br><br><p class="p_data_e">Tipo do Frete: </p>
           <select  v-model="tipo_frete"  class="Select_Tipo_Frete">
                <option value="Valor">Por valor</option>
                <option value="Percentual">Por percentual</option>
           </select>

           <input type="text" placeholder="Valor do Frete" />


           <p class="p_data_e">Situação do frete: </p>
            <select  v-model="situacao_frete"  class="Select_Forma_Pagamento">
                <option value="0">0 - Por conta remetente(CIF)</option>
                <option value="1">1 - Por conta do destinatario(FOB)</option>
                <option value="2">2 - Por conta de Terceiros</option>
                <option value="3">3 - Transporte próprio por conta de remetente</option>
                <option value="4">4 - Transporte próprio por conta de destinatario</option>
                <option value="9">5 - Sem Ocorrência de frete</option>
            </select>


            <p>Redespacho</p>
            <select class="Select_Resdespacho">
                <option>Em branco</option>
                <option>0 - Por Conta do Remetente(CIF)</option>
                <option>1 - Por Conta do Destinatário(FOB)</option>
                <option>2 - Por Conta de Terceiros</option>
                <option>3 - Transporte próprio por conta do Remetente</option>
                <option>4 - Transporte próprio por conta do Destinatário</option>
                <option>5 - Sem Ocorrência de Frete</option>
            </select>

        </div>
    
        <div class="Formulario_2">

            <input type="text" class="InputForm_Vendas" :disabled="desconto_pagto === '100'" :class="{ 'disabled-field': desconto_pagto === '100' }" placeholder="desconto_n1 (%)">
            <input type="text" class="InputForm_Vendas" :disabled="desconto_pagto === '100'" :class="{ 'disabled-field': desconto_pagto === '100' }" placeholder="desconto_n2 (%)">
            <input type="text" class="InputForm_Vendas" :disabled="desconto_pagto === '100'" :class="{ 'disabled-field': desconto_pagto === '100' }" placeholder="desconto_n3 (%)">
            <input type="text" class="InputForm_Vendas" :disabled="desconto_pagto === '100'" :class="{ 'disabled-field': desconto_pagto === '100' }" placeholder="desconto_n4 (R$)">

            <input type="text" class="InputForm_Vendas" :disabled="desconto_pagto === '0'" :class="{ 'disabled-field': desconto_pagto === '0' }" placeholder="desconto_s1 (%)">
            <input type="text" class="InputForm_Vendas" :disabled="desconto_pagto === '0'" :class="{ 'disabled-field': desconto_pagto === '0' }" placeholder="desconto_s2 (%)">
            <input type="text" class="InputForm_Vendas" :disabled="desconto_pagto === '0'" :class="{ 'disabled-field': desconto_pagto === '0' }" placeholder="desconto_s3 (%)">
            <input type="text" class="InputForm_Vendas" :disabled="desconto_pagto === '0'" :class="{ 'disabled-field': desconto_pagto === '0' }" placeholder="desconto_s4 (R$)">
    
            
           <p class="p_data_e">Forma de pagamento X: </p>
           <select  v-model="forma_pagto_x"  :disabled="desconto_pagto === '0'" :class="{ 'disabled-field': desconto_pagto === '0' }" class="Select_Forma_Pagamento">
                <option value="0">A vista</option>
                <option value="1">Contra Apresentação</option>
                <option value="3">A prazo</option>
           </select>

           <p class="p_data_e">Forma de pagamento: </p>
           <select  v-model="forma_pagto"  :disabled="desconto_pagto === '100'" :class="{ 'disabled-field': desconto_pagto === '100' }" class="Select_Forma_Pagamento">
                <option value="0">A vista</option>
                <option value="1">Contra Apresentação</option>
                <option value="3">A prazo</option>
           </select>

           <input type="text" class="InputForm_Vendas" :disabled="desconto_pagto === '100'" :class="{ 'disabled-field': desconto_pagto === '100' }" placeholder="Codigo do Prazo">

           <input type="text" class="InputForm_Vendas"  v-model="desconto_pagto"  placeholder="Desconto de Pagamento">

           <input type="text" v-model="displayItem"  class="InputForm_Vendas" placeholder="Valor do Frete">
          
            
            <p class="p_data_e">Forma de pagamento X: </p>
           <select  v-model="forma_pagto"  :disabled="desconto_pagto === '100'" :class="{ 'disabled-field': desconto_pagto === '100' }" class="Select_Forma_Pagamento">
                <option value="0">A vista</option>
                <option value="1">Contra Apresentação</option>
                <option value="3">A prazo</option>
           </select>

           <p class="p_data_e">Prazo de pagamento: </p>
           <select class="Select_Forma_Pagamento" v-on:click="Consultando_prazos">
                <option  v-for="prazos in prazo" :key="prazos.cod_prazo">{{ prazos.descricao }}</option>
           </select>         
            
           
        </div>
        
        <div class="Formulario_3">

            <p>Observação do Pedido</p>
            <textarea></textarea>

            <p>Observacao do Faturamento</p>
            <textarea></textarea>

            <p>Observação da Nota Fiscal</p>
            <textarea></textarea>

            <p>Observação da Produção</p>
            <textarea></textarea>

        </div>

    </div>

    <div>
        <router-link to="Itens_da_Venda"><button class="btn_concluir_cadastro_vendas" type="submit">Prosseguir</button></router-link>
    </div>

    <Footer />
</template>

<script>
//import axios from 'axios';
import '@fortawesome/fontawesome-free/css/all.css'
import api, { getToken } from '../../components/services/api';
import Footer from '@/components/Footer.vue'
//import { promises } from 'stream';
//mport { table } from 'console';

export default{
    name: 'Cadastro_De_Vendas',
    components: {
    Footer
  },

  data(){
    return{
        //selectedVendedor: null,
        //selectedDescricao: null,
        //selectedTipoVenda: null,
        showModal: false,
        vendedores: [],
        precos:[],
        tipo_venda:[],
        prazo:[],
        codigos_prazo:[
            1,2,3,4,5,6,7
        ],

        codigo_tab_preco:[
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
        searchQuery: '',
        searchResults: [],
        cpf_cnpj: "",
        filtro: '',
        clientes: [],
        clienteSelecionado: null,
        vendedorSelecionado: null,
        desconto_pagto: null,
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

            const promises = this.cod_tipo_venda.map( async codigo => {
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
            this.prazo = results.flat();
            

        }catch(error){
            console.error(error);
            alert("Erro ao buscar os Prazos de Entrega");
        }
    },

    selecionarCliente(cliente) {

      this.clienteSelecionado = cliente; 
      //console.log('Cliente selecionado:', cliente);
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