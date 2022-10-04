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
                          <li><nuxt-link to="/" class="aboutComp__menu__link">{{ServiceItem.title}}</nuxt-link></li>
                      </ul>
                  </section>
                </div>
                </div>
             </div>
        <!-- about ent-->

        <!-- SCS networks start-->

         <div class="SCSnetworks">
             <section class="container">
                 <div class="SCSnetworks__top">
                     <h2 class="NewsInside__title__h2">{{ServiceItem.title}}</h2>

                     <div class="SCSnetworks__pro">

                        <div class="SCSnetworks__img">
                            <img :src="baseURL + ServiceItem.icon" alt="mrx">

                            <div class="SCSnetworks__img__text">
                                <img :src="baseURL + ServiceItem.image" alt="mrx">
                                <h4 class="SCSnetworks__title__h4">{{ServiceItem.title}}</h4>
                            </div>
                        </div>

                         <div class="SCSnetworks__text">
                             <p v-html="ServiceItem.content"></p>
                         </div>

                         <div class="SCSnetworks__button">
                             <nuxt-link to="/contacts" class="SCSnetworks__button__link">Связаться с нами</nuxt-link>
                         </div>

                     </div>
                 </div>
             </section>
         </div>

        <!-- SCS networks end-->
    </section>
</template>

<style scoped>
.aboutComp__img{
    background-image: url(@/assets/foto/aboutCompne.png);
}
</style>

<script>
import { baseURL } from '@/constants/config';
export default {

    data(){
        return{
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

        ServiceItem(){
            return this.services.find(Service => Service.id === + this.$route.params.id);
        },

        options(){
            return this.$store.getters['options/options']
        },

        services() {
            return this.$store.getters['homepage/services']
        },

    },
}
</script>