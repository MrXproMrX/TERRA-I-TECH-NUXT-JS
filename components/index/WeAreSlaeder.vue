<template>
    <section>
        <VueSlickCarousel v-bind="settings" class="WeAre__item__slic">
            <div class="WeAre__item" v-for="(WeAre,index) in WeAres" :key="index">
                 <img :src="WeAre.img" :alt="index">
            </div>
        </VueSlickCarousel>
    </section>
</template>


<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
export default {
    props:['WeAres'],
    components:{
        VueSlickCarousel
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