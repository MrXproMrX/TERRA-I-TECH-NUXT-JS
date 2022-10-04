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
                          <li><nuxt-link to="/about-company" class="aboutComp__menu__link">{{page.title}}</nuxt-link></li>
                      </ul>
                  </section>
                </div>
                </div>
             </div>
         <!-- about ent-->

         <!-- About company start -->

         <div class="AboutCompany">
             <section class="container">
                 <div class="AboutCompany__top">
                     <h2 class="AboutCompany__title__top">{{page.title}}</h2>

                     <div class="AboutCompany__top__img" :style="`background-image:url(${baseURL}${page.image})`">
                          <img src="@/assets/foto/about_logo.svg" alt="logo">
                     </div>

                     <div class="AboutCompany__text">
                         <p v-html="page.content"></p>
                     </div>
                 </div>
                 
             </section>
         </div>

         <!-- About company end -->

         <!-- How we are working start -->

         <div class="working">
             <section class="container">
                 <h2 class="working__title__h2">Как мы работаем</h2>
                    <HowWorking :workings="workings"></HowWorking>
             </section>
         </div>

         <!-- How we are working end -->

         <!-- AboutSlic start -->

        <div class="AboutSlic">
            <section class="container">
                <AboutSlic :AboutSlics="AboutSlics"></AboutSlic>
            </section>
        </div>

         <!-- AboutSlic end -->
    </section>
</template>

<style scoped>
.aboutComp__img{
    background-image: url(@/assets/foto/aboutCompne.png);
}
</style>

<script>

import HowWorking from '@/components/About/HowWorking.vue';
import HowWorkingAbout from '@/data/HowWorkingAboutJs';
import AboutSlic from '@/components/About/AboutSlic.vue';
import AboutSlicAbout from '@/data/AboutSlicAboutJs';
import { baseURL } from '@/constants/config';

export default {
    components:{
        HowWorking,
        AboutSlic,
    },
    data(){
        return{
            workings:HowWorkingAbout,
            AboutSlics:AboutSlicAbout,
            baseURL
        }
    },


    async fetch({ store }) {
        await store.dispatch('homepage/fetchHomepage')
        
        if(store.getters['options/options'].length === 0){
            await store.dispatch('options/fetchOptions')
        }
    },

    computed:{
        page() {
            return this.$store.getters['homepage/page']
        },
    }
}
</script>