<template>
  <div class="flex justify-center w-full my-10">
      <div class="container w-full flex">
          <div class="grid grid-cols-12 w-full gap-10">
            <div class="col-span-4 flex justify-center">
                <div class="flex-no-shink w-full">
                    <div class="w-full flex flex-wrap justify-center">   
                        <div class="w-full flex items-center justify-center">
                            <img class="h-[300px] rounded-lg" :src="info.avatar.thumb_url" />
                        </div>
                        
                        <section class="w-full">
                            <p>{{info.name}}</p>

                            <p>ác giả {{info.author_string}}</p>

                            <p>Thời lượng {{info.total_duration}}'</p>

                            <p>KênhFirst News - Trí Việt</p>

                            <p><span>{{info.promotion}}</span>Giá bán lẻ {{info.coin_price}}</p>
                        </section>
                    
                        <client-only>
                            <audio-player
                            v-if="info.playlist_trailers.length>0"
                            class="w-full"
                            ref="audioPlayer"
                            :audio-list="info.playlist_trailers.map((elm) => elm.file_url)"
                            :before-play="handleBeforePlay"
                            />
                        </client-only>
                    </div>
                </div>
            </div>
            <div class="col-span-8">
                <div class="w-full flex flex-wrap">
                    <code v-html="info.description">
                    </code>
                    <span v-for="(item,index) in model" :key="index" class="w-full flex items-center py-4 px-2">
                        <span>
                            {{index}} - 
                        </span>
                        <h2>
                            {{item.name}}
                        </h2>
                        <span v-if="item.duration" >
                            {{item.duration}}
                        </span>
                        <span>
                            {{item.id}}
                        </span>
                    </span>
                </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script>

export default {
    async asyncData({ params, app }) {
        let data = await app.$axios.get(`https://api.voiz.vn/v1/playlists/${params.id}/audios?order=asc&position=bottom&limit=20`);
        let data2 = await app.$axios.get(`https://api.voiz.vn/v1/playlists/${params.id}`)
        return {model : data.data.data, info: data2.data.data}
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
            //this.$refs.audioPlayer.play();
        })
    },
    methods: {
        // Use this function if you want to do something before you start playing
        handleBeforePlay(next) {
            next(); // Start play
        },
    },
}
</script>

<style>

</style>    