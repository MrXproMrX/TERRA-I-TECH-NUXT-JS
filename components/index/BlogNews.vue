<template>
    <section>
        <div class="Blog__news__otp">
            <div class="Blog__news__item" v-for="BlogNews in BlogNewsT" :key="BlogNews.id">
              <nuxt-link :to="'/news/' + BlogNews.id">
                <div class="Blog__news__item__img">
                    <img :src="BlogNews.img" :alt="BlogNews.title">
                </div>
                
                <h4 class="Blog__news__item__data">{{BlogNews.data}}</h4>
                <h3 class="Blog__news__item__title__h3">{{BlogNews.title}}</h3>
                <div class="Blog__news__text">
                    <p>{{BlogNews.text}}</p>
                </div>
              </nuxt-link>
            </div> 
        </div>
    </section>
</template>


<script>
export default {
    props:['BlogNewsT'],

    // methods:{
    //     openNews(BlogNews){
    //         this.$router.push('/News/' + BlogNews.id)
    //     }
    // }
}
</script>