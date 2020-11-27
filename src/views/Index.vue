<template>
    <div class="box">
        <Navbar/>
        <Slider/>
        <MenuProduct/>
        <Product/>
        <Event/>
        <Info/>
    </div>
</template>

<script scoped>
import Navbar from './partial/head-footer/Navbar'
import Slider from './partial/index/Slider'
import MenuProduct from './partial/index/MenuProduct'
import Product from './partial/index/Product'
import Event from './partial/index/Event'
import Info from './partial/index/Info'
export default {
    name: 'Index',
    components: {
        Navbar: Navbar,
        Slider: Slider,
        MenuProduct: MenuProduct,
        Product: Product,
        Event: Event,
        Info: Info,
    }
}
</script>