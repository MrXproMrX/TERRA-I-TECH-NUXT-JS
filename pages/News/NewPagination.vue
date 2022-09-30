<template>
    <section>
        <div class="NewsPage__pro">
            <ul class="NewsPage__pro__menu">
                <li v-if="page>1"><a class="NewsPage__pro__page" href="#!" @click.prevent="paginate(page -1)"><i class="fas fa-angle-double-left"></i></a></li>
                
                <li v-for="pageNumber in pages" :key="pageNumber">
                    <a href="#!" class="NewsPage__pro__page" @click.prevent="paginate(pageNumber)"><span>{{pageNumber}}</span></a>
                </li>

                <li v-if="page<pages"><a class="NewsPage__pro__page" href="#!"  @click.prevent="paginate(page+1)"><i class="fas fa-angle-double-right"></i></a></li>
            </ul>
        </div>
    </section>
</template>

<script>
export default {
    model:{
      prop:'page',
      event:'paginate',
    },
    props:['page', 'count', 'perPage'],
    computed:{
        pages(){
            return Math.ceil(this.count / this.perPage);
        }
    },

    methods:{
        paginate(page){
           this.$emit('paginate' , page);
        }
    }
}
</script>