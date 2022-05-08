<template>
  <div class="flex justify-center w-full bg-blue-600 text-white fixed">
    <div class="container pt-2 pb-1 grid grid-cols-1 w-full relative">
      <div @click="close()" class="right-0 top-0 absolute px-3 md:px-6 py-2 cursor-pointer z-40">
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      </div>
      <span @click="isOpen = !isOpen" class="px-3 md:px-6">
        <audio-player
          ref="audioPlayer"
          :audio-list="model.map(el=> `https://data.sachnoiviet.com.vn/audio/files/${el.playlist_id}/mp3/${el.id}.mp3`)"
          :before-play="handleBeforePlay"
          theme-color="#fff"
        />
      </span>
      <section class="grid grid-cols-1 w-full transition-all duration-500" :class="{'max-h-60':isOpen, 'max-h-0': !isOpen}" style="overflow: auto;">
        <span @click="playAt(index)" v-for="(item,index) in model" :key="index" class="flex shadow-md my-1 px-4 py-2 rounded-lg cursor-pointer text-xs" :class="{'bg-white text-blue-500' : $store.state.localStorage.currentIndex == index}">
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
      </section>
    </div>
  </div>
</template>

<script>
export default {
    data(){
      return {
        isOpen: false,
      }
    },
    computed: {
      model(){
        return this.$store.state.localStorage.playList;
      }
    },
    methods: {
      close(){
        this.$store.dispatch('localStorage/clearPlayList')
      },
      handleBeforePlay(next){
        next()
      },
      playAt(index){
        var vm =this;
        this.$refs.audioPlayer.currentPlayIndex = index;
        this.$store.commit('localStorage/updateIndex', index)
        setTimeout(() => {
          vm.$refs.audioPlayer.play();
        }, 500);
      }
    }
}
</script>

<style>
.audio-player .audio__progress-wrap {
  margin-top: 10px !important;
}
.audio-player .audio__time-wrap {
    margin-top: 5px !important;
}
.audio-player .audio__current-time {
  color: #fff !important;
}
.audio-player .audio__duration {
  color: #fff !important;
}
</style>