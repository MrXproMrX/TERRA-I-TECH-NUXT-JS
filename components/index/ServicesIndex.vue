<template>
    <section>
        <div class="Services__pro">
            <div class="Services__item" v-for="Service in services" :key="Service.id">
            <nuxt-link  class="Services__item__link" :to="'/networks/' + Service.id">
                <div class="Services__image">
                    <img :src="baseURL + Service.icon" :alt="Service.title">
                </div>
                
                <div class="Services__max">
                     <img class="Services__img" :src="baseURL + Service.image" :alt="Service.title">
                     <h3 class="Services__title__h3">{{Service.title}}</h3>
                </div>
               </nuxt-link>
            </div>
        </div>
    </section>
</template>


<script>
import { baseURL } from '@/constants/config';
export default {
     props: ['services'],

    data(){
        return{
            baseURL
        }
    },
}
</script>