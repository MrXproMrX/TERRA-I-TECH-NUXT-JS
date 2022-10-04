<template>
    <section>
        <div class="Catalog__max">
            <div :class="'Catalog__top' + ++index" v-for="(Catalo,index) in catalog" :key="Catalo.id + index"  >
                <div :class="'Catalog__top__max' + index">
                    <nuxt-link :to="'/catalog/' + Catalo.id">
                        <h3 class="Catalog__title__h3">{{Catalo.title}}</h3>
                        <div class="Catalog__imges">
                            <img :src="baseURL + Catalo.image" :alt="Catalo.title">
                        </div>
                    </nuxt-link>
                </div>
            </div>
        </div>
        
        <div class="Catalog__top__batton">
            <nuxt-link to="/catalog" class="Catalog__top__link">Смотреть весь каталог</nuxt-link>
        </div>
    </section>
</template>

<script>
import { baseURL } from '@/constants/config';
export default {
    props:['catalog'],

    data(){
        return{
            baseURL
        }
    }
}
</script>