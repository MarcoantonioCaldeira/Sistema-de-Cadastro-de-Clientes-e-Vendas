<template>

    <div id="conteudo">

        <div id="endereco_principal">
            <h2 class="h2_endereco">Endereço principal</h2>
            <label class="lb_cep">Seu CEP:</label> <input type="text" class="input_cep" v-model="cep"
                v-on:click="consulta_cep">
            <input type="text" placeholder="Endereço" class="input_endereco" v-model="endereco">
            <input type="text" placeholder="Numero" class="input_endereco" v-model="numero">
            <input type="text" placeholder="Complemento(opcional)" class="input_endereco" v-model="complemento">
            <input type="text" placeholder="Bairro" class="input_endereco" v-model="cep_data.bairro">
            <input type="text" placeholder="Cidade" class="input_endereco" v-model="cep_data.localidade">
            <input type="text" placeholder="Estado" class="input_endereco" v-model="cep_data.uf">
        </div>

        <div id="endereco_secundario">
            <h2 class="h2_endereco">Endereço de cobrança<br>(opcional)</h2>
            <div id="campos_endereco_secundario">
                <label class="lb_cep">Seu CEP: </label><input type="text" class="input_cep" style="opacity : 0.8;">
                <input type="text" placeholder="Endereço" class="input_endereco" style="opacity : 0.8;">
                <input type="text" placeholder="Numero" class="input_endereco" style="opacity : 0.8;">
                <input type="text" placeholder="Complemento(opcional)" class="input_endereco" style="opacity : 0.8;">
                <input type="text" placeholder="Bairro" class="input_endereco" style="opacity : 0.8;">
                <input type="text" placeholder="Cidade" class="input_endereco" style="opacity : 0.8;">
                <input type="text" placeholder="Estado" class="input_endereco" style="opacity : 0.8;">
            </div>
        </div>


        <div id="endereco_terciario">
            <h2 class="h2_endereco">Endereço de entrega<br>(opcional)</h2>
            <div id="campos_endereco_terciario">
                <label class="lb_cep">Seu CEP: </label><input type="text" class="input_cep" style="opacity : 0.8;">
                <input type="text" placeholder="Endereço" class="input_endereco" style="opacity : 0.8;">
                <input type="text" placeholder="Numero" class="input_endereco" style="opacity : 0.8;">
                <input type="text" placeholder="Complemento(opcional)" class="input_endereco" style="opacity : 0.8;">
                <input type="text" placeholder="Bairro" class="input_endereco" style="opacity : 0.8;">
                <input type="text" placeholder="Cidade" class="input_endereco" style="opacity : 0.8;">
                <input type="text" placeholder="Estado" class="input_endereco" style="opacity : 0.8;">
            </div>
        </div>

        <router-link to="/Cadastro_concluido"><button class="btn_concluir">Comcluir cadastro</button></router-link>
    </div>
</template>
<script>
import api from './api'
import { assertExpressionStatement } from '@babel/types';


export default {
    name: 'Informacoes_Endereco',
    data() {
        return {
            cep: "",
            endereco: "",
            numero: "",
            complemento: "",
            bairro: "",
            localidade: "",
            uf: "",
            cep_data: "",
            cep_keys: []
        }
    },

    methods: {
        async consulta_cep() {
            var self = this;

            api
                .get('https://viacep.com.br/ws/' + this.cep + '/json/')
                .then(function (response) {

                    console.log(response);
                    self.cep_data = response.data;
                    self.cep_keys = Object.keys(self.cep_data);
                })
                .catch(function (error) {
                    //console.log(error);
                })
                .finally(function () {
                });
        },

        async Cadastro_Informacoes() {
            api.post({
                data: {
                    CEP: this.cep,
                    Endereco: this.endereco,
                    numero: this.numero,
                    Complemento: this.complemento,
                    Bairro: this.bairro,
                    Localidade: this.localidade,
                    Estado: this.endereco,
                    Numero: this.numero
                }
            })

                .then(() => {
                    console.log('Informações adicionadas com sucesso!!!')
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }

}
</script>

<style>
@import "@/assets/scss/index.scss";
</style>
