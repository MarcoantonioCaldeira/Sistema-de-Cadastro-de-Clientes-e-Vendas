<template> 
    <div id="Formulario_Itens_Venda"> 

        <h1 class="Titulo_Itens_Venda">Itens da Venda</h1>

        <div id="conteudo_formulario">

            <button class="btn_nome_Item" v-on:click="openModal_S_Item">
                <p class="p_nome_item">Adicione o Item</p><i  style="margin-left: 18px; margin-top: 2px;"  class="fa-solid fa-circle-plus"></i>
            </button>
            
            <div v-if="showModal" class="modal">

                <div class="modal-content animate">

                    <i v-on:click="closeModal_S_Item"  
                     style="position: absolute; 
                            color:#9B9A9A; 
                            margin-left: 87%;
                            margin-top: 16px;"
                            id="fa-solid-li"  class="fa-solid fa-circle-xmark"></i>

                    <div v-if="!showOtherDiv">

                        <input type="text" class="input_pesquisa_nome_item" :disabled=Item_selecionado :class="{ 'disabled-field': Item_selecionado }" v-model="filtro" placeholder="Pesquisar produto" />
                    
                        <button class="btn_proximo"  v-if="Item_selecionado"  @click="showOtherFields">Prosseguir</button>

                        <div :class="{ 'disabled-field': Item_selecionado }" style="margin-top: 100px;">

                            <div v-for="Item in (Itens_Filtrados)" :key="Item.referencia" class="conteudo_registro" v-on:click="selecionarItem(Item)">

                                <table style="width: 100%;">
                                    <tr>
                                        <th>Referencia Alternativa</th>
                                        <th>Descrição</th>
                                        <th>Unidade</th>
                                    </tr>
                                    <tr>
                                        <td>{{ Item.ref_alternativa_cor }}</td>
                                        <td>{{ Item.descricao }}</td>
                                        <td>{{ Item.unidade }}</td>
                                    </tr>
                                </table>
                                    
                            </div>

                        </div>       
                
                    </div>
                    
                    <div v-if="showOtherDiv" class="pagina-branco">
                        
                        <h2 class="Titulo_Itens_Venda">Preencha os Campos abaixo</h2>

                        <!-- <input type="text" class="Input_Form_Itens_Venda" placeholder="Codigo de linha" v-model="cod_referencia">
                        <input type="text" class="Input_Form_Itens_Venda" placeholder="Codigo de modelo" v-model="cod_referencia">
                        <input type="text" class="Input_Form_Itens_Venda" placeholder="Codigo de cor" v-model="cod_referencia"> -->

                        <div  v-for="tamanho in Item.grades_tam" :key="tamanho.tamanho">

                            <h3>Vão ter os campos com as grades</h3>

                            <input type="text" class="Input_Form_Itens_Venda" placeholder="Quantidade de Caixa">
                            <input type="text" class="Input_Form_Itens_Venda" placeholder="tipo do Item" >
                            <input type="text" class="Input_Form_Itens_Venda" placeholder="Observação do Item">

                            <input type="text" class="Input_Form_Itens_Venda" placeholder="Temanho">
                            <input type="text" class="Input_Form_Itens_Venda" placeholder="Quantidade de Itens">
                            <input type="text" class="Input_Form_Itens_Venda" placeholder="Valor Unitario">
                            
                        </div>

                        <button class="btn_finalizar">Finalizar</button>
                      
                    </div>
                </div>
            </div>
        </div>

        <h2 class="Titulo_Itens_Selecionados">Itens Selecionados</h2>
        <div id="conteudos-selecionados">

            <div v-if="Item_selecionado">
                {{ Item_selecionado.ref_alternativa_cor }}
            </div>

        </div>
    </div>
    <Footer />
</template>

<script>
import '@fortawesome/fontawesome-free/css/all.css'
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
            //cod_grade:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            Items:[],
            filtro:'',
            showModal: false,
            showOtherDiv: false,
            Item_selecionado: null,
        }
    },

    mounted(){
        this.Consulta_de_Itens();
        this.Consulta_Grade_de_Tamanho();
    },

    created(){
        this.Consulta_de_Itens();
        this.Consulta_Grade_de_Tamanho();
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
        },

        showOtherFields() {
            this.showOtherDiv = true;
        },


        async Consulta_de_Itens(){
           try{

            const token = await getToken();
            const headers = { Authorization: `Bearer ${token}` };
               
            const response = await api.get(`/produtos`, { headers });
            produto =  response.data;

           }catch(error){
            console.log(error);
           }
        },

        selecionarItem(Item) {
           this.Item_selecionado = Item; 

           if (this.Item_selecionado.cod_grade) { 
                this.Consulta_Grade_de_Tamanho(this.Item_selecionado.cod_grade);
            }

            if(this.Items.length > 1){
                this.showOtherDiv = true;
            }else{
                this.showOtherDiv = false;
            }
        },


        async Consulta_Grade_de_Tamanho(cod_grade){
            try{
                const response = await api.get(`/grades_tam?cod_grade=${cod_grade}`);
                this.grades_tam = response.data;
                

            }catch(error){
                console.log(error);
            }
        }
    }
}

</script>


<style src="./estilo_itens_da_venda.scss" lang="scss"> 
</style>
