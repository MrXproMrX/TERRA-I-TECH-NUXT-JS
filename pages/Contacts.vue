<template>
    <section>
           <!-- about start -->
            <div class="aboutComp">
                <div class="aboutComp__img">
                <div class="aboutComp__top">
                  <section class="container">
                      <ul class="aboutComp__menu">
                          <li><nuxt-link to="/" class="aboutComp__menu__link">Главная</nuxt-link></li>
                          <li><span></span></li>
                          <li><nuxt-link to="/contacts" class="aboutComp__menu__link">Контакты</nuxt-link></li>
                      </ul>
                  </section>
                </div>
                </div>
            </div>
           <!-- about ent-->

           <!-- Contacts start -->

            <div class="Contacts">
                 <section class="container">
                     <div class="Contacts__top">

                         <div class="Contacts__item">
                             <ul class="Contacts__menu">
                                 <li>
                                     <h5 class="Contacts__title__h5">Телефон</h5>
                                     <a class="Contacts__link" :href="'tel:'+options.data[0].value" :key="options.data[0].id">
                                        {{beautifyPhoneNumber(options.data[0].value)}}
                                    </a>
                                 </li>

                                 <li>
                                     <h5 class="Contacts__title__h5">Адрес</h5>
                                     <a class="Contacts__link" :key="options.data[5].id">
                                        {{options.data[5].value}}
                                    </a>
                                 </li>

                                 <li>
                                     <h5 class="Contacts__title__h5">Ориентир</h5>
                                     <a class="Contacts__link" :key="options.data[6].id">
                                        {{options.data[6].value}}
                                    </a>
                                 </li>

                                 <li>
                                     <h5 class="Contacts__title__h5">Email</h5>
                                     <a class="Contacts__link" :href="'mailto:' + options.data[7].value" :key="options.data[7].id">
                                        {{options.data[7].value}}
                                    </a>
                                 </li>
                             </ul>
                         </div>

                         <div class="Contacts__item">
                             <h2 class="Contacts__title__h2">Напишите нам</h2>

                             <form action="#!">
                                 <div class="Contacts__item__form">
                                     <input class="Contacts__item__input" type="text" placeholder="Имя">
                                     <input class="Contacts__item__input" type="email" placeholder="Email">
                                 </div>
                                 <textarea name="text" class="Contacts__item__textarea" placeholder="Комментарий"></textarea>
                                 <button class="Contacts__item__button">Отправить</button>
                             </form>
                         </div>
                     </div>
                 </section>
            </div>

           <!-- Contacts end -->

           <!-- cards start -->

            <div class="cards">
                    <div class="cards__top">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d23970.439283079948!2d69.28246921445319!3d41.3239826317122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1651128564796!5m2!1sru!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
            </div>

           <!-- cards end -->
    </section>
</template>

<style scoped>
.aboutComp__img{
    background-image: url(@/assets/foto/aboutCompne.png);
}
</style>

<script>
import { beautifyPhoneNumber } from '@/utils';
export default {

    async fetch({ store }) {
        if(store.getters['options/options'].length === 0){
            await store.dispatch('options/fetchOptions')
        }
    },

    methods:{
        beautifyPhoneNumber,
    },

    computed:{

        test(){
            console.log(options.data)
        },

        options(){
            return this.$store.getters['options/options']
        }
    }
}
</script>