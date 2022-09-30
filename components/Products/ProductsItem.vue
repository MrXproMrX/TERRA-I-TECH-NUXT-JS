<template>
    <section>
        <div class="products__max">
            <div class="products__item" v-for="productsItem in productsItems" :key="productsItem.id">
                 <div class="products__item__img">
                     <img :src="productsItem.img" :alt="productsItem.title">
                 </div>

                 <h3 class="products__item__title__h3">{{productsItem.title}}</h3>
                 <h4 class="products__item__title__h4">{{productsItem.price}}</h4>

                 <div class="products__item__button">
                     <nuxt-link class="products__item__button__link" :to="'/products/' + productsItem.id">{{productsItem.link_text}}</nuxt-link>
                 </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props:["productsItems"],

    // methods:{
    //     openItem(productsItem){
    //         this.$router.push('/products/' + productsItem.id)
    //     }
    // }
}
</script>