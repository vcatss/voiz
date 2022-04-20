<template>
  <div class="w-full flex flex-wrap">
      <h2 class="text-blue-600 text-xl font-bold px-5 pb-1">
          Gợi ý
      </h2>
      <div class="grid grid-cols-1 w-full gap-5">
        <NuxtLink :to="`/${item.slug}`" class="p-2 flex rounded-lg shadow-md" v-for="(item,index) in $attrs.value" :key="index">
            <img class="rounded-lg shadow-md h-16" :src="`https://data.sachnoiviet.com.vn/audio/files/${item.id}/images/${item.id}.jpg`" />
            <span class="px-3 text-xs font-semibold">
                 {{item.name}}
            </span>
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