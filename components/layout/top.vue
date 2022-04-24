<template>
  <div class="w-full flex flex-wrap">
      <h2 class="text-blue-600 text-xl font-bold py-3">
          Sách mới
      </h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-8 w-full gap-3">
        <NuxtLink :to="`/${item.slug}`" v-for="(item,index) in $attrs.value.slice(0,8)" :key="index">
            <img v-shared-element:[item.id] class="rounded-lg shadow-md h-48" :src="`https://data.sachnoiviet.com.vn/audio/files/${item.id}/images-thump/${item.id}.jpg`" />
        </NuxtLink>
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
      
    }
}
</script>

<style>

</style>