<template>
    <div style="width: 100%; height: 2600px;">
        <Informacoes_Venda ref="Informacoes_Venda"  @formularioVendasEnviado="receberFormularioVendas"></Informacoes_Venda>        
        <Itens_da_Venda ref="Itens_da_Venda" @formularioItensValidado="receberFormularioItensVenda"></Itens_da_Venda>
    </div>
  <button  @click="cadastrarDados">Finalizar Cadastro</button>

</template>

<script >
import api, { getToken } from '@/components/services/api';
import Informacoes_Venda from '../Informacoes_Venda.vue'
// import Footer from '../../../components/Footer.vue'
import Itens_da_Venda from '../Itens_da_Venda/Itens_da_Venda.vue';
export default{
    name:'Cadastro',
    components:{
        Informacoes_Venda,
        Itens_da_Venda,
        // Footer
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
        cadastrarDados(){
            this.enviarDadosparaAPI();
        },

        receberFormularioVendas(dadosVendas){
            this.dadosFormulario.vendas = dadosVendas;
        },

        receberFormularioItensVenda(dadosItens) {
            this.dadosFormulario.itens = {
                vendas_itens: dadosItens.map((item) => ({
                    ...item,
                    vendas_itens_tamanhos: item.vendas_itens_tamanhos.tamanhos.map((tamanho) => ({ ...tamanho }))
                }))
            };
            this.mostrar_componente = true;
            this.$nextTick(() => {
                this.$refs.Itens_da_Venda.itensValidados = true;
            });
        },

        async enviarDadosparaAPI() {
            try {
                const token = await getToken();
                const headers = { Authorization: `Bearer ${token}` };

                if(
                    this.dadosFormulario.vendas &&
                    this.dadosFormulario.vendas.length > 0 &&
                    this.dadosFormulario.vendas[0].vendas_itens &&
                    this.dadosFormulario.vendas[0].vendas_itens.length > 0
                ){
                const dadosFormulario = {
                    vendas: [{
                        ...this.dadosFormulario.vendas[0],
                        vendas_itens: this.dadosFormulario.vendas[0].vendas_itens.map(
                            (Item) => ({
                                ...Item,
                                vendas_itens_tamanhos: Item.vendas_itens_tamanhos
                                ? Item.vendas_itens_tamanhos.tamanhos.map((tamanho) => ({
                                    ...tamanho
                                    }))
                                : []
                            })
                        ),
                        cliente: {
                            ...this.dadosFormulario.vendas[0].cliente,
                            cliente_enderecos: this.dadosFormulario.vendas[0].cliente.cliente_enderecos
                                ? this.dadosFormulario.vendas[0].cliente.cliente_enderecos.map(
                                    (endereco) => ({
                                    ...endereco
                                    })
                                )
                                : []
                        }
                    }]
                };

                await api.post("/vendas", dadosFormulario, { headers });

                    this.$refs.Informacoes_Venda.doSomething();
                    this.$refs.Itens_da_Venda.doSomethingElse();

                    console.log("Cadastro de venda concluído com sucesso!");
                } else {
                    //console.error("Dados de venda inválidos");
                    alert("Erro ao cadastrar a venda");
                }
            } catch (error) {
                console.error(error);
                alert("Erro ao cadastrar a venda");
            }}
    }
}
</script>

<style>
</style>