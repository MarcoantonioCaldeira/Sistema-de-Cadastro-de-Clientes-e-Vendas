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


@media only screen and (max-width: 30.999em) {

    h4{
        position: absolute;
        margin-top: 20%;
        font-size: 13px;
        color: white;
        margin-left: -80px;
    }

}

@media only screen and (min-width: 31em) {

    h4{
        position: absolute;
        margin-top: 10%;
        font-size: 16px;
        margin-left: -35px;
    }

}


/* @media (min-width: 601px) and (max-width: 850px) {

    h4{
        position: absolute;
        margin-top: 20%;
        font-size: 20px;
        color: white;
        margin-left: 22%;   
    }

} */
</style>