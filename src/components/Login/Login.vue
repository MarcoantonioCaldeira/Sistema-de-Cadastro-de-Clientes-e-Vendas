<template>

    <img  class="logo_ti_gestor"  src="../../assets/images/logo.png">
    <div id="area_msg">
        <Message :msg="msg" v-show="msg"/>
    </div>
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

        <input class="btn_login" type="button" @click="Login" value="Login">

    </form>
    <Footer  style="margin-top: 300px;" />

</template>

<script>
import api, { getToken } from '../services/api';
import { useRouter } from 'vue-router';
import Footer from '../Footer.vue'
import store from '../services/store';
import Message from '../Message/Message.vue'

export default {
    name: 'Login',
    components:{
        Footer,
        Message
    },
    data(){
        return{
            tipoPessoa: 'pessoaFisica',
            cpf_cnpj: '',
            senha: '',
            msg: null
        }
    },
    methods:{
        async Login(){
            try{
                const token = await getToken();
                const headers = { Authorization: `Bearer ${token}` };  
                const resposta = await api.get(`clientes`, {headers });
                const clienteEncontrado = resposta.data.find(cliente => cliente.cnpj_cpf === this.cpf_cnpj);
            
                if(clienteEncontrado){
                    const senhaDoCliente = clienteEncontrado.cliente_enderecos[0].cep;

                    if(senhaDoCliente === this.senha){
                        this.$store.commit('setAuthentication', true);
                        this.$router.push({ path: '/Tela_Inicial' });
                    }else{
                        this.msg = "Erro ao fazer Login. Verifique suas informações!!!"
                        //setTimeout(() => this.msg = "", 3000)
                    }

                }else{
                    this.msg = "Erro ao fazer Login. Verifique suas informações!!!"
                    //setTimeout(() => this.msg = "", 3000)
                    console.log(resposta);
                }

            }catch(error){
                this.msg = "Erro ao fazer Login. Verifique suas informações!!!"
                //setTimeout(() => this.msg = "", 3000)
            }
        }
    }
}

</script>
<style  src="./estilo_login.scss"  lang="scss">

</style>