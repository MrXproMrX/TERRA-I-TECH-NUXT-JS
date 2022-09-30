<template>
    <section>
        <div class="products__Catalog">

            <div class="products__Catalog__menu">
                <ul class="products__Catalog__mrx">
                    <li v-for="(product,index) in products" :key="index" v-on:click="product.mrx=!product.mrx">

                        <nuxt-link :to="product.link" class="products__Catalog__menu__link"  v-bind:class="{ productsActive: product.mrx}"> 
                            {{ product.title }}   <span><i class="fas fa-angle-down"></i></span>
                        </nuxt-link>

                        <div v-if="product.children" class="dropdown">
			                <ul  v-if="product.mrx" class="products__dropdown">
					              <li v-for="child in product.children" :key="child.category">
						                <nuxt-link  class="products__dropdown_link"  :to="'/products/' + child.link" >{{ child.title }}</nuxt-link>
					             </li>
				            </ul>
			            </div>
                        
                    </li>
                </ul>
            </div>

        </div>
    </section>
</template>

<script>
export default {
    props: ['products'],

    // methods:{
    //     openProducts(child){
    //         this.$router.push('/products/' + child.category)
    //     }
    // }
}
</script>