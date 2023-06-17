<template>
    <!-- <h2>Aqui vou fazer um Cadastro de Vendas Teste</h2> -->
    <form  method="POST" @submit.prevent="Cadastrar_Venda"   style="min-height: 2700px;">
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
                        <input  class="input_pesquisa_nome_cliente"  type="text" v-model="filtro_cliente"  placeholder="Pesquise pelo nome do cliente" />

                        <!-- A API ja deixa todos os nomes pre-carregados -->
                        <div class="conteudo_registro">
                            <!-- Tabela com os nomes e outros dados dos clientes -->
                            <div v-for="(cliente, index) in Clientes_Filtrados" :key="cliente.codigo" v-on:click="selecionarCliente(cliente)">
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
                    <option value="5">5 - Sem Ocorrência de frete</option>
                </select>


                <p class="p_data_e">Transportadora Redespacho</p>
                <select class="Select_Trasportadora" v-on:click="Consulta_de_Transpotadoras" v-model="cod_transportadora_redespacho">
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
                    <option value="5">5 - Sem Ocorrência de frete</option>
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
                    <option value="2">A prazo</option>
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
                    <option value="2">A prazo</option>
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

        <!-- Itens da Venda -->
        <div id="Formulario_Itens_Venda"> 

            <h1 class="Titulo_Itens_Venda">Itens da Venda</h1>

            <div id="conteudo_formulario">

                <button class="btn_nome_Item" v-on:click="openModal_S_Item">
                    <p class="p_nome_item">Adicione o Item</p><i  style="margin-left: 18px; margin-top: 2px;"  class="fa-solid fa-circle-plus"></i>
                </button>
                
                <div v-if="showModal_S_Item" class="modal">

                    <div class="modal-content animate">

                        <i v-on:click="closeModal_S_Item" id="fa-solid-li"  class="fa-solid fa-circle-xmark"></i>

                        <div v-if="!showOtherDiv">
                            <!-- Campo para pesquisar os itens -->
                            <input type="text" class="input_pesquisa_nome_item" :disabled=Item_selecionado :class="{ 'disabled-field': Item_selecionado }" v-model="filtro_item" placeholder="Pesquisar produto" />
                        
                            <!-- Botão de prosseguir -->
                            <button class="btn_proximo"  v-if="Item_selecionado"  @click="showOtherFields">Prosseguir</button>

                            <!-- Div para desabilitar a selecao de itens na hora que aparecer a opção de presseguir -->
                            <div :class="{ 'disabled-field': Item_selecionado }" style="margin-top: 100px;">

                                <div v-for="(Item, index) in Itens_Filtrados" :key="Item.referencia" class="conteudo_registro" v-on:click="selecionarItem(Item)">

                                    <!-- Tabela onde aparecem os  Itens -->
                                    <table v-if="index == 0"  style="width: 100%;">
                                        <tr>
                                            <th>Codigo da grade</th>
                                            <th>Referencia Alternativa</th>
                                            <th>Descrição</th>
                                            <th>Unidade</th>
                                        </tr>
                                        <tr v-for="(Item, index) in Itens_selecionados" :key="index">
                                            <td>{{ Item.cod_grade }}</td>
                                            <td>{{ Item.ref_alternativa_cor }}</td>
                                            <td>{{ Item.descricao }}</td>
                                            <td>{{ Item.unidade }}</td>
                                        </tr>
                                    </table>   
                                    <table v-else style="width: 100%;">
                                        <tr>
                                            <td>{{ Item.cod_grade }}</td>
                                            <td>{{ Item.ref_alternativa_cor }}</td>
                                            <td>{{ Item.descricao }}</td>
                                            <td>{{ Item.unidade }}</td>
                                        </tr>
                                    </table>                                 
                                </div>
                            </div>                     
                        </div>
                        
                        <!-- Segunda Parte do Cadastro de Itens -->
                        <div v-if="Item_selecionado" class="info_item_parte_2">
                            
                            <h2 class="Titulo_Itens_Venda">Preencha os Campos abaixo</h2>
                            
                            <!-- Div onde aparece o Item Selecionado -->
                            <div class="Area_Selecionada">
                                <h3>Item escolhido</h3><br>

                                <p>Descrição: {{ Item_selecionado.descricao }}</p><br>

                                <p>Referencia Alternativa: {{ Item_selecionado.ref_alternativa_cor }}</p>
                            </div>

                            <!-- Se o For Item de Tamanho unico mostramos quantidade de caixa -->
                            <br><input v-if="mostrarCamposAdicionais" type="text" v-model="quantidade_caixa"  class="Input_Form_Itens_Venda" placeholder="Quantidade de Caixa" >                                 
                            
                            <br><input v-if="!mostrarCamposAdicionais" type="text" v-model="quantidade_itens"  class="Input_Form_Itens_Venda" placeholder="Quantidade de Itens" >
                            
                            <input type="text" v-model="valor_unitario"  class="Input_Form_Itens_Venda" placeholder="Valor Unitario">

                            <p class="p_tipo_produto">Tipo do Item: </p>

                            <select v-model="tipo_produto" class="select_tipo_produto">
                                <option value="1">Pronta Entrega</option>
                                <option value="2">Encomenda</option>
                            </select>

                            <p class="p_tipo_produto">Observações: </p><br>
                            <textarea  v-model="observacoes" class="area-observacao">

                            </textarea>

                            <!-- Campo de grade de corrida se o produto for de varios tamanhos -->
                            <div v-if="mostrarCamposAdicionais">

                                <p class="p_tipo_produto">Grade Corrida: </p>
                                <br>
                                <table class="table">
                                    <tbody>
                                        <tr>
                                            <th v-for="(tamanho, index) in tamanhosGrade" :key="index">{{ tamanho.desc_tamanho }}</th>
                                        </tr>
                                        <tr>                                    
                                            <td v-for="(tamanho, index) in tamanhosGrade" :key="index">
                                                <input class="input_valores"  type="text" v-model="quantidades[index]" min="0">
                                            </td>
                                        </tr>
                                    </tbody>        
                                </table>
                            </div>
                        
                            <button class="btn_finalizar" v-on:click="Mostrar_resumo();  closeModal_S_Item()">Finalizar</button>
                        
                        </div>
                    </div>
                </div>
            </div>

            <!-- Area onde aparecem os itens que foram selecionados -->
            <div id="conteudos-selecionados">

                <div style="height: 130px; width: 100%;">
                    <h2 class="Titulo_Itens_Selecionados">Itens Selecionados</h2>
                </div>

                <div  id="conteudo-selecionado"  v-for="(Item, index) in Itens_selecionados" :key="index"> 
                    <i v-on:click="Fechar_Resumo(index)" id="fa-solid-li-2"  class="fa-solid fa-circle-xmark"></i>
                    <hr>
                    <table>
                        <tr>
                            <th>Referencia alternativa de Cor</th>              
                            <th v-if="Item.tamanhoUnico">Quantidade de Itens</th>
                            <th v-if="!Item.tamanhoUnico">Quantidade de Caixa</th>
                            <th>Valor Unitario</th>
                            <th>Tipo do Produto</th>
                            <th>Observações</th>
                            <th v-for="(tamanho, index) in Item.tamanhosGrade" :key="index">{{ tamanho }}</th>
                            <th>Valor total dos Itens</th>
                        </tr>
                        <tr>
                            <td>{{ Item.ref_alternativa_cor }}</td>  
                            <td v-if="Item.tamanhoUnico">{{ Item.quantidade }}</td>
                            <td v-if="!Item.tamanhoUnico">{{ Item.quantidade_caixa }}</td>            
                            <td>{{ Item.valorUnitario }}</td>
                            <td>{{ Item.tipoProduto }}</td>
                            <td>{{ Item.Observacoes }}</td> 
                            <td v-for="(quantidades_g, index) in Item.quantidades" :key="index">{{ quantidades_g }}</td>
                            <td>{{ FormatarDinheiro(Calcular_Total(Item)) }}</td>         
                        </tr>
                    </table>
                    <hr>
                </div>
            </div>

        </div>

        <button type="submit" value="CADASTRAR">Concluir Cadastro</button>    
    </form>
    
