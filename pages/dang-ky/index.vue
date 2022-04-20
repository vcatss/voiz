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
                Email
            </label>
            <input v-model="model.email" class="outline-none border border-gray-100 rounded-xl px-6 py-2 shadow-md"/>
        </section>
        <section class="grid grid-cols-1 w-full gap-2 mb-2">
            <label>
                Mật khẩu
            </label>
            <input v-model="model.password" class="outline-none border border-gray-100 rounded-xl px-6 py-2 shadow-md"/>
        </section>
        <section class="grid grid-cols-1 w-full gap-2 mb-2">
            <label>
                Nhập lại mật khẩu
            </label>
            <input v-model="model.rePassword" class="outline-none border border-gray-100 rounded-xl px-6 py-2 shadow-md"/>
        </section>
        <section class="py-2 flex justify-end w-full">
            <button @click="register()" type="button" class="rounded-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                Đăng ký
            </button>
        </section>
        <div v-if="error" class="grid grid-cols-1 p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
            <span class="font-medium">Danger alert!</span>
            <span v-for="(item,index) in error" :key="index">
                {{item}}
            </span>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            model: {
                username: "",
                password: "",
                rePassword: "",
                email: "",
            },
            error: null
        }
    },
    methods: {
        async register(){
            try {
                let data = await this.$axios.post("/user/api/register", this.model);
                console.log(data)
            }
            catch(err){
                this.error = err.response.data.message
                console.log(this.error)
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