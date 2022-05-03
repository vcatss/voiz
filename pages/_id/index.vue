<template>
  <div class="flex justify-center w-full my-10">
      <div class="container grid grid-cols-12 gap-6 w-full">
          <div class="col-span-12 lg:col-span-2">
            <div class="flex w-full relative h-[300px] justify-center lg:justify-start">
                <img v-shared-element:[model.id] class="rounded-lg shadow-md h-[300px] absolute top-0" :src="`https://data.sachnoiviet.com.vn/audio/files/${model.id}/images-thump/${model.id}.jpg`" />
                <img class="rounded-lg shadow-md h-[300px] absolute top-0" :src="`https://data.sachnoiviet.com.vn/audio/files/${model.id}/images/${model.id}.jpg`" />
            </div>
            <div class="flex w-full">
                {{model.authors}}
            </div>
          </div>
          <div class="col-span-12 lg:col-span-10">
              <code>
                {{model.description}}
              </code>
              <code>
                {{model}}
              </code>
              <div class="grid grid-cols-1 gap-3 w-full my-4">
                <span v-for="(item,index) in model.play_list" :key="index" class="flex shadow-md px-4 py-2 rounded-lg cursor-pointer">
                    <span class="flex-grow">
                        <div class="flex items-center">
                            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
                            <span class="ml-4">
                                {{item.name}}
                            </span>
                        </div>
                    </span>
                    <span>
                        {{new Date(item.duration * 1000).toISOString().substr(11, 8)}}
                    </span>
                </span>
              </div>
          </div>
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