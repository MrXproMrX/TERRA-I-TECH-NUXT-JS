<template>
    <section>
        <div class="products__Catalog">

            <div class="products__Catalog__menu">
                <ul class="products__Catalog__mrx">
                    <li v-for="product in catalog.data" :key="product.id" @click="handleParentActive(product.id)">
                        
                        <template v-if="product.childs.length">
                            <span class="products__Catalog__menu__link" v-bind:class="{ productsActive: parentActive === product.id}"> 
                                {{ product.title }}   
                                <span><i class="fas fa-angle-down"></i></span>
                            </span>
                            
                            <div v-if="product.childs" class="dropdown">
                                <ul  v-if="parentActive === product.id"  class="products__dropdown">
                                    <li v-for="child in product.childs" :key="child.id">
                                        <nuxt-link  class="products__dropdown_link"  :to="'/catalog/' + child.id" >{{ child.title }}</nuxt-link>
                                    </li>
                                </ul>
                            </div>
                        </template>

                        <nuxt-link v-else class="products__Catalog__menu__link" :to="'/catalog/' + product.id">{{product.title}}</nuxt-link>
                        
                    </li>
                </ul>
            </div>

        </div>
    </section>
</template>

<script>
export default {
    props: ['catalog'],


    data(){
        return{
            parentActive: null
        }
    },


    methods: {
    handleParentActive(id) {
      if (this.parentActive !== id) {
        this.parentActive = id
      } else {
        this.parentActive = null
      }
    }
  }
   
}
</script>