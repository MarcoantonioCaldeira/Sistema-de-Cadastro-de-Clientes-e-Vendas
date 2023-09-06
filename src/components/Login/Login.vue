<template>

    <form>
        <div>
            <label>
                <input type="radio" value="pessoaFisica" v-model="tipoPessoa" />Pessoa Física
            </label>
            <label>
                <input type="radio" value="pessoaJuridica" v-model="tipoPessoa" />Pessoa Jurídica
            </label>
        </div>

        <div v-if="tipoPessoa === 'pessoaFisica'">
            <input  class="ddd"  placeholder="Seu CPF" v-model="cpf_cnpj"/>
        </div>
        
        <div v-if="tipoPessoa === 'pessoaJuridica'">
            <input class="ddd"  placeholder="Seu CNPJ" v-model="cpf_cnpj"/>
        </div>
        
        <input type="text" placeholder="Digite a sua senha"   v-model="senha"/>

        <input type="button"   @click="Login" value="Login">

    </form>

</template>

<script>
import api, { getToken } from '../services/api';
import { useRouter } from 'vue-router';

export default {
    name: 'Login',
    data(){
        return{
            tipoPessoa: 'pessoaFisica',
            cpf_cnpj: '',
            senha: ''
        }
    },
    methods:{

        async Login(){
            try{
                const token = await getToken();
                const headers = { Authorization: `Bearer ${token}` };  
                const resposta = await api.get(`clientes`, {headers });

                //vendedor
                const clienteEncontrado = resposta.data.find(cliente => cliente.cnpj_cpf === this.cpf_cnpj);
            
                if(clienteEncontrado){

                    const senhaDoCliente = clienteEncontrado.cliente_enderecos[0].cep;

                    if(senhaDoCliente === this.senha){
                        
                        alert("Deu certo o Login esta funcionando!!!")

                        this.$route.go( '/Tela_Inicial' );


                    }else{
                        alert("Senha incorreta, tente novamente")
                    }
                }else{
                    alert("CPF invalido")
                    console.log(resposta)
                }

            }catch(error){
                console.error("Erro ao efetuar o Login", error);
            }
        }
    }
}

</script>
<style>

</style>-