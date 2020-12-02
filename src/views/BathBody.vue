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
    import Header from './partial/bath-body/Header'
    import Products from './partial/bath-body/Products'
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