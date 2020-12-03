<template>
    <div class="contact">
        <Navbar/>
        <Header/>
        <Info/>
        <Footer/>
    </div>
</template>

<script scoped>
  import Navbar from './partial/head-footer/Navbar'
  import Header from './partial/contact/Header'
  import Info from './partial/contact/Info'
  import Footer from './partial/head-footer/Footer'
  export default {
    name: 'Contact',
    components: {
      Navbar: Navbar,
      Header: Header,
      Info: Info,
      Footer: Footer,
    }
  }
</script>
