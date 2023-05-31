<template> 
    <div id="Formulario_Itens_Venda"> 

        <h1 class="Titulo_Itens_Venda">Itens da Venda</h1>

        <div id="conteudo_formulario">

            <button class="btn_nome_Item" v-on:click="openModal_S_Item">
                <p class="p_nome_item">Adicione o Item</p><i  style="margin-left: 18px; margin-top: 2px;"  class="fa-solid fa-circle-plus"></i>
            </button>
            
            <div v-if="showModal" class="modal">

                <div class="modal-content animate">

                    <i v-on:click="closeModal_S_Item" id="fa-solid-li"  class="fa-solid fa-circle-xmark"></i>

                    <div v-if="!showOtherDiv">
                        <!-- Campo para pesquisar os itens -->
                        <input type="text" class="input_pesquisa_nome_item" :disabled=Item_selecionado :class="{ 'disabled-field': Item_selecionado }" v-model="filtro" placeholder="Pesquisar produto" />
                    
                        <!-- Botão de prosseguir -->
                        <button class="btn_proximo"  v-if="Item_selecionado"  @click="showOtherFields">Prosseguir</button>

                        <!-- Div para desabilitar a selecao de itens na hora que aparecer a opção de presseguir -->
                        <div :class="{ 'disabled-field': Item_selecionado }" style="margin-top: 100px;">

                            <div v-for="Item in (Itens_Filtrados)" :key="Item.referencia" class="conteudo_registro" v-on:click="selecionarItem(Item)">

                                <!-- Tabela onde aparecem os  Itens -->
                                <table style="width: 100%;">
                                    <tr>
                                        <th>Codigo da grade</th>
                                        <th>Referencia Alternativa</th>
                                        <th>Descrição</th>
                                        <th>Unidade</th>
                                    </tr>
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
                    <div v-if="Item_selecionado" class="pagina-branco">
                        
                        <h2 class="Titulo_Itens_Venda">Preencha os Campos abaixo</h2>

                       <!-- Div onde aparece o Item Selecionado -->
                        <div class="Area_Selecionada">
                            <h3>Item escolhido</h3><br>

                            <p>Descrição: {{ Item_selecionado.descricao }}</p><br>

                            <p>Referencia Alternativa: {{ Item_selecionado.ref_alternativa_cor }}</p>
                        </div>

                        <!-- Se o For Item de Tamanho unico mostramos quantidade de caixa -->
                        <div v-if="mostrarCamposAdicionais">
                            <br><input type="text" v-model=" quantidade_caixa"  class="Input_Form_Itens_Venda" placeholder="Quantidade de Caixa" >
                        </div>                     
                        <div v-else>
                            <br><input type="text" v-model=" quantidade_itens"  class="Input_Form_Itens_Venda" placeholder="Quantidade de Itens" >
                        </div>
                        
                        <input type="text" v-model="valor_unitario"  class="Input_Form_Itens_Venda" placeholder="Valor Unitario">

                        <p class="p_tipo_produto">Tipo do Item: </p>

                        <select  v-model="tipo_produto"  class="select_tipo_produto">
                            <option>Pronta Entrega</option>
                            <option>Encomenda</option>
                        </select>

                        <p class="p_tipo_produto">Observações: </p><br>
                        <textarea  v-model="observacoes" class="area-observacao">

                        </textarea>

                        <!-- Area Onde aparecem os Resumos -->
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

        <h2 class="Titulo_Itens_Selecionados">Itens Selecionados</h2>
        <div id="conteudos-selecionados">

            <div v-for="(Item, index) in Itens_selecionados" :key="index"> 
                    <table>
                        <tr>
                            <th>Referencia alternativa de Cor</th>
                            <th>Quantidade de Itens</th>
                            <th>Valor Unitario</th>
                            <th>Tipo do Produto</th>
                            <th>Observações</th>
                            <th v-for="(tamanho, idx) in Item.tamanhosGrade" :key="idx">{{ tamanho }}</th>
                        </tr>
                        <tr>
                            <td>{{ Item.ref_alternativa_cor }}</td>
                            <td>{{ Item.quantidade_itens }}</td>
                            <td>{{ Item.valor_unitario }}</td>
                            <td>{{ Item.tipo_produto }}</td>
                            <td>{{ Item.observacoes }}</td> 
                            <td v-for="(quantidade, idx) in Item.quantidades" :key="idx">{{ quantidade }}</td>
                        
                        </tr>
                        <!-- <td>
                            <table>
                                <tr>
                                    <th v-for="(tamanho, idx) in Item.tamanhosGrade" :key="idx">{{ tamanho }}</th>
                                </tr>
                                <tr>
                                    <td v-for="(quantidade, idx) in Item.quantidade" :key="idx">{{ quantidade }}</td>
                                </tr>
                            </table>
                        </td> -->
                    </table>
                    <hr>
            </div>
        </div>
    </div>
    <Footer />
