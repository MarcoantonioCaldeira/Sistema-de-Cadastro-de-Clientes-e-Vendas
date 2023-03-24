<template> 
<header :class="{ 'scrolled-nav': scrolledNav }">
  <nav>
    <img v-img:src   class="logo"  src="@/assets/images/logo.png">
    <div class="branding">
      
    </div>
    <ul v-show="!mobile" class="navigation">
      <a><router-link to="/" style="text-decoration: none">Inicio</router-link></a>
      <a><router-link to="Selecao_Tipo_Pessoa">Cadastro de Clientes</router-link></a>
      <a><router-link to="Cadastro_De_Vendas">Cadastro de Vendas</router-link></a>
    </ul>
    <div class="icon">
      <i @click="toggleMobileNav" v-show="mobile" class="far fa-bars" :class="{ 'icon-active': mobileNav}"></i>
    </div>
    <transition name="mobile-nav">
      <ul v-show="mobileNav" class="dropdown-nav">
        <li><router-link to="/" style="text-decoration: none">Inicio</router-link></li>
        <li><router-link to="Selecao_Tipo_Pessoa">Cadastro de Clientes</router-link></li>
        <li><router-link to="Cadastro_De_Vendas">Cadastro de Vendas</router-link></li>
      </ul>
    </transition>
  </nav>
</header>
</template>

<script> 
import VueImg from 'v-img';

export default{
  name: 'Menu',
  data(){
    return{
      scrollPosition: null,
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
  },
};

</script>

<style lang="scss" scoped> 
* {
  margin: 0;
  padding: 0;
}

header {
  background-color: #003A4C;
  height: 150px;
  z-index: 99;
  width: 100%;
  margin-top: -5%;
  position: fixed;
  transition: 0.5s ease all;
  color: #fff;


  .logo{
    padding: 20px;
  }

nav {
  //background-color: red;
  text-decoration: none;
  position: relative;
  display: flex;
  flex-direction: row;
  padding: 29.5px 0;
  transition: 0.5s ease all;
  width: 600px;
  margin-left: 200px;

  @media (min-width: 1140px) {
      max-width: 1140px;
  }

      ul,.link {
          font-weight: 500;
          color: #fff;
          list-style: none;
          text-decoration: none;
      }

      ul a{
        text-decoration: none;
        margin-left: 10px;
        color:white;
        font-family: 'Poppins';
        text-transform: uppercase;
        padding: 0.5em;
        font-weight: 800;
      }

      .link {
          font-size: 14px;
          transform: 0.5s ease all;
          padding-bottom: 4px;
          border-bottom: 1px solid transparent;

          &:hover {
              color: blue;
              border-color: blue;
          }
      }

    .branding {
      display: flex;
      align-items: center;

      img {
        width: 50px;
        transition: 0.5s ease all;
      }
    }

    .navigation{
      display: flex;
      align-items: center;
      flex: 1;
      justify-content: flex-end;
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
      background-color: #fff;
      top: 0;
      left: 0;

      li{
        text-decoration: none !important;
        margin-left: 0;
        font-family: arial;
        color: white;
        .link{
          color: #000;
        }
      }
    }

    .mobile-nav-enter-active,
     .mobile-nav-leave-active{
      transition: 1s ease all;
    }


    .mobile-nav-enter-from,
    .mobile-nav-leave-to{
      transform: translateX(-250px);
    }

    .mobile-nav-enter-to{
      transform: translateX(0);
    }
  }
}

.scrolled-nav{
  background-color: #003A4C;
  box-shadow: 0 4px 6px -1px;
}

nav{
  padding: 8px 0;

  // .branding{
  //   img{
  //     width: 40px;
  //     box-shadow: 0 4px 6px -1px;
  //   }
  // }
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