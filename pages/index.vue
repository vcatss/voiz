<template>
  <div class="flex w-full justify-center flex-wrap">
      <div class="container flex flex-wrap w-full py-6">
        <div class="grid grid-cols-6 gap-3 w-full">
          <div class="col-span-6 lg:col-span-5">
            <LayoutSlider class="hidden lg:grid w-full"></LayoutSlider>
            <LayoutTop v-model="model" class="w-full"></LayoutTop>
            <!-- <LayoutSuggest class="py-10" v-model="suggest"></LayoutSuggest> -->
            <LayoutRandom v-model="random"></LayoutRandom>
          </div>
          <span class="col-span-6 lg:col-span-1">
            <LayoutRecommend v-model="recommend"></LayoutRecommend>
          </span>
        </div>
        
      </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  async asyncData({ params, app }) {
      let data = await app.$axios.get('/audio/top');
      let random = await app.$axios.get('/audio/random')
      let recommend = await app.$axios.get('/audio/suggest')
      return {model : data.data[0].data, random: random.data[0].data, recommend: recommend.data[0].data}
  },
}
</script>
