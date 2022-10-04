<template>
    <section class="container">
        <header>
            <div class="header">
                <div class="header__top">
                    <div class="header__pro">

                        <div class="header__logo">
                            <nuxt-link to="/"><img src="@/assets/foto/logo.svg" alt="logo"></nuxt-link>
                        </div>

                        <span class="header__span"></span>
                        
                        <div class="header__text">
                            <p>Комплексные системы безопасности и цифровой связи</p>
                        </div>

                    </div>

                <div class="header__item">

                    <div class="header__max">
                        <div>
                            <span class="header__tel__link"><i class="fas fa-phone-alt"></i></span>
                        </div>

                        <div v-if="options.data[0].id || options.data[1].id">
                            <a class="header__tel__link" :href="'tel:' + options.data[0].value" :key="options.data[0].id">
                                {{beautifyPhoneNumber(options.data[0].value)}}
                            </a>
                            
                            <a class="header__tel__link" :href="'tel:' + options.data[1].value" :key="options.data[1].id">
                                {{beautifyPhoneNumber(options.data[1].value)}}
                            </a>
                        </div>

                    </div>

                    <div>
                        <ul class="header__menu">
                            <li><a :href="options.data[3].value" target="_blank" class="header__menu__link" :key="options.data[3].id">
                                <i class="fab fa-facebook-f"></i>
                                </a>
                            </li>

                            <li><a :href="options.data[4].value" target="_blank" class="header__menu__link" :key="options.data[4].id">
                                <i class="fab fa-instagram"></i>
                                </a>
                            </li>

                            <li><a :href="options.data[2].value" target="_blank" class="header__menu__link" :key="options.data[2].id">
                                <i class="fab fa-telegram-plane"></i>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div class="header__button">
                        <a :href="'http://terra.sosgroup.uz:2118/' + options.data[10].value" :key="options.data[10].id"  target="_blank" class="header__button__link">Прайс-лист</a>
                    </div>

                </div>

                </div>


               <div class="header__mrx__top">

                <div class="header__Catalog__pro">
                    <HeaderGatalogLink :HeaderCatalogs='HeaderCatalogs'></HeaderGatalogLink>

                    <div class="header__burger__menu" v-bind:class="{ HeaderBurger: mrxMax, HeaderBurgerNone: mrxMax }">
                       <div class="header__burger__menu__pro">

                        <ul class="header__item__ru header__item__ru__none">
                                <li><a class="header__item__ru__link" href="#!">RU <i class="fas fa-angle-down"></i></a></li>
                                <ul class="header__item__en">
                                    <li><a class="header__item__ru__link" href="#!">EN</a></li>
                                    <li><a class="header__item__ru__link" href="#!">UZ</a></li>
                                </ul>
                        </ul>
                        

                        <ul class="header__menu__pro">
                            <li>
                                <nuxt-link class="header__menu__pro__link" to="/about-company">О компании</nuxt-link>
                            </li>

                            <li>
                                <nuxt-link to="/contacts" class="header__menu__pro__link">Контакты</nuxt-link>
                            </li>
                        </ul>

                        <div class="header__burger__x">
                            <button @click="mrxMax=!mrxMax" class="header__burger__x__link"><i class="fas fa-times"></i></button>
                        </div>
                        </div>
                    </div>
                </div>

                    <div  class="header__from__item">
                        <form action="#!" class="header__from"  v-bind:class="{ HeaderBurgerForm: mrxForm, HeaderBurgerFormNone: mrxForm }">
                           <input class="header__from__input" type="text" placeholder="Поиск по сайту">
                           <button class="header__from__button" type="submit"><i class="fas fa-search"></i></button>
                        </form>

                        <div class="header__burger">
                           <button class="header__burger__icons" @click="mrxForm=!mrxForm"><i class="fas fa-search"></i></button>
                        </div>

                        <div class="header__burger">
                           <button @click="mrxMax=!mrxMax"><img src="@/assets/foto/burger.svg" alt="burger"></button>
                        </div>

                        <div>
                            <ul class="header__item__ru">
                                <li><a class="header__item__ru__link" href="#!">RU <i class="fas fa-angle-down"></i></a></li>
                                <ul class="header__item__en">
                                    <li><a class="header__item__ru__link" href="#!">EN</a></li>
                                    <li><a class="header__item__ru__link" href="#!">UZ</a></li>
                                </ul>
                            </ul>
                        </div>
                    </div>

                </div>

            </div>
        </header>
    </section>
</template>

<script>
    import HeaderGatalogLink from '@/components/Header/HeaderMenu.vue';
    import ProductCategoriaJs from '@/data/ProductCategoriaJs';
    import { beautifyPhoneNumber } from '@/utils';
    export default {
        components:{
            HeaderGatalogLink,
        },

        async fetch({ store }) {
            if(store.getters['options/options'].length === 0){
                await store.dispatch('options/fetchOptions')
            }
        },

    
        data(){
            return{
                HeaderCatalogs:ProductCategoriaJs,
                mrxMax:false,
                mrxForm:false,
            }
        },

        methods:{
            beautifyPhoneNumber,
        },

        computed:{
            options(){
                return this.$store.getters['options/options']
            }
        }
    }
</script>