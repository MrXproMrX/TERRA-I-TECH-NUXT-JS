<template>
    <section>
        <div class="Services__pro">
            <div class="Services__item" v-for="(Service,index) in Services" :key="index">
            <nuxt-link  class="Services__item__link" :to="'/networks/' + Service.id">
                <div class="Services__image">
                    <img :src="Service.image" :alt="Service.title">
                </div>
                
                <div class="Services__max">
                     <img class="Services__img" :src="Service.img" :alt="Service.title">
                     <h3 class="Services__title__h3">{{Service.title}}</h3>
                </div>
               </nuxt-link>
            </div>
        </div>
    </section>
</template>


<script>
export default {
     props: ['Services'],

    // methods:{
    //     openServices(Service){
    //         this.$router.push('/Networks/' + Service.id)
    //     }
    // }
}
</script>