<template>
  <div class="w-full flex flex-wrap">
      <div class="flex w-full">
        <NuxtLink :to="`/${item.id}`" class="mr-4" v-for="(item,index) in $attrs.value" :key="index">
            <img class="rounded-lg shadow-md h-10" :src="item.image.thumb_url"/>
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