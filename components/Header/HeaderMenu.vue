<template>
    <section>
        <div class="header__Catalog">
            <div class="header__Catalog__button">
                <button v-on:click="open=!open" class="header__Catalog__link">
                    <img src="@/assets/foto/burger.svg" alt="logo" v-bind:class="{ HeaderActive: open }"> 
                    <i v-if="open" class="fas fa-times"></i>
                    Каталог товаров
                </button>
            </div>

            <div class="header__Catalog__menu" v-if="open">
                <ul class="header__Catalog__mrx">
                    <li v-for="(HeaderCatalog,index) in HeaderCatalogs" :key="index" v-on:click="HeaderCatalog.mrx=!HeaderCatalog.mrx">

                        <nuxt-link :to="HeaderCatalog.link" class="header__Catalog__menu__link"  v-bind:class="{ HeaderActive: HeaderCatalog.mrx}"> 
                            {{ HeaderCatalog.title }}   <span><i class="fas fa-angle-right"></i></span>
                        </nuxt-link>

                        <div v-if="HeaderCatalog.children" class="dropdown">
			                <ul  v-if="HeaderCatalog.mrx" class="header__dropdown">
					              <li v-for="child in HeaderCatalog.children" :key="child.id">
						                <nuxt-link class="header__dropdown_link" :to="child.link">{{ child.title }}</nuxt-link>
					             </li>
				            </ul>
			            </div>
                        
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        props: ['HeaderCatalogs'],
        data(){
           return{
                open:false,
           }
        }
    }
</script>