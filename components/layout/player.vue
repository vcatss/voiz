<template>
  <div class="flex flex-wrap w-full justify-center bg-blue-500">
    <section class="pt-2 pb">
      <audio-player
        class="w-[50vw]"
        ref="audioPlayer"
        :audio-list="audioList.map(elm => elm.url)"
        :before-play="handleBeforePlay"
        theme-color="#fff"
      />
    </section>
  </div>
</template>

<script>
export default {
  data(){
    return {
      audioList: [
        {
          name: 'audio1',
          url: 'https://www.0dutv.com/upload/dance/F25F74A0B8FF82503241801D0E2CA5CD.mp3'
        },
        {
          name: 'audio2',
          url: 'https://www.0dutv.com/upload/dance/20200316/C719452E3C7834080007662021EA968E.mp3'
        }
      ]
    }
  },
  computed: {
      model(){
          return this.$store.state.localStorage.playList;
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
</style>