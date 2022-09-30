<template>
    <section>
        <VueSlickCarousel class="SwitchTpLink__mrx1" :fade="true"  ref="c1" :asNavFor="c2" :focusOnSelect="true">
                 <div class="SwitchTpLink__item" v-for="(SwitchTpLink,index) in SwitchTpLinks" :key="index">
                     <img :src="SwitchTpLink.img" :alt="index">
                 </div>
        </VueSlickCarousel>

        <VueSlickCarousel class="SwitchTpLink__mrx2"  ref="c2" :asNavFor="c1" :focusOnSelect="true" v-bind="settings">
                 <div class="SwitchTpLink__item2" v-for="(SwitchTpLink,index) in SwitchTpLinks" :key="index">
                     <img :src="SwitchTpLink.img" :alt="SwitchTpLink.img">
                 </div>
        </VueSlickCarousel>
        
    </section>
</template>


<script>

import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
export default {
    components:{
        VueSlickCarousel,
    },

    props:['SwitchTpLinks'],

    data(){
        return{
            c1: undefined,
            c2: undefined,
            settings: {
                    arrows: true,
                    dots: false,
                    infinite: true,
                    speed: 300,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                     responsive: [
                   {
                  breakpoint: 1600,
                  settings: {
                  slidesToShow: 3,
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
                  breakpoint: 500,
                  settings: {
                  slidesToShow: 2,
                 slidesToScroll: 1
                  }
                 },

                 {
                  breakpoint: 280,
                  settings: {
                  slidesToShow: 1,
                 slidesToScroll: 1
                  }
                 },
               ]
               },
        }
    },
    mounted() {
        this.c1 = this.$refs.c1;
        this.c2 = this.$refs.c2;
    },
    
}


</script>