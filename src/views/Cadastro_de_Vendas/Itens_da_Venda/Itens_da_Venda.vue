<template> 
    <div id="Formulario_Itens_Venda"> 

        <h1 class="Titulo_Itens_Venda">Itens da Venda</h1>

        <div id="conteudo_formulario">

            <button class="btn_nome_cliente" v-on:click="openModal">Selecionar o Item</button>

            <!-- <input type="text" class="Input_Form_Itens_Venda" placeholder="Codigo de linha" v-model="cod_referencia">
            <input type="text" class="Input_Form_Itens_Venda" placeholder="Codigo de modelo" v-model="cod_referencia">
            <input type="text" class="Input_Form_Itens_Venda" placeholder="Codigo de cor" v-model="cod_referencia">

            <input type="text" class="Input_Form_Itens_Venda" placeholder="Quantidade de Caixa" v-model="qtd_caixa">
            <input type="text" class="Input_Form_Itens_Venda" placeholder="tipo do Item" v-model="tipo_do_item">
            <input type="text" class="Input_Form_Itens_Venda" placeholder="Observação do Item" v-model="obs_item">

            <input type="text" class="Input_Form_Itens_Venda" placeholder="Temanho" v-model="tamanho">
            <input type="text" class="Input_Form_Itens_Venda" placeholder="Quantidade de Itens"  v-model="qtd_tamanho">
            <input type="text" class="Input_Form_Itens_Venda" placeholder="Valor Unitario" v-model="valor_unitario"> -->

            
            <div v-if="showModal" class="modal">

                <div class="modal-content animate">

                    <i @click="closeModal"  id="fa-solid-li"  class="fa-solid fa-circle-xmark"></i>

                    <input type="text"   v-model="filtro" placeholder="Pesquisar produto"  v-on:click="selecionarItem(cliente)"/>

                    <div  v-for="Item in (Itens_Filtrados)" :key="Item.referencia" class="conteudo_registro" style="background-color: red;">
                        
                       <p>Referencia Alternativa</p> {{ Item.ref_alternativa_cor }}
                        <!-- {{ Item.descricao }}
                        {{ Item.unidade }} -->

                    </div>

                </div>

            </div>
            
            

        </div>
    
<!-- 
        <button class="btn_cadastro_itens_venda">Cadastrar Itens da Venda</button> -->
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
            Item_selecionado: null
        }
    },


    created(){
        this.Consulta_de_Itens
    },

    computed:{
        Itens_Filtrados(){
            return this.produtos.filter(produto => 
                produto.descricao.toLowerCase().includes(this.filtro.toLowerCase())).sort((a, b) => a.descricao.localeCompare(b.descricao))
        }
    },

    methods:{

        openModal(){
            this.showModal = true;
        },

        closeModal(){
            this.showModal = false;
        },

        async Consulta_de_Itens(){
           try{

                const token = await getToken();
                const headers = { Authorization: `Bearer ${token}` };
               
                const response = await api.get(`/produtos`, { headers });
                this.produtos =  response.data;

           }catch(error){
                console.log(error);
                alert('Erro ao buscar os itens')
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
