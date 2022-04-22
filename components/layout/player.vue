<template>
  <div>
    <audio-player
      ref="audioPlayer"
      :audio-list="model.map(el=> `https://data.sachnoiviet.com.vn/audio/files/${el.playlist_id}/mp3/${el.id}.mp3`)"
      :before-play="handleBeforePlay"
      theme-color="#ff2929"
    />
  </div>
</template>

<script>
export default {
    computed: {
      model(){
          return this.$store.state.localStorage.playList;
      }
    },
    methods: {
      handleBeforePlay(next){
        next()
      }
    }
}
</script>

<style>

</style>