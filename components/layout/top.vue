<template>
  <div class="w-full flex flex-wrap">
      <h2>
          Top trong tháng
      </h2>
      <div class="grid grid-cols-2 w-full gap-3">

      </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            model: []
        }
    },
    async mounted(){
        let x = await this.$axios.get("https://api.voiz.vn/v1/playlists/2044/audios?order=asc&position=bottom&limit=200")
        console.log(x.data);
    }
}
</script>

<style>

</style>