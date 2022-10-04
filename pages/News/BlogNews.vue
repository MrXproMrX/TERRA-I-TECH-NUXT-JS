<template>
    <section>
        <div class="Blog__news__otp">
            <div class="Blog__news__item" v-for="BlogNews in articles" :key="BlogNews.id">
              <nuxt-link :to="'/news/' +  BlogNews.id">
                <div class="Blog__news__item__img">
                    <img :src="baseURL + BlogNews.image" :alt="BlogNews.title">
                </div>
                
                <h4 class="Blog__news__item__data">{{ formatDate(BlogNews.updated_at) }}</h4>
                <h3 class="Blog__news__item__title__h3">{{BlogNews.title}}</h3>
                <div class="Blog__news__text">
                    <p v-html="BlogNews.content"></p>
                </div>
              </nuxt-link>
            </div> 
        </div>
    </section>
</template>


<script>
import { formatDate } from '@/utils';
import { baseURL } from '@/constants/config';
export default {
    props:['articles'],
    methods:{
        formatDate,
    },

    data(){
        return{
            baseURL
        }
    }
}
</script>