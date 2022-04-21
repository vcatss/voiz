<template>
  <div>
    <audio-player
      ref="audioPlayer"
      :audio-list="audioList.map(elm => elm.url)"
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
    }
}
</script>

<style>

</style>