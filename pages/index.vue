<template>
  <section class="index">
    
  <!-- slaeder start -->

  <div class="slaeder">
        <template v-if="sliders.length">
          <VueSlickCarousel v-bind="slic">
            <div v-for="slider in sliders" :key="slider.id" class="slaeder__item">
              <img :src="baseURL + slider.image" :alt="slider.title" />

              <section class="container">
                <div class="slaeder__item__text">
                  <h1 class="slaeder__title__h1">{{ slider.title }}</h1>
                  <h3 class="slaeder__title__h3">{{ slider.description }}</h3>
                  <div><nuxt-link class="slaeder__link" to="/about-company">Подробнее</nuxt-link></div>
                </div>
              </section>
            </div>
      </VueSlickCarousel>
        </template>
  </div>

  <!-- slaeder end -->


  <!-- Services start -->

  <div class="Services">
      <section class="container">
        <div class="Services__top">
          <h2 class="Services__title__h2">Услуги</h2>
        </div>
      </section>
      <ServicesIndex v-if="services.length" :services="services"></ServicesIndex>
  </div>
      
  <!-- Services end -->


  <!-- Catalog start -->
 
  <div class="Catalog">
         <div class="Catalog__pro">
             <div class="Catalog__mrx">
                 <h2 class="Catalog__title__h2">Каталог</h2>
                 <CatalogIndex :catalog="catalog"></CatalogIndex>
             </div>

             <h1 class="Catalog__mrx__title__h1">Продукция</h1>
         </div>
  </div>

  <!-- Catalog end -->


  <!-- About Us  start-->

  <div class="About">
      <div class="About__pro">
        <section class="container">
          <div class="About__top">
            
            <div class="About__item">
              <h2 class="About__title__h2">{{page.title}}</h2>
                <div class="About__text" v-html="page.content"></div>    
                <nuxt-link to="/about-company" class="About__link">Подробнее</nuxt-link>
            </div>
                      
                <div class="About__item About__item__mrx">
                  <div class="About__mrx">
                    <h3 class="About__title__h3">О нас</h3>
                  </div>
                </div>
                  
              </div>
            </section>
        </div>

        <div class="About__pro">
          <section class="container">
              <div class="About__top__mrx">

                <div class="About__pro__item">
                     <div class="About__mrx__pro">
                       <h3 class="About__pro__title__h3">работа</h3>
                      </div>
                </div>

                <div class="About__pro__mrx">
                       <h2 class="About__title__h2">Как мы работаем</h2>

                       <ul class="About__pro__menu">
                         <li><h3 class="About__pro__menu__title">Первичная консультация</h3></li>
                         <li><h3 class="About__pro__menu__title">Выезд специалиста на объект</h3></li>
                           <li><h3 class="About__pro__menu__title">Заключение договора</h3></li>
                           <li><h3 class="About__pro__menu__title">Доставка и монтаж оборудования</h3></li>
                           <li><h3 class="About__pro__menu__title">Профилактическое обслуживание (опционально)</h3></li>
                       </ul>
                </div>

              </div>
          </section>
        </div>
  </div>

  <!-- About Us  end-->

  <!-- We are trusted start -->

  <div class="WeAre">
       <section class="container">
         <div class="WeAre__pro">
           <h2 class="Services__title__h2">Нам доверяют</h2>

           <WeAreSlaeder v-if="clients.length" :clients="clients"></WeAreSlaeder>
         </div>
       </section>
    </div>

  <!-- We are trusted end -->


  <!-- Blog start -->

  <div class="Blog">
      <div class="Blog__pro">
        <div class="Blog__news">
          <h2 class="Blog__news__title">Новости</h2>
        </div>
        
        <h2 class="Blog__title__h2">Блог</h2>
        
        <BlogNews :blog="blog"></BlogNews>
        
        <div class="Blog__button">
          <nuxt-link to="/news" class="Blog__button__link">Все новости</nuxt-link>
        </div>
      </div>
  </div>

  <!-- Blog end -->

  <!-- Write to us start -->
    
  <div class="WriteTo">
    <section class="container">
      <div class="WriteTo__top">
        
        <div class="WriteTo__item">
          <div class="WriteTo__img"><img src="@/assets/foto/nono.png" alt=""></div>
        </div>
        
        <div class="WriteTo__item">
          <h2 class="WriteTo__title__h2">Напишите нам</h2>
          <form action="#!">
            <input class="WriteTo__item__input" type="text" placeholder="Имя">
            <input class="WriteTo__item__input" type="text" placeholder="Email">
            <textarea class="WriteTo__textarea" placeholder="Комментарий"></textarea>
            <button class="WriteTo__item__button" type="button">Отправить</button>
          </form>
        </div>
        
      </div>
    </section>
  </div>

  <!-- Write to us ent -->
  </section>
</template>


<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// ----------------------------------------------------
import ServicesIndex from '@/components/index/ServicesIndex.vue';
// ----------------------------------------------------
import CatalogIndex from '@/components/index/CatalogIndex.vue';
// ----------------------------------------------------
import WeAreSlaeder from '@/components/index/WeAreSlaeder.vue';
// ----------------------------------------------------
import BlogNews from '@/components/index/BlogNews.vue';
// ----------------------------------------------------
import { baseURL } from '@/constants/config';

export default {
  name: 'IndexPage',
  components:{
    VueSlickCarousel,
    ServicesIndex,
    CatalogIndex,
    WeAreSlaeder,
    BlogNews,
  },

  data(){
    return{
      baseURL,
      slic:{
        arrows:true,
        speed:1500,
        fade:true,
        dose:false,
        infinite:true,
        autoplay:true,
      },
    }
  },

  async fetch({ store }) {
    await store.dispatch('homepage/fetchHomepage')

    if(store.getters['options/options'].length === 0){
        await store.dispatch('options/fetchOptions')
    }

  },
  
  computed:{
    
    sliders() {
      return this.$store.getters['homepage/sliders']
    },

    services() {
      return this.$store.getters['homepage/services']
    },

    page() {
      return this.$store.getters['homepage/page']
    },

    clients() {
      return this.$store.getters['homepage/clients']
    },

    blog() {
      return this.$store.getters['homepage/blog']
    },

    catalog() {
      return this.$store.getters['homepage/catalog']
    },

    options(){
      return this.$store.getters['options/options']
    },

  }
}
</script>