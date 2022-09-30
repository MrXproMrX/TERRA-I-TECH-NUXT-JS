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
                          <li><nuxt-link to="/" class="aboutComp__menu__link">Сети передачи данных СКС</nuxt-link></li>
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
                            <img :src="ServiceItem.image" alt="mrx">

                            <div class="SCSnetworks__img__text">
                                <img :src="ServiceItem.img" alt="mrx">
                                <h4 class="SCSnetworks__title__h4">{{ServiceItem.title}}</h4>
                            </div>
                        </div>

                         <div class="SCSnetworks__text">
                             <p>
                                 {{ServiceItem.text}}
                             </p>
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
import ServicesindexJs from '@/data/ServicesindexJs';
export default {
    // validate({params}){
  //   return /^\d+$/.test(params.id)
  // },

  computed:{
    ServiceItem(){
      return ServicesindexJs.find(Service => Service.id === + this.$route.params.id);
    },
  }
}
</script>