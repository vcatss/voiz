<template>
  <div class="flex justify-center w-full my-10">
      <div class="flex w-full relative">
        <img v-shared-element:[model.id] class="rounded-lg shadow-md h-[500px] absolute top-0" :src="`https://data.sachnoiviet.com.vn/audio/files/${model.id}/images-thump/${model.id}.jpg`" />
        <img class="rounded-lg shadow-md h-[500px] absolute top-0" :src="`https://data.sachnoiviet.com.vn/audio/files/${model.id}/images/${model.id}.jpg`" />
        {{model}}
      </div>
  </div>
</template>

<script>

export default {
    async asyncData({ params, app }) {
        let data = await app.$axios.get('/audio/' + params.id);
        return {model : data.data}
    },
    components: {
      
    },
    data(){
        return {
            title: "",
        }
    },
    mounted(){
        var vm = this;
        vm.$nextTick(async ()=>{
            this.$store.commit("localStorage/updatePlayList", this.model.play_list);
        })
    },
    methods: {
        // Use this function if you want to do something before you start playing
        handleBeforePlay(next) {
            next(); // Start play
        },
        async play(item){
            alert(item.id)
            var data = await this.$axios.get(`http://localhost:4000/supplier/search/query?id=${item.id}&token=_kzKqMRtvktaJuhp9hddJQ`);
            console.log(data)
        }
    },
}
</script>

<style>

</style>    