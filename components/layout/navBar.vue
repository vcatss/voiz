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
                        <input class="py-2 px-4 bg-blue-600 w-64 outline-none" placeholder="Tim kiem" />
                    </section>
              </div>
          </div>
          <div v-if="!this.$auth.user" class="hidden lg:flex items-center text-lg">
              <NuxtLink to="/dang-ky" class="mr-6">
                Đăng ký
              </NuxtLink>
              <NuxtLink to="/dang-nhap">
                Đăng nhập
              </NuxtLink>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
li {
    @apply px-6 text-lg font-semibold
}
</style>