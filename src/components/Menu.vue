<template > 
<header :class="{ 'scrolled-nav': scrolledNav }" v-if="!isComponenteAAtivo">
  <nav >
    <div class="branding">
      <img  class="logo"  src="@/assets/images/logo.png">
    </div>
    <ul v-show="!mobile" class="navigation">
      <li><router-link  class="link"  to="/" @click="barra_prograsso()">Inicio</router-link></li>
      <li><router-link  class="link"  to="Selecao_Tipo_Pessoa" @click="barra_prograsso()">Cadastro de Clientes</router-link></li>
      <li><router-link  class="link"  to="Cadastro_de_Vendas" @click="barra_prograsso()">Cadastro de Vendas</router-link></li>
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
          <li><router-link class="link" to="Cadastro_de_Vendas" onclick="barra_prograsso()">Cadastro de Vendas</router-link></li>
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
import '@fortawesome/fontawesome-free/css/all.css'

export default{
  name: 'Menu',
  props:{
    isComponenteAAtivo: Boolean,
  },
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

<style lang="scss" src="./estilo_menu.scss"> 

</style>