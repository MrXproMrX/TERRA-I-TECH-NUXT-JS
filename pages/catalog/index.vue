<template>
    <section>
      <!-- about start -->
      <div class="aboutComp">
        <div class="aboutComp__img">
          <div class="aboutComp__top">
            <section class="container">
              <ul class="aboutComp__menu">
                <li>
                  <nuxt-link to="/" class="aboutComp__menu__link"
                    >Главная</nuxt-link>
                </li>
                <li><span></span></li>
                <li>
                  <nuxt-link to="/catalog" class="aboutComp__menu__link">
                    Каталог товаров</nuxt-link
                  >
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
      <!-- about ent-->
  
      <!-- products start -->
  
      <div class="products">
        <section class="container">
          <div class="products__top">
            <aside class="products__aside">

              <h2 class="products__title__h2" @click="productsisActive001=!productsisActive001" :class="{ productsActive002: productsisActive001}">
                  Категории <span><i class="fas fa-angle-down"></i></span>
              </h2>
             
              <ProductsCategoris  class="productis__broo" :class="{ productsActive001: productsisActive001}"  :catalog="catalog"></ProductsCategoris>
              
              <productAdvertising :catalog_in="catalog_in"></productAdvertising>
              
            </aside>

            <div class="products__pro">
              <h2 class="NewsInside__title__h2"></h2>
              <div class="products__pro__text">
                <p></p>
              </div>             
              <ProductsItem :productsItems="productsItems"></ProductsItem>
            </div>

          </div>
        </section>
      </div>

      <!-- products end -->
      {{test}}
    </section>
  </template>
  
  <style scoped>
  .aboutComp__img{
      background-image: url(@/assets/foto/aboutCompne.png);
  }
  </style>
  
  <script>

  import ProductsCategoris from "@/components/Products/ProductsCategoris.vue";
  // ------------------------------------------------------------------------
  import ProductsItem from "@/components/Products/ProductsItem.vue";
  import productsItems from "@/data/ProductsItemMrxJs";
  // ------------------------------------------------------------------------
  import productAdvertising from "@/components/Products/productAdvertising.vue";
  
  export default {
    components: {
      ProductsItem,
      productAdvertising,
      ProductsCategoris
    },
  
    data() {
      return {
        productsisActive001:false,
        productsItems:productsItems,
      }
    },

    async fetch({ store }) {    
      if(store.getters['options/options'].length === 0){
        await store.dispatch('options/fetchOptions')
      }

      if(store.getters['catalog/catalog'].length === 0){
        await store.dispatch('catalog/fetchCatalog')
      }

      if(store.getters['catalog_in/catalog_in'].length === 0){
        await store.dispatch('catalog_in/fetchCatalog_in')
      }
    },

    computed:{

      test(){
         console.log(this.catalog_in.data)
      },

      options(){
        return this.$store.getters['options/options']
      },

      catalog(){
        return this.$store.getters['catalog/catalog']
      },

      catalog_in(){
        return this.$store.getters['catalog_in/catalog_in']
      }
    }
  };
  
  </script>
