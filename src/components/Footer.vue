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
    margin-top:100px; 
    /* margin: 0; */
    font-family: 'Poppins';
}

#footer{
    width: 100%;
    height: 200px;
    /* align-items: center;
    display: flex; */
    background-color: #003A4C;
}


/* @media only screen and (max-width: 30em) {

    h4{
        position: absolute;
        margin-top: 20%;
        font-size: 13px;
        color: white;
        margin-left: -8%;
    } 

} */

@media only screen and (max-width: 45.5em) {

    h4{
        /* color: red; */
        position: absolute;
        margin-top: 10%;
        font-size: 16px;
        left: 30%;
    }

}


</style>