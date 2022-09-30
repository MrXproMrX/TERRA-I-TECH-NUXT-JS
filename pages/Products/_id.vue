<template>
    <section>
        <!-- about start -->
             <div class="aboutComp">
                <div class="aboutComp__img">
                <div class="aboutComp__top">
                  <section class="container">
                      <ul class="aboutComp__menu">
                          <li><nuxt-link to="/" class="aboutComp__menu__link">Главная</nuxt-link></li>
                          <li><span></span></li>
                          <li><nuxt-link to="/products" class="aboutComp__menu__link">{{SwitchTpLinks.title}}</nuxt-link></li>
                      </ul>
                  </section>
                </div>
                </div>
             </div>
          <!-- about ent-->


          <!-- SwitchTpLink start -->

          <div class="SwitchTpLink">
              <section class="container">
                  <div class="SwitchTpLink__top clearfix">

                      <section class="SwitchTpLink__slaeder">
                            <VueSlickCarousel class="SwitchTpLink__mrx1" :fade="true"  ref="c1" :asNavFor="c2" :focusOnSelect="true">
                                <div class="SwitchTpLink__item" v-for="(SwitchTpLink,index) in SwitchTpLinks.image" :key="index">
                                    <img :src="SwitchTpLink.img" :alt="index">
                                </div>
                            </VueSlickCarousel>
                        
                            <VueSlickCarousel class="SwitchTpLink__mrx2"  ref="c2" :asNavFor="c1" :focusOnSelect="true" v-bind="settings">
                                <div class="SwitchTpLink__item2" v-for="(SwitchTpLink,index) in SwitchTpLinks.image" :key="index">
                                    <img :src="SwitchTpLink.img" :alt="SwitchTpLink.img">
                                </div>
                            </VueSlickCarousel>
                        </section>
        
                        <div class="SwitchTpLink__pro">
                            <h2 class="NewsInside__title__h2">{{SwitchTpLinks.title}}</h2>

                            <div class="SwitchTpLink__text">
                                <p>
                                    {{SwitchTpLinks.text}}
                                </p>
                            </div>

                            <h4 class="products__item__title__h4">{{SwitchTpLinks.price}}</h4>

                            <nuxt-link class="SwitchTpLink__item__link" to="/contacts">Связаться с нами</nuxt-link>
                        </div>
                   </div>
               </section>
           </div>

          <!-- SwitchTpLink end -->
    </section>
</template>

<style scoped>
.aboutComp__img{
    background-image: url(@/assets/foto/aboutCompne.png);
}
</style>

<script>

import ProductsItemMrxJs from '@/data/ProductsItemMrxJs';
// ------------------------------------------------------
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
export default {
    components:{
        VueSlickCarousel,
    },

    data(){
        return{
            c1: undefined,
            c2: undefined,
            settings: {
                    arrows: true,
                    dots: false,
                    infinite: true,
                    speed: 300,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                     responsive: [
                   {
                  breakpoint: 1600,
                  settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false
                  }
                },
                 {
                  breakpoint: 940,
                  settings: {
                  slidesToShow: 3,
                 slidesToScroll: 1
                  }
                 },

                 {
                  breakpoint: 500,
                  settings: {
                  slidesToShow: 2,
                 slidesToScroll: 1
                  }
                 },

                 {
                  breakpoint: 280,
                  settings: {
                  slidesToShow: 1,
                 slidesToScroll: 1
                  }
                 },
               ]
               },
        }
    },
    mounted() {
        this.c1 = this.$refs.c1;
        this.c2 = this.$refs.c2;
    },

    // validate({params}){
  //   return /^\d+$/.test(params.id)
  // },

    computed:{
        SwitchTpLinks(){
            return ProductsItemMrxJs.find(ProductsItem => ProductsItem.id === + this.$route.params.id);
        },
    }
}
</script>