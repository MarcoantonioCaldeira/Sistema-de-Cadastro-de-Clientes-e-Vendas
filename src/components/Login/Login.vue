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
            <input  class="ddd"  placeholder="Seu CPF" v-model="cpf"/>
        </div>
        
        <div v-if="tipoPessoa === 'pessoaJuridica'">
            <input class="ddd"  placeholder="Seu CNPJ" v-model="cnpj"/>
        </div>
        
        <input type="text" placeholder="Digite a sua senha"/>

        <input type="button"   @click="Login" value="Login">

    </form>

</template>

<script>
import api, { getToken } from '../services/api';


export default {
    name: 'Login',
    data(){
        return{
            tipoPessoa: 'pessoaFisica',
            cadastroValido:true,
            cpf: '',
            cnpj: '', 
        }
    },
    methods:{

        async Login(){

            try{
                const token = await getToken();
                const headers = { Authorization: `Bearer ${token}` };


                
                const resposta = await api.get(`clientes/cnpj_cpf=`+this.cpf, {headers });
                //return resposta.data;


                if(resposta.data.cadastroValido){
                    //this.$router.push()
                    alert("Deu certo o Login esta funcionando!!!");
                }else{
                    alert("CPF invalido")
                }

            }catch(error){
                console.error("Erro ao efetuar o Login", error);
            }
        }
    }
}

</script>
<style>

</style>