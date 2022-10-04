<template>
    <section>
        <footer>
            <div class="footer">
                <section class="container">
                    <div class="footer__top">

                        <div class="footer__item">

                            <div class="footer__img">
                                 <nuxt-link to="/"><img src="@/assets/foto/logo.svg" alt="logo"></nuxt-link>
                            </div>

                            <a class="footer__item__tel" href="tel:+99 893 505 45 05"><span>Телефон</span>+99 893 505 45 05</a>

                            <ul class="footer__item__icons">
                                 <li><a :href="options.data[3].value" target="_blank" class="footer__icons__link" :key="options.data[3].id"><i class="fab fa-facebook-f"></i></a></li>
                                 <li><a :href="options.data[4].value" target="_blank" class="footer__icons__link" :key="options.data[4].id"><i class="fab fa-instagram"></i></a></li>
                                 <li><a :href="options.data[2].value" target="_blank" class="footer__icons__link"><i class="fab fa-telegram-plane" :key="options.data[2].id"></i></a></li>
                            </ul>
                        </div>


                        <div class="footer__item__max">

                            <div class="footer__max__item">
                                <ul class="footer__mrx__menu">
                                    <li><nuxt-link class="footer__max__link" to="/about-company">О компании</nuxt-link></li>
                                    <li><nuxt-link to="/contacts" class="footer__max__link">Контакты</nuxt-link></li>
                                </ul>
                            </div>

                            <div class="footer__max__item">
                                <ul class="footer__mrx__menu">
                                    <li v-for="catalo in catalog" :key="catalo.id">
                                        <nuxt-link class="footer__max__link" :to="'/catalog/' + catalo.id">{{catalo.title}}</nuxt-link>
                                    </li>
                                </ul>
                            </div>

                        </div>

                    </div>

                    <div class="footer__pro">
                         <div>
                             <span class="footer__pro__link">«Terra I-Tech» Все права защищены</span>
                         </div>

                         <div>
                             <span class="footer__pro__link">© Copyright 2021 - Web developed by SOS Group</span>
                         </div>
                    </div>
                </section>
            </div>
        </footer>
    </section>
</template>

<script>
export default {
    async fetch({ store }) {
        await store.dispatch('homepage/fetchHomepage')

        if(store.getters['options/options'].length === 0){
            await store.dispatch('options/fetchOptions')
        }
    },
  
    computed:{

        options(){
            return this.$store.getters['options/options']
        },

        catalog() {
            return this.$store.getters['homepage/catalog']
        }
    },
}
</script>