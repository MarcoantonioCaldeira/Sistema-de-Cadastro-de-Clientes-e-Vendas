<template>

<Informacoes_Venda v-if="mostrar_componente"  @formularioVendasEnviado="receberFormularioVendas"/>
<Itens_da_Venda v-else   @formularioItensValidado="receberFormularioItensVenda"/>

</template>

<script>
import api, { getToken } from '@/components/services/api';
import Informacoes_Venda from '../Informacoes_Venda.vue'
import Itens_da_Venda from '../Itens_da_Venda/Itens_da_Venda.vue';
export default{
    name:'Cadastro',
    components:{
        Informacoes_Venda,
        Itens_da_Venda
    },
    
    data(){
        return{
            mostrar_componente: true,
            dadosFormulario: {
                vendas: {},
                itens: {}
            }
        }
    },

    methods:{
        receberFormularioVendas(dadosVendas){
            this.dadosFormulario.vendas = dadosVendas;
        },

        receberFormularioItensVenda(dadosItens){
            this.dadosFormulario.itens = dadosItens;
        },

        async enviarDadosparaAPI(){
            const token = await getToken()
            const headers = {Authorization: `Bearer ${token}`}

            await api.post("/vendas", this.dadosFormulario)


            .then(response =>{
                console.log(response.data);
            })
            .catch(error => {
                console.error(error);
            })
            
        }
    }
}
</script>

<style>
</style>