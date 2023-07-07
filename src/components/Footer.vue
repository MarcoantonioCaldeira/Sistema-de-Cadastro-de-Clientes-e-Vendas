<template>

    <div id="footer">
         <h4>© TI-Gestor Software LTDA 2023</h4>
    </div>
    
</template>
<script>
export default{
    name: 'Footer'
}
</script>
<style>
@import "@/assets/scss/index.scss"; 

*{
    margin: 0; 
    padding: 0;
}

h4{
    position: absolute; 
    color: white;
    left: 40%;
    margin-top:8% !important; 
    margin: auto;
    font-family: 'Poppins';
}

#footer{
    width: 100%;
    height: 200px;
    background-color: #003A4C;
}


@media only screen and (max-width: 45.5em) {

    h4{
        /* color: red; */
        position: absolute;
        margin-top: 10% !important;
        font-size: 16px;
        text-align: center;
        margin-left: -20%;
        /* left: 30%; */
    }

}


</style>