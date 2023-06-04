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
                        <br><input v-if="mostrarCamposAdicionais" type="text" v-model="quantidade_caixa"  class="Input_Form_Itens_Venda" placeholder="Quantidade de Caixa" >                                 
                        
                        <br><input v-if="!mostrarCamposAdicionais" type="text" v-model="quantidade_itens"  class="Input_Form_Itens_Venda" placeholder="Quantidade de Itens" >
                        
                        <input type="text" v-model="valor_unitario"  class="Input_Form_Itens_Venda" placeholder="Valor Unitario">

                        <p class="p_tipo_produto">Tipo do Item: </p>

                        <select  v-model="tipo_produto"  class="select_tipo_produto">
                            <option>Pronta Entrega</option>
                            <option>Encomenda</option>
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
        <!-- <h2 class="Titulo_Itens_Selecionados">Itens Selecionados</h2> -->
    </div>
    <!-- Area onde aparecem os itens que foram selecionados -->
    <div id="conteudos-selecionados">

        <div  id="conteudo-selecionado"  v-if="!showDivResumo"  v-for="(Item, index) in Itens_selecionados" :key="index"> 
            <i v-on:click="Fechar_Resumo" id="fa-solid-li-2"  class="fa-solid fa-circle-xmark"></i>
            <table>
                <tr>
                    <th>Referencia alternativa de Cor</th>              
                    <th v-if="Item.tamanhoUnico">Quantidade de Itens</th>
                    <th v-if="!Item.tamanhoUnico">Quantidade de Caixa</th>
                    <th>Valor Unitario</th>
                    <th>Tipo do Produto</th>
                    <th>Observações</th>
                    <th v-for="(tamanho, index) in Item.tamanhosGrade" :key="index">{{ tamanho }}</th>
                    <!-- <th>Soma total dos Itens</th> -->
                </tr>
                <tr>
                    <td>{{ Item.ref_alternativa_cor }}</td>  
                    <td v-if="Item.tamanhoUnico">{{ Item.quantidade }}</td>
                    <td v-if="!Item.tamanhoUnico">{{ Item.quantidade_caixa }}</td>            
                    <td>{{ Item.valorUnitario }}</td>
                    <td>{{ Item.tipoProduto }}</td>
                    <td>{{ Item.Observacoes }}</td> 
                    <td v-for="(quantidades_g, index) in Item.quantidades" :key="index">{{ quantidades_g }}</td>
                    <!-- <td>{{ Calcular_Total() }}</td>          -->
                </tr>
            </table>
            <hr>
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
            Items:[],
            mostrarCamposAdicionais: false,
            filtro:'',
            showModal: false,
            showOtherDiv: false,
            showSummary: false,
            showDivResumo:false,
           
            Itens_selecionados:[], //Array que vai armazenar todos os itens 
            Item_selecionado: null, 

            quantidade_itens: null,
            quantidade_caixa:null,
            valor_unitario: null,
            tipo_produto: null,
            observacoes: '',
            quantidades:[],            
        }
    },

    mounted(){
        this.Consulta_de_Itens();
        this.selecionarItem();

    },

    created(){
        this.Consulta_de_Itens();
        this.selecionarItem();
    },

    computed:{
        // Filtra os itens para serem exibidos por ordem alfabetica
        Itens_Filtrados(){
            return this.produtos.filter(produto => produto.descricao.toLowerCase().includes(this.filtro.toLowerCase())).sort((a, b) => a.descricao.localeCompare(b.descricao))
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

        // Metodo para abrir a segunda parte do cadastro
        showOtherFields() {
            this.showOtherDiv = true;
        },

        Fechar_Resumo(){
            this.showDivResumo = true;
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

        // Calcular_Total(){

        //     let resultado = 0;

        //     if(this.tamanhoUnico){
        //         resultado = parseInt(this.Item_selecionado.valorUnitario) * parseInt(this.Item_selecionado.Item.quantidade);                 
        //     }
        //     // else{
        //     //     // this.quantidades.forEach((quantidade) => {
        //     //     //     const quantidadeItens = parseFloat(quantidade);
        //     //     //     const valor_u = parseFloat(this.valor_unitario);
        //     //     //     Valor_Total += quantidadeItens * valor_u;
        //     //     // })
        //     // }

        //     return resultado;

        // },


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
                    //this.quantidade_caixa = '';
     
                }else{

                    this.mostrarCamposAdicionais = false;
                    this.tamanhosGrade = [];
                    this.quantidade_tamanho = 0;
                    this.quantidades = [];
                    //this.quantidade_caixa = '';
                }
                
           }catch(error){
                console.log(error);
           }
           
        },
    }
}

</script>


<style src="./estilo_itens_da_venda.scss" lang="scss"> 
</style>