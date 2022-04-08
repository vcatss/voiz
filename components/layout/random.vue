<template>
  <div class="w-full flex flex-wrap">
      <h2 class="text-blue-600 text-xl font-bold py-3">
          Sách mới
      </h2>
      <div class="grid grid-cols-6 w-full gap-3">
        <NuxtLink :to="`/${item.id}`" v-for="(item,index) in $attrs.value" :key="index">
            <img v-if="item.avatar" class="rounded-lg shadow-md h-48" :src="item.avatar.thumb_url"/>
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