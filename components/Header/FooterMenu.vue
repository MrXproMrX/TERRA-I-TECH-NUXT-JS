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
                                 <li><a href="#!" class="footer__icons__link"><i class="fab fa-facebook-f"></i></a></li>
                                 <li><a href="#!" class="footer__icons__link"><i class="fab fa-instagram"></i></a></li>
                                 <li><a href="#!" class="footer__icons__link"><i class="fab fa-telegram-plane"></i></a></li>
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
                                    <li><a href="#!" class="footer__max__link">Системы передачи данных</a></li>
                                    <li><a href="#!" class="footer__max__link">Системы визуальной безопасности</a></li>
                                    <li><a href="#!" class="footer__max__link">Пожаротушение и безопасность</a></li>
                                    <li><a href="#!" class="footer__max__link">Системы контроля доступа</a></li>
                                    <li><a href="#!" class="footer__max__link">Системы звукового оповещения</a></li>
                                </ul>
                            </div>

                        </div>

                    </div>

                    <div class="footer__pro">
                         <div>
                             <a class="footer__pro__link" href="#!">«Terra I-Tech» Все права защищены</a>
                         </div>

                         <div>
                             <a class="footer__pro__link" href="#!">© Copyright 2021 - Web developed by SOS Group</a>
                         </div>
                    </div>
                </section>
            </div>
        </footer>
    </section>
</template>