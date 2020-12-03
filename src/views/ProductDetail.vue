<template>
    <div class="box">
        <Navbar/>
        <Breadcrumb/>
        <Product/>
        <Footer/>
    </div>
</template>

<script scoped>
    import Navbar from './partial/head-footer/Navbar'
    import Breadcrumb from './partial/product-detail/Breadcrumb'
    import Product from './partial/product-detail/Product'
    import Footer from './partial/head-footer/Footer'
    export default {
        name: 'box',
        components: {
            Navbar: Navbar,
            Breadcrumb: Breadcrumb,
            Product: Product,
            Footer: Footer,
        }
    }
</script>