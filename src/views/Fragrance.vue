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
    import Header from './partial/fragrance/Header'
    import Products from './partial/fragrance/Products'
    import Footer from './partial/head-footer/Footer'
    export default {
        name: 'Index',
        components: {
            Navbar: Navbar,
            Header: Header,
            Products: Products,
            Footer: Footer,
        }
    }
</script>