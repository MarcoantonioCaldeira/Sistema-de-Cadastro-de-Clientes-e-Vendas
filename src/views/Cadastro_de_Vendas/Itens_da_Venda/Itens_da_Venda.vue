<template> 
    <div id="Formulario_Itens_Venda"> 

        <h1 class="Titulo_Itens_Venda">Itens da Venda</h1>

        <div id="conteudo_formulario">

            <button class="btn_nome_Item" v-on:click="openModal_S_Item">
                <p class="p_nome_item">Selecione o Item</p><i  style="margin-left: 18px; margin-top: 2px;"  class="fa-solid fa-circle-plus"></i>
            </button>
            
            <div v-if="showModal" class="modal">

                <div class="modal-content animate">

                    <i v-on:click="closeModal_S_Item"  
                     style="position: absolute; 
                            color:#9B9A9A; 
                            margin-left: 87%;
                            margin-top: 16px;"
                            id="fa-solid-li"  class="fa-solid fa-circle-xmark"></i>

                    <input type="text"   class="input_pesquisa_nome_item" v-model="filtro" placeholder="Pesquisar produto" />
                    
                    <div  v-for="Item in (Itens_Filtrados)" :key="Item.referencia" class="conteudo_registro" v-on:click="selecionarItem(Item)">

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
      
                    <!-- <div v-if="showOtherDiv">
                        <h2>Aqui ficam os outros campos</h2>

                    </div> -->

                </div>
                
            </div>

      
            <!-- <br><button class="btn_cadastrar_item" v-on:click="openModal_C_Item">
                <p class="p_nome_item">Adicione um Item</p><i  style="margin-left: 10px; margin-top: 2px;"  class="fa-solid fa-circle-plus"></i>
            </button>

            <div v-if="showModal_2" class="modal_add_item">


                <div class="modal-content_add_item animate">

                    <i @click="closeModal_C_Item"  
                     style="position: absolute; 
                            color:#9B9A9A; 
                            margin-left: 87%;
                            margin-top: 16px;"
                            id="fa-solid-li"  class="fa-solid fa-circle-xmark"></i>

                    <h2 class="Titulo_Itens_Venda">Preencha os Campos abaixo</h2>

                    <input type="text" class="Input_Form_Itens_Venda" placeholder="Codigo de linha" v-model="cod_referencia">
                    <input type="text" class="Input_Form_Itens_Venda" placeholder="Codigo de modelo" v-model="cod_referencia">
                    <input type="text" class="Input_Form_Itens_Venda" placeholder="Codigo de cor" v-model="cod_referencia">

                    <input type="text" class="Input_Form_Itens_Venda" placeholder="Quantidade de Caixa" v-model="qtd_caixa">
                    <input type="text" class="Input_Form_Itens_Venda" placeholder="tipo do Item" v-model="tipo_do_item">
                    <input type="text" class="Input_Form_Itens_Venda" placeholder="Observação do Item" v-model="obs_item">

                    <input type="text" class="Input_Form_Itens_Venda" placeholder="Temanho" v-model="tamanho">
                    <input type="text" class="Input_Form_Itens_Venda" placeholder="Quantidade de Itens"  v-model="qtd_tamanho">
                    <input type="text" class="Input_Form_Itens_Venda" placeholder="Valor Unitario" v-model="valor_unitario">

                    <button class="btn_finalizar">Finalizar</button>

                </div>
                
            </div>
         -->
        </div>

        <!-- <div v-if="Item_selecionado">

            {{ Item.ref_alternativa_cor }}

        </div> -->

        <h2 class="Titulo_Itens_Selecionados">Itens Selecionados</h2>
        <div id="conteudos-selecionados">

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
            filtro:'',
            showModal: false,
            showOtherDiv: false,
            Item_selecionado: null,
        }
    },

    mounted(){
        this.Consulta_de_Itens();
    },

    created(){
        this.Consulta_de_Itens();
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

        // showOtherFields() {
        //     this.showOtherDiv = true;
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

        selecionarItem(Item) {
           this.Item_selecionado = Item; 
            //console.log('Cliente selecionado:', cliente);
        },
    }
}

</script>


<style src="./estilo_itens_da_venda.scss" lang="scss"> 
</style>
