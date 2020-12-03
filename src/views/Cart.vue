<template>
    <div class="cart">
        <Navbar/>
        <Header/>
        <ListCart/>
        <Footer/>
    </div>
</template>

<script scoped>
  import Navbar from './partial/head-footer/Navbar'
  import Header from './partial/cart/Header'
  import ListCart from './partial/cart/ListCart'
  import Footer from './partial/head-footer/Footer'
  export default {
    name: 'cart',
    components: {
      Navbar: Navbar,
      Header: Header,
      ListCart: ListCart,
      Footer: Footer,
    }
  }
</script>
