<template>
    <section>
        <div class="Catalog__max">
            <div :class="'Catalog__top' + Catalog.id" v-for="Catalog in Catalogs" :key="Catalog.id">
                <div :class="'Catalog__top__max' + Catalog.id">
                    <nuxt-link :to="'/Products/' + Catalog.id">
                        <h3 class="Catalog__title__h3">{{Catalog.title}}</h3>
                        <div class="Catalog__imges">
                            <img :src="Catalog.img" :alt="Catalog.title">
                        </div>
                    </nuxt-link>
                </div>
            </div>
        </div>
        
        <div class="Catalog__top__batton">
            <nuxt-link to="/products" class="Catalog__top__link">Смотреть весь каталог</nuxt-link>
        </div>
    </section>
</template>

<script>
export default {
    props:['Catalogs'],

    // methods:{
    //     openCatalog(Catalog){
    //         this.$router.push('/Products/' + Catalog.id)
    //     }
    // }
}
</script>