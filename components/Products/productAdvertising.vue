<template>
    <div class="products__advertising">
        <div class="products__advertising__img" v-for="catalog in catalog_in.data.advertisements" :key="catalog.id">
            <a :href="catalog.link">
                <img :src="baseURL + catalog.image" :alt="catalog.created_at" />
            </a>
        </div>
    </div>
</template>


<script>
import { baseURL } from '@/constants/config';
export default {

    props:['catalog_in'],

    data(){
        return{
            baseURL
        }
    },
}
</script>