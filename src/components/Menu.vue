<template> 
<header :class="{ 'scrolled-nav': scrollPosition }">
  <nav>
    <div>
      
    </div>
    <ul>
      <li><router-link to="">nicio</router-link></li>
      <li><router-link to="">Cadastro de Clientes</router-link></li>
      <li><router-link to="">Cadastro de Vendas</router-link></li>
    </ul>
    <div class="icon">
      <i @click="toggleMobileNav" v-show="mobile" class="far fa-bars" :class="{ 'icon-active': mobileNav}"></i>
    </div>
    <transition name="mobile-nav">
      <ul v-show="mobileNav" class="dropdown-nav">
        <li><router-link to="">Inicio</router-link></li>
        <li><router-link to="">Cadastro de Clientes</router-link></li>
        <li><router-link to="">Cadastro de Vendas</router-link></li>
      </ul>
    </transition>
  </nav>
</header>
</template>

<script> 
export default{
  name: 'Menu'

}
</script>

<style lang="scss" scoped> 

header {
  background-color: red;
  z-index: 99;
  width: 100%;
  position: fixed;
  transition: a.5s ease all;
  color: #fff;

nav {
  display: flex;
  flex-direction: row;
  padding: 12px 0;
  transition: 0.5s ease all;
  width: 90%;
  margin: 0 auto;
  @media (min-width: 1140px) {
      max-width: 1140px;
  }

      ul
      .link {
          font-weight: 500;
          color: #fff;
          list-style: none;
          text-decoration: none;
      }

      li {
          text-transform: uppercase;
          padding: 16px;
          margin-left: 16px;
      }

      .link {
          font-size: 14px;
          transform: .5s ease all;
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
  }
}
</style>