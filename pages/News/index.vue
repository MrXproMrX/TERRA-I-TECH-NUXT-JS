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
                          <li><nuxt-link to="/news" class="aboutComp__menu__link">Новости</nuxt-link></li>
                      </ul>
                  </section>
                </div>
                </div>
             </div>
        <!-- about ent-->


        <!-- news page start -->

         <div class="NewsPage">
             <section class="container">
                <div class="NewsPage__top">
                    <BlogNews :articles="articles.data.data"></BlogNews>
                </div>

                <!-- <NewPagination v-model="page" :count="countProducts" :per-page="productsPerPage"></NewPagination> -->
             </section>
         </div>

         <!-- news page end -->

    </section>
</template>

<style scoped>
.aboutComp__img{
    background-image: url(@/assets/foto/aboutCompne.png);
}
</style>

<script>
import BlogNews from '@/pages/news/BlogNews.vue';
import NewPagination from '@/pages/news/NewPagination.vue';
import { baseURL } from '@/constants/config';
export default {
    components:{
        BlogNews,
        NewPagination,
    },


    data(){
        return{
            // page:1,
            // productsPerPage:1,
            baseURL,
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


    computed:{

        // BlogNewsT(){
        //     const offset = (this.page - 1) * this.productsPerPage;
        //     return this.articles.data.data.slice(offset, offset + this.productsPerPage);
        // },

        // countProducts(){
        //    return this.articles.data.data.length;
        // },
    
        articles(){
            return this.$store.getters['articles/articles']
        },
        
    }
}
</script> 