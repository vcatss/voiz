<template>
  <div class="h-screen-fix justify-center items-center flex">
      <div class="flex flex-wrap w-[500px] shadow-md rounded-xl px-8 py-4 border border-blue-100">
        <section class="grid grid-cols-1 w-full gap-2 mb-2">
            <label>
                Tài khoản
            </label>
            <input v-model="model.username" class="outline-none border border-gray-100 rounded-xl px-6 py-2 shadow-md"/>
        </section>
        <section class="grid grid-cols-1 w-full gap-2 mb-2">
            <label>
                Mật khẩu
            </label>
            <input v-model="model.password" class="outline-none border border-gray-100 rounded-xl px-6 py-2 shadow-md"/>
        </section>
        <section class="py-2 flex justify-end w-full">
            <button @click="userLogin()" type="button" class="rounded-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                Đăng ký
            </button>
        </section>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            model: {
                username: '',
                password: ''
            },
            error: null
        }
    },
    methods: {
        async userLogin() {
            try {
                let response = await this.$auth.loginWith('local', { data: this.model })
                console.log(response)
                console.log(this.$auth)
            } catch (err) {
                console.log(err)
            }
        }
    }
}
</script>

<style>
.h-screen-fix {
    height:calc(100vh - 4rem);
}
</style>