<template>
  <div class="py-2 bg-blue-600 text-white flex justify-center w-full">
      <div class="container flex w-full">
        <div class="flex-grow">
            <div class="flex items-center">
                <NuxtLink to="/" class="hidden md:flex">
                    <img class="h-10" src="https://voiz.vn/images/logo.png"/>
                </NuxtLink>
                <section name="search" class="flex items-center ml-2 md:ml-10 border border-gray-200 px-3 rounded-lg">
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    <input @keyup.enter="search()" v-model="searchStr" class="py-2 px-4 bg-blue-600 w-64 outline-none" placeholder="Tìm kiếm" />
                </section>
            </div>
        </div>
          
        <div @click="isComponentModalActive = !isComponentModalActive" class="flex lg:hidden p-3 cursor-pointer hover:bg-white hover:text-blue-500 rounded-lg transition-all duration-500">
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </div>
        <div v-if="!$auth.user" class="hidden login lg:flex items-center text-lg text-white">
            <NuxtLink to="/dang-ky" class="mr-6">
            Đăng ký
            </NuxtLink>
            <NuxtLink to="/dang-nhap">
            Đăng nhập
            </NuxtLink>
        </div>
        <b-modal
            v-model="isComponentModalActive"
            has-modal-card
            full-screen
            :can-cancel="false">
            <span class="flex items-center justify-center h-full">
                <b-button
                label="Close"
                @click="isComponentModalActive = false" />
            </span>
        </b-modal>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            searchStr: '',
            isComponentModalActive: false,
        }
    },
    methods: {
        search(){
            this.$router.push("/tim-kiem/" + this.searchStr);
        }
    }
}
</script>

<style>
li {
    @apply px-6 text-lg font-semibold
}
.login a {
    @apply text-white
}
</style>