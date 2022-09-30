<template>
    <section>
        <div class="AboutSlic__top">
          <VueSlickCarouselMrx v-bind="settings">
            <div class="AboutSlic__item" v-for="(AboutSlic,index) in AboutSlics" :key="index">
                   <a :href="AboutSlic.link">
                       <img :src="AboutSlic.img" :alt="AboutSlic.index">
                   </a>
            </div>
           </VueSlickCarouselMrx>
        </div>
    </section>
 </template>
 
 
 <script>
 import VueSlickCarouselMrx from "vue-slick-carousel";
 import "vue-slick-carousel/dist/vue-slick-carousel.css";
 export default {
     props:['AboutSlics'],
 
     components:{
         VueSlickCarouselMrx
     },
 
      data(){
         return{
             settings: {
                     arrows: true,
                     dots: false,
                     infinite: true,
                     speed: 300,
                     slidesToShow: 5,
                     slidesToScroll: 1,
                      responsive: [
                    {
                   breakpoint: 1600,
                   settings: {
                   slidesToShow: 4,
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
                   breakpoint: 680,
                   settings: {
                   slidesToShow: 2,
                  slidesToScroll: 1
                   }
                  },
 
                  {
                   breakpoint: 380,
                   settings: {
                   slidesToShow: 1,
                  slidesToScroll: 1
                   }
                  },
                ]
                },
         }
     }
 }
 </script>