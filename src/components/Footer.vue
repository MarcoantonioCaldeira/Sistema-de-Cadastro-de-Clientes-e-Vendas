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
    margin-top: 8%;
    color: white;
    margin-left: 43%;
    font-family: 'Poppins';
}

#footer{
    width: 100%;
    height: 200px;
    background-color: #003A4C;
}


@media screen and (min-width: 300px) and (max-width: 450px) {

    h4{
        position: absolute;
        margin-top: 44%;
        font-size: 13px;
        color: white;
        margin-left: 16%;
    }

}

@media (min-width: 480px) and (max-width: 600px) {

    h4{
        position: absolute;
        margin-top: 30%;
        font-size: 16px;
        color: white;
        margin-left: 24%;
    }

}


@media (min-width: 601px) and (max-width: 850px) {

    h4{
        position: absolute;
        margin-top: 20%;
        font-size: 20px;
        color: white;
        margin-left: 22%;   
    }

}
</style>