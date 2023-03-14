<template>
    <h2 id="h2-informacoes">Informações do cliente</h2>

    <form>
        
        <input type="text" for="nome"  placeholder="Razão Social" class="input" v-model="nome_apelido"/>
        
        <input type="text" placeholder="nome-fantasia" class="input"  v-model="nome_fantasia"/>
        
        <input type="text" placeholder="Seu email Principal" style="display: block" class="input" v-model="e_mail">
        
        <input type="text" for="email_nfe" placeholder="Seu email nfe" class="input" v-model="e_mail_nfe">
    
        <input type="number" placeholder="Seu telefone" class="input" v-model="telefone">

        <input type="number" placeholder="Celular" class="input" v-model="celular">
        
        <input type="text"  v-model="CMPJ" placeholder="CNPJ" class="input"/>
        
        <br><label class="lb_dt">Data da Fundação:</label><input type="date" style="display: inline" class="data_p_estrangeira" v-model="data_fundacao">
       

        <div id="AreaObservacoes">
            <p class="p_obs">Observações</p>
            <textarea class="text_area_p_estrangeira" v-model="observacoes">
                    
            </textarea>
        </div>

        <input class="btn_proxima_etapa" type="submit" value="CADASTRAR">
    </form>
</template>
<script>
import api from '../api';


export default{
    name: 'Informacoes_Cliente', 
    data(){
        return{
            num:1,
            input: 1
        };
    },
  
    methods: {

    }
}

</script>
<style >

</style>