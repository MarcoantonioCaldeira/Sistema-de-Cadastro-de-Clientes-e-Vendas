<template>

    <div id="conteudo">

        <form method="POST" @click="Cadastrar">
            <div id="endereco_principal">
                <h2 class="h2_endereco">Endereço principal</h2>
                <label class="lb_cep">Seu CEP:</label> <input type="text" class="input_cep" v-model="cep">
                <input type="text" placeholder="Endereço" class="input_endereco" v-model="endereco">
                <input type="text" placeholder="Numero" class="input_endereco" v-model="end_numero">
                <input type="text" placeholder="Complemento(opcional)" class="input_endereco" v-model="complemento">
                <input type="text" placeholder="Bairro" class="input_endereco" v-model="bairro">
                <input type="text" placeholder="Cidade" class="input_endereco" v-model="cidade">
                <input type="text" placeholder="Estado" class="input_endereco" v-model="estado">
            </div>
    
            <!--<div id="endereco_secundario">
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
            </div>--->
    
            <router-link to="/Cadastro_concluido"><button class="btn_concluir">Comcluir cadastro</button></router-link>
        </form>
    </div>
</template>
<script>
import api from './api'
import axios from 'axios'
import { assertExpressionStatement } from '@babel/types';


export default {
    name: 'Informacoes_Endereco',
    data() {
        return {
            cep: this.cep,
            endereco: this.endereco,
            end_numero: this.end_numero,
            complemento: this.complemento,
            bairro: this.bairro,
            cidade: this.cidade,
            cod_cidade: this.cod_cidade,
            cod_pais: this.cod_pais,
            estado: this.estado,
            tipo_endereco: this.tipo_endereco
        }
    },

    methods: {
        Cadastro() {
            api.post("clientes",{
                    cliente_enderecos:[{
                        cep: this.cep,
                        endereco: this.endereco,
                        end_numero: this.end_numero,
                        complemento: this.complemento,
                        bairro: this.bairro,
                        cidade: this.cidade,
                        cod_cidade: this.cod_cidade,
                        cod_pais: this.cod_pais,
                        estado: this.estado,
                        tipo_endereco: this.tipo_endereco
                    }]
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
