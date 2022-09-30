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
                          <li><nuxt-link to="/news" class="aboutComp__menu__link">{{NewsBlog.title}}</nuxt-link></li>
                      </ul>
                  </section>
                </div>
                </div>
             </div>
          <!-- about ent-->

          <!-- News Inside start -->

          <div class="NewsInside">
             <section class="container">
               <div class="NewsInside__top">
                  <h2 class="NewsInside__title__h2">{{NewsBlog.title}}</h2>

                  <div class="NewsInside__pro">

                    <div class="NewsInside__img">
                        <img :src="NewsBlog.img" alt="">
                        <h4 class="NewsInside__title__h4">{{NewsBlog.data}}</h4>
                    </div>

                    <div class="NewsInside__text">
                      <p>
                        {{NewsBlog.text}}
                      </p>
                    </div>

                  </div>

               </div>
             </section>
          </div>

          <!-- News Inside end -->
    </section>
</template>


<style scoped>
.aboutComp__img{
    background-image: url(@/assets/foto/aboutCompne.png);
}
</style>

<script>
import BlogNewsJs from '~/data/BlogNewsJs';
export default {
  // validate({params}){
  //   return /^\d+$/.test(params.id)
  // },

  computed:{
    NewsBlog(){
      return BlogNewsJs.find(BlogNews => BlogNews.id === + this.$route.params.id);
    },
  }
}
</script>