<Footer />
</template>

<script>
//import axios from 'axios';
import '@fortawesome/fontawesome-free/css/all.css'
import api, { getToken } from '../../../components/services/api';
import Footer from '@/components/Footer.vue'
//import { promises } from 'stream';
//mport { table } from 'console';

export default{
    name:'Cadastro_Teste',
    components:{
        Footer
    },
    data(){
        return{
            cod_empresa: "",
            cod_vendedor:"",
            tabela_Preco:"",
            Tipo_Venda:"",
            cod_transportadora:"",
            cod_transportadora_redespacho:"",
            clienteSelecionado: null,
            vendedorSelecionado: "",
            Data_emissao:"",
            Data_Prev_Entrega:"",
            Data_Entrega_Solicitada:"",
            desconto_n1:"",
            desconto_n2:"",
            desconto_n3:"",
            desconto_n4:"",
            forma_pagto:"",
            prazo_pagamento:"",
            desconto_pagto:"",
            desconto_s1:"",
            desconto_s2:"",
            desconto_s3:"",
            desconto_s4:"",
            forma_pagto_x:"",
            prazo_pagamento_x:"",
            observacoes_pedido:"",
            observacoes_faturamento:"",
            observacoes_nota: "",
            observacoes_producao:"",

            showModal: false,
            showModal_S_Item:false,
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
            filtro_cliente: '',
            clientes: [],

            // Conteudo dos Itens da Venda
            produtos:[],
            grades_tam:[],
            Items:[],
            mostrarCamposAdicionais: false,
            filtro_item:'',
            showOtherDiv: false,
            showSummary: false,
            showDivResumo:false,
           
            Itens_selecionados:[], //Array que vai armazenar todos os itens 
            Item_selecionado: null, 

            quantidade_itens: null,
            valor_unitario: null,
            quantidades:[],    
            ValorTotal:null,

            observacoes: '',
            quantidade_caixa:null,
            tipo_produto: null,
            ItensValidados: false
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
        //this.Pesquisar_Cliente();
        this.Consulta_de_Itens();
        this.selecionarItem();
        this.Pesquisar_Cliente();
        this.Consulta_de_Itens();
    },

    created(){        
        this.Pesquisar_Cliente();
        this.Consulta_de_Itens();
        this.selecionarItem();
    },

    computed:{
        Clientes_Filtrados(){
            return this.clientes.filter(cliente =>
                cliente.nome.toLowerCase().includes(this.filtro_cliente.toLowerCase())).sort((a, b) => a.nome.localeCompare(b.nome));
        },

        // Vendedores_do_Cliente_Selecionado(){
        //     if(this.clienteSelecionado){
        //         return this.vendedores.filter(vendedor => vendedor.cod_vendedor === this.clienteSelecionado.cod_vendedor)
        //     }
        //     return null;
        // },

        Itens_Filtrados(){
            return this.produtos.filter(produto => 
                produto.descricao.toLowerCase().includes(this.filtro_item.toLowerCase())).sort((a, b) => a.descricao.localeCompare(b.descricao))
        }
    },
    
    methods:{

        async Cadastrar_Venda(){

            try{
                const token = await getToken();
                const headers = {Authorization: `Bearer ${token}`};

                const itensVenda = this.Itens_selecionados.map(Item => {
                    return{
                            cod_referencia: Item.ref_alternativa_cor,
                            obs_item: Item.Observacoes,
                            qtd_caixa:Item.tamanhoUnico ? Item.quantidade : Item.quantidade_caixa,
                            tipo_do_item: Item.tipoProduto,
                            vendas_itens_tamanhos: Item.tamanhosGrade.map((tamanho, index) => {
                            return {
                                qtd_tamanho: Item.quantidades[index],
                                tamanho: tamanho,
                                valor_unitario: Item.valorUnitario
                            };
                        })
                    }    
                })
                
                const vendas = {
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
                        codigo_redespacho: this.cod_transportadora_redespacho,
                        redespacho_sit_frete: this.redespacho_situacao_frete,

                        cliente:{
                                celular: this.clienteSelecionado.celular,
                                classificacao:this.clienteSelecionado.classificacao,
                                classificacao_entrega: this.clienteSelecionado.classificacao_entrega,
                                cnpj_cpf:this.clienteSelecionado.cnpj_cpf,
                                cnpj_cpf_entrega: this.clienteSelecionado.cnpj_cpf_entrega,
                                cod_vendedor:this.clienteSelecionado.cod_vendedor,
                                data_cadastro:this.clienteSelecionado.data_cadastro,
                                e_mail:this.clienteSelecionado.e_mail,
                                e_mail_nfe:this.clienteSelecionado.e_mail_nfe,
                                inscricao_municipal:this.clienteSelecionado.inscricao_municipal,
                                inscricao_rg:this.clienteSelecionado.inscricao_rg,
                                nascimento: JSON.stringify(this.clienteSelecionado.nascimento),
                                nome:this.clienteSelecionado.nome,
                                nome_fantasia:this.clienteSelecionado.nome_fantasia,
                                observacao:this.clienteSelecionado.observacao,
                                suframa:this.clienteSelecionado.suframa,
                                suframa_tipo:this.clienteSelecionado.suframa_tipo,
                                telefone_2:this.clienteSelecionado.telefone_2,
                                cliente_enderecos:[{
                                    cep: this.clienteSelecionado.cep,
                                    endereco: this.clienteSelecionado.endereco,
                                    end_numero: this.clienteSelecionado.end_numero,
                                    complemento: this.clienteSelecionado.complemento,
                                    bairro: this.clienteSelecionado.bairro,
                                    cod_cidade: this.clienteSelecionado.cod_cidade,
                                    cidade: this.clienteSelecionado.cidade,
                                    estado: this.clienteSelecionado.estado,
                                    cod_pais: this.clienteSelecionado.cod_pais,
                                    telefone: this.clienteSelecionado.telefone,                                                                                        
                                    fax: this.clienteSelecionado.fax,                  
                                    tipo_endereco: this.clienteSelecionado.tipo_endereco
                                }],
                                cliente_emails: [{
                                    email: this.clienteSelecionado.email,
                                    email_recebe:[
                                        { recebe:0 },
                                        { recebe:1 },
                                        { recebe:2 }
                                    ]

                                }]
                        },
                        vendas_itens:itensVenda       
                }

                const response = await api.post("/vendas", {vendas: [vendas]}, { headers })
                console.log(response);

            }catch(error){
                console.error(error)
                alert("Erro ao cadastrar a venda");
            }     
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

                const promises = this.codigos.map( async (codigo) => {
                    const response = await api.get(`/vendedores?cod_vendedor=${codigo}`, { headers });
                    return response.data;
                });
                
                const results = await Promise.all(promises);
                this.vendedores  = results.flat();

                const vendedorCliente = this.clientes.find((cliente) => cliente.nome === this.vendedorCliente );
                if(vendedorCliente){
                    this.vendedorSelecionado = this.codigos.find((vendedor) => vendedor.cod_vendedor === vendedorCliente.cod_vendedor);
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
            this.closeModal();
        },

        selecionarVendedor(vendedor){
            this.vendedorSelecionado = vendedor;
        },



        // Metodos dos Itens da Venda
        openModal_S_Item(){
            this.showModal_S_Item = true;            
        },

        closeModal_S_Item(){
            this.showModal_S_Item = false;
            this.showOtherDiv = false;
            this.filtro_item = '';
            this.Item_selecionado = null;
            this.quantidade_caixa = '';
            this.quantidade_itens = '';
            this.valor_unitario = '';
            this.tipo_produto = '';
            this.observacoes = '';
            this.mostrarCamposAdicionais = false;
            this.tamanhosGrade = [];
            this.quantidades = [];
            this.quantidade_tamanho = 0;          
        },

        showOtherFields() {
            this.showOtherDiv = true;
        },

        Fechar_Resumo(index){
            this.Itens_selecionados.splice(index, 1);
        },

        Mostrar_resumo(){

            const gradeTamanho = this.tamanhosGrade.length > 1;

            // Verifica se a quantidade é referente a caixas ou itens
            let quantidade = 0;

            if(gradeTamanho){
                quantidade = this.quantidades.reduce((acc, value) => acc + parseInt(value), 0);
            }else{
                quantidade = gradeTamanho ? this.quantidade_caixa : this.quantidade_itens
            }

            const resumoItem = {
                ref_alternativa_cor: this.Item_selecionado.ref_alternativa_cor,
                quantidade: quantidade,
                quantidade_caixa:this.quantidade_caixa,
                valorUnitario: this.valor_unitario,
                tipoProduto: this.tipo_produto,
                Observacoes: this.observacoes,
                tamanhoUnico: !gradeTamanho,
                gradeTamanho: gradeTamanho,
                tamanhosGrade: this.tamanhosGrade.map(tamanho => tamanho.desc_tamanho),
                quantidades: this.quantidades,
            };

            this.Itens_selecionados.push(resumoItem);

            //Limpar os campos para um novo item
            this.Item_selecionado = null;
            this.quantidade_itens = '';
            this.quantidade_caixa = '';
            this.valor_unitario = '';
            this.tipo_produto = 'Pronta Entrega';
            this.observacoes = '';          
            this.quantidades = [];
            this.closeModal_S_Item();          
        },

        Calcular_Total(Item) {
            let resultado = 0;
            const valor_u = parseFloat(Item.valorUnitario);

            if(Item.tamanhoUnico){

                const quantidadeItens = parseFloat(Item.quantidade);

                if(!isNaN(valor_u) && !isNaN(quantidadeItens)){
                    resultado = valor_u * quantidadeItens;
                }

            }else{

                const quant_caixa = parseFloat(Item.quantidade_caixa);

                Item.quantidades.forEach((quantidade) => {
                    const quantidadeItens = parseFloat(quantidade);

                    if(!isNaN(quantidadeItens) && !isNaN(valor_u) && !isNaN(quant_caixa)){
                        resultado += quantidadeItens * valor_u * quant_caixa;
                    }
                    
                });
            }
            // Atualizar o valor total apenas para o item atual
            return resultado;
        },

        FormatarDinheiro(valor){
            return valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
        },

        async Consulta_de_Itens(){
           try{

                const token = await getToken();
                const headers = { Authorization: `Bearer ${token}` };
               
                const response = await api.get(`/produtos`, { headers });
                this.produtos =  response.data;

           }catch(error){
                console.log(error);
           }
        },

        async selecionarItem(Item) {
           this.Item_selecionado = Item; 

           try{            
                const response = await api.get(`http://localhost:9000/grades_tam?cod_grade=${Item.cod_grade}`);
                const tamanhosGrade = response.data;

                if(tamanhosGrade.length > 1){

                    this.mostrarCamposAdicionais = true;
                    this.tamanhosGrade = tamanhosGrade;

                    //Conta quantos tamanhos do item vamos ter
                    this.quantidade_tamanho = tamanhosGrade.length;
                    this.quantidades = Array(tamanhosGrade.length).fill('');
     
                }else{
                    this.mostrarCamposAdicionais = false;
                    this.tamanhosGrade = [];
                    this.quantidade_tamanho = 0;
                    this.quantidades = [];
                }
                
           }catch(error){
                console.log(error);
           }
           
        },      
    }

}

</script>

<style src="./estilo_cadastro_teste.scss" lang="scss">
</style>