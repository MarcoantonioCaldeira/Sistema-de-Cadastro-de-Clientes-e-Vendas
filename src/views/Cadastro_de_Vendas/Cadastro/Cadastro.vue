<template>
    <div>
 
        <Informacoes_Venda v-if="mostrar_componente" @formularioVendasEnviado="receberFormularioVendas"></Informacoes_Venda>        
        <Itens_da_Venda  v-else 
         @formularioItensValidado="receberFormularioItensVenda" 
         @validar-cadastro="enviarDadosparaAPI"></Itens_da_Venda>
 
  </div>
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
            this.mostrar_componente = true;
            this.$nextTick(() => {
                this.$refs.Itens_da_Venda.itensValidados = true;
            })
        },

        async enviarDadosparaAPI(){
            const token = await getToken()
            const headers = {Authorization: `Bearer ${token}`}

            const dadosFormulario = {
                vendas: [{
                    ...this.dadosFormulario.vendas[0],
                    vendas_itens: this.dadosFormulario.vendas[0].vendas_itens.map((Item) => ({
                        ...Item, 
                        vendas_itens_tamanhos: Item.vendas_itens_tamanhos.tamanhos.map((tamanho) => ({
                            ...tamanho
                        })),
                    })),
                    cliente: {
                        ...this.dadosFormulario.vendas[0].cliente,
                        cliente_enderecos: this.dadosFormulario.vendas[0].cliente.cliente_enderecos.map((endereco) => ({
                            ...endereco
                        }))
                    }
                }]
            };

            await api
                .post("/vendas", dadosFormulario , {headers})
                .then((response) =>{
                    console.log(response.data)
                })
                .catch((error) => {
                    console.error(error);
                })
            
        }
    }
}
</script>

<style>
</style>