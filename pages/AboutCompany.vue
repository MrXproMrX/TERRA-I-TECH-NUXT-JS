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
                          <li><nuxt-link to="/AboutCompany" class="aboutComp__menu__link"> О компании</nuxt-link></li>
                      </ul>
                  </section>
                </div>
                </div>
             </div>
         <!-- about ent-->

         <!-- About company start -->

         <div class="AboutCompany">
             <section class="container">
                 <div class="AboutCompany__top">
                     <h2 class="AboutCompany__title__top">О компании</h2>

                     <div class="AboutCompany__top__img">
                          <img src="@/assets/foto/about_logo.svg" alt="logo">
                     </div>

                     <div class="AboutCompany__text">
                         <p>
                             Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                         </p>
                     </div>
                 </div>

                 <div class="AboutCompany__pro clearfix">

                     <div class="AboutCompany__pro__img">
                         <img src="@/assets/foto/about_img.png" alt="">
                     </div>

                     <div class="AboutCompany__text">
                         <p>
                             Sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
                         </p>
                     </div>
                 </div>

                 <div class="AboutCompany__pro clearfix">

                     <div class="AboutCompany__pro__img2">
                         <img src="@/assets/foto/about_img2.png" alt="">
                     </div>

                     <div class="AboutCompany__text">
                         <p>
                            Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur
                         </p>
                     </div>
                 </div>
             </section>
         </div>

         <!-- About company end -->

         <!-- How we are working start -->

         <div class="working">
             <section class="container">
                 <h2 class="working__title__h2">Как мы работаем</h2>
                    <HowWorking :workings="workings"></HowWorking>
             </section>
         </div>

         <!-- How we are working end -->

         <!-- AboutSlic start -->

        <div class="AboutSlic">
            <section class="container">
                <AboutSlic :AboutSlics="AboutSlics"></AboutSlic>
            </section>
        </div>

         <!-- AboutSlic end -->
    </section>
</template>

<style scoped>
.aboutComp__img{
    background-image: url(@/assets/foto/aboutCompne.png);
}

.AboutCompany__top__img{
    background-image: url(@/assets/foto/about.png);
}
</style>

<script>

import HowWorking from '@/components/About/HowWorking.vue';
import HowWorkingAbout from '@/data/HowWorkingAboutJs';
import AboutSlic from '@/components/About/AboutSlic.vue';
import AboutSlicAbout from '@/data/AboutSlicAboutJs';

export default {
    components:{
        HowWorking,
        AboutSlic,
    },
    data(){
        return{
            workings:HowWorkingAbout,
            AboutSlics:AboutSlicAbout,
        }
    }
}
</script>