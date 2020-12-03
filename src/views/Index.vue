<template>
    <div class="box">
        <Navbar/>
        <Slider/>
        <MenuProduct/>
        <Product/>
        <Event/>
        <Info/>
        <Footer/>
    </div>
</template>

<script scoped>
import Navbar from './partial/head-footer/Navbar'
import Slider from './partial/index/Slider'
import MenuProduct from './partial/index/MenuProduct'
import Product from './partial/index/Product'
import Event from './partial/index/Event'
import Info from './partial/index/Info'
import Footer from './partial/head-footer/Footer'
export default {
    name: 'box',
    components: {
        Navbar: Navbar,
        Slider: Slider,
        MenuProduct: MenuProduct,
        Product: Product,
        Event: Event,
        Info: Info,
        Footer: Footer,
    }
}
</script>