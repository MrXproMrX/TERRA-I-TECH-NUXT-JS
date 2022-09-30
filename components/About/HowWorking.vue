<template>
    <section>
        <div class="working__top">
            <div class="working__item" v-for="(working,index) in workings" :key="index">
                <h2 class="working__item__title">{{working.title}}</h2>
                <h4 class="working__item__title__h4">{{working.title_h4}}</h4>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props:['workings']
}
</script>