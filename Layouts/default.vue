<template>
    <div>
        <headerVue></headerVue>
        <section>
            <nuxt></nuxt>
        </section>
        <FooterMenuVue></FooterMenuVue>
    </div>
</template>

<script>
import headerVue from '~/components/Header/header.vue';
import FooterMenuVue from '~/components/Header/FooterMenu.vue';
export default {
    components:{
        headerVue,
        FooterMenuVue,
    }
}
</script>