<template>
  <div>

  </div>
</template>

<script>
export default {
    async asyncData({ params, app }) {
        let data = await app.$axios.get('/audio/search?query=' + params.query);
        return {model : data.data}
    },
}
</script>

<style>

</style>