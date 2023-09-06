<template>

    <img  class="logo_ti_gestor"  src="../../assets/images/logo.png">

    <form>
        <div id="area_selecao_pessoa">
            <label>Pessoa Física</label>
                <input type="radio" value="pessoaFisica" v-model="tipoPessoa" />
            
            <label>Pessoa Jurídica</label>
                <input type="radio" value="pessoaJuridica" v-model="tipoPessoa" />
            
        </div>

        <div v-if="tipoPessoa === 'pessoaFisica'">
            <input  class="input"  placeholder="Seu CPF" v-model="cpf_cnpj"/>
        </div>
        
        <div v-if="tipoPessoa === 'pessoaJuridica'">
            <input class="input"  placeholder="Seu CNPJ" v-model="cpf_cnpj"/>
        </div>
        
        <input  class="input" type="text" placeholder="Digite a sua senha"   v-model="senha"/>

        <input class="btn_login" type="button"   @click="Login" value="Login">

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

                        this.$router.push({path: '../Tela_Inicial/Tela_Inicial'});


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
<style  src="./estilo_login.scss"  lang="scss">

</style>-