<template>
    <div class="about">
        <Navbar/>
        <Header/>
        <Info/>
        <Footer/>
    </div>
</template>

<script scoped>
  import Navbar from './partial/head-footer/Navbar'
  import Header from './partial/about/Header'
  import Info from './partial/about/Info'
  import Footer from './partial/head-footer/Footer'
  export default {
    name: 'About',
    components: {
      Navbar: Navbar,
      Header: Header,
      Info: Info,
      Footer: Footer,
    }
  }
</script>
