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
                      <BlogNews id="demo" :BlogNewsT="BlogNewsT"></BlogNews>
                 </div>

                  <NewPagination v-model="page" :count="countProducts" :per-page="productsPerPage"></NewPagination>
                  
             </section>
         </div>


    </section>
</template>

<style scoped>
.aboutComp__img{
    background-image: url(@/assets/foto/aboutCompne.png);
}
</style>

<script>
import BlogNews from '@/components/index/BlogNews.vue';
import BlogNewsT from '@/data/BlogNewsJs';
import NewPagination from '@/pages/News/NewPagination.vue'
// import Paginate from 'vuejs-paginate';


export default {
    components:{
        BlogNews,
        NewPagination,
        // Paginate,
    },

    data(){
        return{
            page:1,
            productsPerPage:6,
        }
    },

    computed:{
       BlogNewsT(){
         const offset = (this.page - 1) * this.productsPerPage;
         return BlogNewsT.slice(offset, offset + this.productsPerPage);
      },
       countProducts(){
        return BlogNewsT.length;
      }
    }

}

</script> 