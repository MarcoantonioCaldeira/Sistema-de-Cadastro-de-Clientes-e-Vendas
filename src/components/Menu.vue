<template> 
<header :class="{ 'scrolled-nav': scrolledNav }">
  <nav>
    <div class="branding">
      <img v-img:src   class="logo"  src="@/assets/images/logo.png">
    </div>
    <ul v-show="!mobile" class="navigation">
      <li><router-link  class="link"  to="/" @click="barra_prograsso()">Inicio</router-link></li>
      <li><router-link  class="link"  to="Selecao_Tipo_Pessoa" @click="barra_prograsso()">Cadastro de Clientes</router-link></li>
      <li><router-link  class="link"  to="Cadastro_De_Vendas" @click="barra_prograsso()">Cadastro de Vendas</router-link></li>
    </ul>
    <div class="icon">
      <span  v-show="mobile" @click="toggleMobileNav" >
        <i class="fa-solid fa-bars" :class="{ 'icon-active': mobileNav}"></i>
      </span> 
      <!-- <button @click="toggleMobileNav" v-show="mobile">Clique aqui</button> -->
    </div>
    <transition name="mobile-nav">
        <ul v-show="mobileNav" class="dropdown-nav">
          <li style="margin-top: 40px;"><router-link class="link" to="/" onclick="barra_prograsso()">Inicio</router-link></li>
          <li><router-link class="link" to="Selecao_Tipo_Pessoa" onclick="barra_prograsso()">Cadastro de Clientes</router-link></li>
          <li><router-link class="link" to="Cadastro_De_Vendas" onclick="barra_prograsso()">Cadastro de Vendas</router-link></li>
        </ul>
    </transition>
  </nav>
  <div id="area_barra_progresso">
       <div id="barra_progresso"></div>
  </div>
</header>
</template>

<script> 
import VueImg from 'v-img';

export default{
  name: 'Menu',
  data(){
    return{
      scrolledNav: null,
      mobile: null,
      mobileNav: null,
      windowWidth: null,
    };
  },
  created(){
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  mounted(){
    window.addEventListener("scroll", this.updateScroll);
  }, 
  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
  },

  updateScroll(){
    const scrollPosition = window.scrollY;
    if(scrollPosition > 50){
          this.scrolledNav = true;
          return;
    }
    this.scrolledNav = false;
  },

  checkScreen() { 
      this.windowWidth = window.innerWidth;
      if(this.windowWidth <= 750){
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
  },

    barra_prograsso() {
      var elem = document.getElementById("barra_progresso");
      var container = document.getElementById("area_barra_progresso");
      var visibilidade = true;

      var width = 1;
      var id = setInterval(frame, 10);

        function frame() {
          if(visibilidade){

            if(width >=100){        
            container.style.display = 'none';          
            }

            visibilidade = false;

            if (width >= 100) {
                clearInterval(id);
              } else {
                width++; 
                elem.style.width = width + '%'; 
              }
          }else{
            container.style.display = "block";
            visibilidade = true;
        }
      }
    }
  }
};

</script>

<style lang="scss" scoped> 
* {
  margin: 0;
  padding: 0;
}



header {
  background-color: #003A4C;
  height: 90px;
  z-index: 209;
  width: 100%;
  //margin-top: ;
  //position: fixed;
  transition: 0.5s ease all;
  color: #fff;


  #area_barra_progresso{
    margin: 0;
    position: relative;
    //background-color: red;
    width: 100%;
    height: 6px;
  }

  #barra_progresso{
    width:0%; 
    height: 3px; 
    background-color:#057ee0;
  }

  // .logo{
  //   position: absolute;
  //   display: inline-block;
  //   //padding: 20px;
  //   //float:left;
  //   margin-left: -170px;
  //   margin-top: -12px;
  //   padding: 20px;
  // }

nav {
  //background-color: red;
  text-decoration: none;
  position: relative;
  display: flex;
  flex-direction: row;
  padding: 16px 0;
  transition: 0.5s ease all;
  width: 90%;
  margin: 0 auto;
  //margin-left: 230px;

  ul,.link {
    font-weight: 500;
    color: #fff;
    list-style: none;
    text-decoration: none;
  }

  @media (min-width: 1140px) {
      max-width: 1140px;
  }


      ul .link{
        text-decoration: none;
        margin-left: 10px;
        color:white;
        font-family: 'Poppins';
        text-transform: uppercase;
        padding: 0.5em;
        font-weight: 800;
      }


      li{
        text-transform: uppercase;
        padding: 16px;
        font-family: 'Poppins';
        margin-left: 16px;
      }

      @media only screen and (max-width: 54em) {

        ul{
          //text-align:left;
          //background-color:aqua;

          margin-top: -3%;
        }

      }

      .link {
          font-size: 14px;
          transform: 0.5s ease all;
          padding-bottom: 4px;
          border-bottom: 1px solid transparent;

          &:hover {
              // color: blue;
              // border-color: blue;
          }
      }

    .branding {
      display: flex;
      align-items: center;

      img {
        width: 200px;
        margin-top: -10px;
        transition: 0.5s ease all;
      }
    }

    .navigation{
      //background-color: red;
      
      display: flex;
      //align-items: center;
      flex: 1;
      //justify-content: flex-end;
    }


    .icon{
      display: flex;
      position: absolute;
      align-items: center;
      top: 0;
      right: 24px;
      height: 100%;

      i {
        cursor: pointer;
        font-size: 24px;
        transition: 0.8s ease all;
      }
    }

    .icon-active{
      transform: rotate(180deg);
    }

    .dropdown-nav{
      display: flex;
      flex-direction: column;
      position: fixed;
      width: 100%;
      max-width: 250px;
      height: 100%;
      box-shadow: 5px;
      z-index: 200;
      background-color: #002c3a;
      top: 0;
      left: 0;

      li{
        text-decoration: none !important;
        //margin-left: 0;
        font-family: 'Poppins' !important;
        color: red;
        .link{
          color: white;
        }
      }
    }

    .mobile-nav-enter-active,.mobile-nav-leave-active{
      transition: 1s ease all;
      // z-index: 200;
    }


    .mobile-nav-enter-from,.mobile-nav-leave-to{
      transform: translateX(-250px);
    }

    .mobile-nav-enter-to{
      transform: translateX(0);
    }
  }
}

// .scrolled-nav{
//   background-color: #003A4C;
//   box-shadow: 0 4px 6px -1px;
// }

nav{
  padding: 8px 0;

  .branding{
    img{
      //width: 100px;
      //box-shadow: 0 4px 6px -1px;
    }
  }
}

//@media screen and (max-width: 575.98px) {

//  header{
//    position: relative;
//    width: 100% auto;
//    height: 80px;
//    margin: 0;
//  }

//}
</style>