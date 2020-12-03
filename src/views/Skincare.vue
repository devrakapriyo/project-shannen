<template>
    <div class="box">
        <Navbar/>
        <Header/>
        <Products/>
        <Footer/>
    </div>
</template>

<script scoped>
    import Navbar from './partial/head-footer/Navbar'
    import Header from './partial/skincare/Header'
    import Products from './partial/skincare/Products'
    import Footer from './partial/head-footer/Footer'
    export default {
        name: 'box',
        components: {
            Navbar: Navbar,
            Header: Header,
            Products: Products,
            Footer: Footer,
        }
    }
</script>