</template>

<script>
import '@fortawesome/fontawesome-free/css/all.css'
import axios from 'axios'
import api, { getToken } from '../../../components/services/api';
import Footer from '@/components/Footer.vue';

export default{
    name: 'Itens_da_Venda',
    components:{
        Footer 
    },

    data(){
        return{
            token: '',
            produtos:[],
            grades_tam:[],
            cod_grade:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            Items:[],
            mostrarCamposAdicionais: false,
            filtro:'',
            showModal: false,
            showOtherDiv: false,
            showSummary: false,
           
            Itens_selecionados:[],
            Item_selecionado: null,
            //Item_selecionado_parte_2:null,
            quantidade_itens: null,
            valor_unitario:null,
            tipo_produto: null,
            observacoes: '',
            quantidades:[],            
        }
    },

    mounted(){
        this.Consulta_de_Itens();
        //this.Consulta_Grade_de_Tamanho();
        this.selecionarItem();
    },

    created(){
        this.Consulta_de_Itens();
        //this.Consulta_Grade_de_Tamanho();]
        this.selecionarItem();
    },

    computed:{
        Itens_Filtrados(){
            return this.produtos.filter(produto => 
                produto.descricao.toLowerCase().includes(this.filtro.toLowerCase())).sort((a, b) => a.descricao.localeCompare(b.descricao))
        }
    },

    methods:{

        openModal_S_Item(){
            this.showModal = true;
            
        },

        closeModal_S_Item(){
            this.showModal = false;
            this.showOtherDiv = false;
            this.filtro = '';
            this.Item_selecionado = null;
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


        Mostrar_resumo(){

            const resumoItem = {
                refAlternativaCor: this.Item_selecionado.ref_alternativa_cor,
                quantidadeItens: this.quantidade_itens,
                valorUnitario: this.valor_unitario,
                tipoProduto: this.tipo_produto,
                observacoes: this.observacoes,
                tamanhosGrade: this.tamanhosGrade.map((tamanho) => tamanho.desc_tamanho),
                quantidades: this.quantidades
            };

            this.Itens_selecionados.push(resumoItem);


            //Limpar os campos para um novo item
            this.Item_selecionado = null;
            this.quantidade_itens = '';
            this.valor_unitario = '';
            this.tipo_produto = '';
            this.observacoes = '';
            this.mostrarCamposAdicionais = false;
            this.tamanhosGrade = [];
            this.quantidades = [];
            this.quantidade_tamanho = 0;
            this.closeModal_S_Item();
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
                    this.quantidades = []
                }
                //this.showSummary = false;
           }catch(error){
                console.log(error);
           }
           
        },


        // async Consulta_Grade_de_Tamanho(cod_grade){
        //     try{
        //         const response = await api.get(`/grades_tam?cod_grade=${cod_grade}`);
        //         this.grades_tam = response.data;
                

        //     }catch(error){
        //         console.log(error);
        //     }
        // }
    }
}

</script>


<style src="./estilo_itens_da_venda.scss" lang="scss"> 
</style>
