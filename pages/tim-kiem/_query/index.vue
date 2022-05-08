<template>
  <div class="w-full flex justify-center pt-10">
    <div class="container">
        <span class="pb-2">
            Đang hiển thị <b>{{model[0].total.rows}} </b> kết quả được tìm thấy
        </span>
        <span class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            <span class="shadow-md p-4 rounded-lg grid grid-cols-1" v-for="(item,index) in model[0].data" :key="index">
                <div class="flex-noshink">
                    <div class="flex justify-center w-full">
                        <NuxtLink :to="`/${item.slug}`">
                            <img v-shared-element:[item.id] class="rounded-lg shadow-md h-48" :src="`https://data.sachnoiviet.com.vn/audio/files/${item.id}/images-thump/${item.id}.jpg`" />
                        </NuxtLink>
                    </div>
                    <span class="my-4">
                        <b>{{item.name}} - {{item.id}}</b>
                    </span>
                    <span class="flex w-full items-center h-8">
                        <img v-if="item.promotion == 'vip'" class="h-8" src="/vip.png"/> {{ new Date(item.total_duration * 1000).toISOString().substr(11, 8)}}
                    </span>
                    <span class="text-sm">
                        {{item.description.slice(0,200)}}...
                    </span>
                    <!-- {{item.promotion}} {{item.total_duration}} {{item.slug}}
                    -->
                    <!-- <code>mm
                        {{item.category}}
                    </code>
                    <code>
                        {{item.authors}}
                    </code> -->
                </div>
            </span>
        </span>
        <div class="flex justify-center w-full my-5">
            <b-pagination
                @change="pageChange"
                :total="model[0].total.rows"
                v-model="current"
                :per-page="perPage"
                >
            </b-pagination>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    async asyncData({ params, app }) {
        let data = await app.$axios.get('/audio/search?query=' + params.query);
        return {model : data.data}
    },
    data(){
        return {
            current: 1,
            perPage: 12,
        }
    },
    methods: {
        async pageChange(){
            let data = await this.$axios.get(`/audio/search?query=${this.$route.params.query}&page=${this.current}&pageSize=12` );
            this.model = data.data;
        }
    }
}
</script>   

<style>
.pagination li {
    padding-left: 0 !important;
    padding-right: 0 !important;
}
</style>