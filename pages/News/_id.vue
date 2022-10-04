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
                        <img :src="baseURL + NewsBlog.image" alt="">
                        <h4 class="NewsInside__title__h4">{{ formatDate(NewsBlog.updated_at) }}</h4>
                    </div>

                    <div class="NewsInside__text" v-html="NewsBlog.content"></div>

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
import { formatDate } from '@/utils';
import { baseURL } from '@/constants/config';
export default {

  data(){
    return{
      baseURL
    }
  },
  
  async fetch({ store }) {

    if(store.getters['options/options'].length === 0){
        await store.dispatch('options/fetchOptions')
    }

    if(store.getters['articles/articles'].length === 0){
        await store.dispatch('articles/fetch')
    }
  },

  methods:{
    formatDate
  },

  

  computed:{
    NewsBlog(){
      return this.articles.data.data.find(BlogNews => BlogNews.id === + this.$route.params.id);
    },

    articles(){
        return this.$store.getters['articles/articles']
    },
  }
}
</script>
