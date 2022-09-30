<template>
  <section class="index">
    <!-- slaeder start -->

    <div class="slaeder">
          <VueSlickCarousel v-bind="slic">
            <div class="slaeder__item">
              <img src="@/assets/foto/slaeder.png" alt="logo" />

              <section class="container">
                <div class="slaeder__item__text">
                  <h1 class="slaeder__title__h1">Серверное оборудование</h1>
                  <h3 class="slaeder__title__h3">Высокого качества</h3>
                  <div><nuxt-link class="slaeder__link" to="/about-company">Подробнее</nuxt-link></div>
            </div>
          </section>
        </div>

        <div class="slaeder__item">
          <img src="@/assets/foto/slaeder1.png" alt="logo" />

          <section class="container">
            <div class="slaeder__item__text">
              <h1 class="slaeder__title__h1">Серверное оборудование</h1>
              <h3 class="slaeder__title__h3">Высокого качества</h3>
              <div><nuxt-link class="slaeder__link" to="/about-company">Подробнее</nuxt-link></div>
            </div>
          </section>
        </div>

        <div class="slaeder__item">
          <img src="@/assets/foto/slaeder2.png" alt="logo" />
          
          <section class="container">
            <div class="slaeder__item__text">
              <h1 class="slaeder__title__h1">Серверное оборудование</h1>
              <h3 class="slaeder__title__h3">Высокого качества</h3>
              <div><nuxt-link class="slaeder__link" to="/about-company">Подробнее</nuxt-link></div>
            </div>
          </section>
        </div>
      </VueSlickCarousel>
    </div>

    <!-- slaeder end -->


    <!-- Services start -->

    <div class="Services">
      <section class="container">
        <div class="Services__top">
          <h2 class="Services__title__h2">Услуги</h2>
        </div>
      </section>
      <ServicesIndex :Services="Services"></ServicesIndex>
    </div>
      
    <!-- Services end -->


    <!-- Catalog start -->
 
    <div class="Catalog">
         <div class="Catalog__pro">
             <div class="Catalog__mrx">
                 <h2 class="Catalog__title__h2">Каталог</h2>
                 <CatalogIndex :Catalogs="Catalogs"></CatalogIndex>
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
              <h2 class="About__title__h2">О нас</h2>
                  <div class="About__text">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                  </div>
                        
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

           <WeAreSlaeder :WeAres="WeAres"></WeAreSlaeder>
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
        
        <BlogNews :BlogNewsT="BlogNewsT"></BlogNews>
        
        <div class="Blog__button">
          <nuxt-link to="/news" class="Blog__button__link">Все новости</nuxt-link>
        </div>
      </div>
    </div>

  <!-- Blog end -->
    
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
import ServicesindexJs from '@/data/ServicesindexJs';
// ----------------------------------------------------
import CatalogIndex from '@/components/index/CatalogIndex.vue';
import ProductsItemMrxJs from '@/data/ProductsItemMrxJs';
// ----------------------------------------------------
import WeAreSlaeder from '@/components/index/WeAreSlaeder.vue';
import WeAresIndex from '@/data/WeAresIndexJs';
// ----------------------------------------------------
import BlogNews from '@/components/index/BlogNews.vue';
import BlogNewsT from '@/data/BlogNewsJs';
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
      slic:{
        arrows:true,
        speed:1500,
        fade:true,
        dose:false,
        infinite:true,
        autoplay:true,
      },
      Services:ServicesindexJs,
      WeAres:WeAresIndex,
      page:1,
      productsPerPage:3,
      CatalogsPage:1,
      CatalogsPageMax:6,
    }
  },

  computed:{
    BlogNewsT(){
      const offset = (this.page - 1) * this.productsPerPage;
      return BlogNewsT.slice(offset, offset + this.productsPerPage);
    },

    Catalogs(){
      const offset = (this.CatalogsPage - 1) * this.CatalogsPageMax;
      return ProductsItemMrxJs.slice(offset, offset + this.CatalogsPageMax);
    }
  }
}
</script>
