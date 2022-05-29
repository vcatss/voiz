<template>
  <div class="flex justify-center w-full my-10">
      <div class="container grid grid-cols-12 gap-6 w-full">
          <div class="col-span-12 lg:col-span-3">
            <div class="flex w-full relative h-[300px] justify-center lg:justify-start">
                <img v-shared-element:[model.id] class="rounded-lg shadow-md h-[300px] absolute top-0" :src="`https://data.sachnoiviet.com.vn/audio/files/${model.id}/images-thump/${model.id}.jpg`" />
                <img class="rounded-lg shadow-md h-[300px] absolute top-0" :src="`https://data.sachnoiviet.com.vn/audio/files/${model.id}/images/${model.id}.jpg`" />
            </div>
            <div class="grid grid-cols-1 gap-1 w-full my-2">
                <span class="flex w-full">
                    <span class="font-bold">
                        Tác giả: 
                    </span>
                    <div v-for="(item,index) in model.authors" :key="index" class="ml-2 hover:text-blue-500 text-underline cursor-pointer">
                        {{item.name}}
                    </div>
                </span>
                <span class="flex w-full">
                    <span class="font-bold">
                        Chuyên mục: 
                    </span>
                    <div class="ml-2 hover:text-blue-500 text-underline cursor-pointer">
                        {{model.category.name}}
                    </div>
                </span>
                <span class="flex flex-wrap w-full">
                    <span class="font-bold">
                        Giọng đọc: 
                    </span>
                    <div v-for="(item,index) in model.voicers" :key="index" class="ml-2 hover:text-blue-500 text-underline cursor-pointer">
                        {{item.name}} <b v-if="index>0">,</b>
                    </div>
                </span>
                <span class="flex flex-wrap w-full">
                    <span class="font-bold">
                        Lượt tải: 
                    </span>
                    <div class="ml-2 hover:text-blue-500 text-underline cursor-pointer">
                        {{model.playlist_counter.downloads_count}}
                    </div>
                </span>
                <span class="flex flex-wrap w-full">
                    <span class="font-bold">
                        Nội dung: 
                    </span>
                    <div class="ml-2 hover:text-blue-500 text-underline cursor-pointer">
                        {{model.playlist_counter.content_avg}}
                    </div>
                </span>
                <span class="flex flex-wrap w-full">
                    <span class="font-bold">
                        Số audio: 
                    </span>
                    <div class="ml-2 hover:text-blue-500 text-underline cursor-pointer">
                        {{model.playlist_counter.audios_count}}
                    </div>
                </span>
            </div>
          </div>
          <div class="col-span-12 lg:col-span-9">
            <div class="w-full overflow-hidden hover:h-auto transition-all duration-500 delay-500" :class="{'h-[75px]': model.description.length>100, 'h-0' : model.description.length<100}">
                {{model.description}}
            </div>
            <div class="grid grid-cols-1 gap-3 w-full my-10">
                <span @click="playAt(index)" v-for="(item,index) in model.play_list" :key="index" class="transition-all duration-500 flex shadow-md px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-400 hover:text-white" :class="{'bg-blue-500 text-white' : $store.state.localStorage.currentIndex == index}">
                    <span class="flex-grow">
                        <div class="flex items-center">
                            <span class="w-[50px]">
                                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
                            </span>
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
            this.$store.commit('localStorage/updateIndex', 0)
            this.$store.commit("localStorage/updatePlayList", this.model.play_list);
        })
    },
    methods: {
        // Use this function if you want to do something before you start playing
        handleBeforePlay(next) {
            next(); // Start play
        },
        async playAt(index){
            console.log(this.$root.$children.filter(p=>p._name == "<Layout>")[0].$refs.player)
            this.$root.$children.filter(p=>p._name == "<Layout>")[0].$refs.player.playAt(index)
        }
    },
}
</script>

<style scoped>
    .content {
        margin-bottom: 0 !important;
    }
</style>