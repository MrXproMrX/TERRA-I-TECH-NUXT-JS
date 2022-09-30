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
                  <nuxt-link to="/Products" class="aboutComp__menu__link">
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

              <h2 class="products__title__h2" @click="productsisActive001=!productsisActive001" v-bind:class="{ productsActive002: productsisActive001}">
                  Категории <span><i class="fas fa-angle-down"></i></span>
              </h2>
              <ProductsCategoris class="productis__broo"   v-bind:class="{ productsActive001: productsisActive001}" :products="products"></ProductsCategoris>
              <productAdvertising></productAdvertising>
              
            </aside>
  
            <div class="products__pro">
              <h2 class="NewsInside__title__h2">Активное сетевое оборудование</h2>
              <div class="products__pro__text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                  in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur.
                </p>
              </div>
              <ProductsItem :productsItems="productsItems"></ProductsItem>
  
               <div class="products__mrx">
                   <NewPagination v-model="page" :count="countProducts" :per-page="productsPerPage"></NewPagination>
               </div>
            </div>
          </div>
        </section>
      </div>
  
      <!-- products end -->
    </section>
  </template>
  
  <style scoped>
  .aboutComp__img{
      background-image: url(@/assets/foto/aboutCompne.png);
  }
  </style>
  
  <script>
  import ProductsCategoris from "@/components/Products/ProductsCategoris.vue";
  import ProductCategoria from "@/data/ProductCategoriaJs";
  // ------------------------------------------------------------------------
  import ProductsItem from "@/components/Products/ProductsItem.vue";
  import productsItems from "@/data/ProductsItemMrxJs";
  // ------------------------------------------------------------------------
  import NewPagination from '@/pages/News/NewPagination.vue';
  import productAdvertising from "@/components/Products/productAdvertising.vue";
  
  export default {
    components: {
      ProductsCategoris,
      ProductsItem,
      NewPagination,
      productAdvertising,
    },
  
    data() {
      return {
        products: ProductCategoria,
        productsisActive001:false,
        page:1,
        productsPerPage:18,
        }
    },

    computed:{
      productsItems(){
         const offset = (this.page - 1) * this.productsPerPage;
         return productsItems.slice(offset, offset + this.productsPerPage);
      },
       countProducts(){
        return productsItems.length;
      }
    }
  };
  </script>
  