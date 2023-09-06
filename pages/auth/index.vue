<script setup>
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'

const userStore = useUserStore()
// const { token, logged } = storeToRefs(userStore)
const { LOGIN } = config
const email = ref('')
const password = ref('')
const loading = ref(false)
const error = ref('Please check your internet connection')


const login = async () => {
  const payload = {
    email: email.value,
    password: password.value
  }
  loading.value = true
  await useFetch('/api/login', {
    baseURL: LOGIN,
    method: 'post',
    body: payload,
    onResponse({ response }) {
      const { status, _data: data } = response
      if (status !== 200) return;
      console.log('response ok', response);
      const token = data.token
      userStore.login(token)
      clearForm()
      notify('success')
    },
    onRequestError() {
      console.log('request error | check your internet connection');
      notify('error')
    },
    onResponseError({ request, response, options }) {
      const { status, _data: data } = response
      console.log('error with status', status);
      console.log(data.error);
      error.value = data.error
      notify('error')
    },
  })
  loading.value = false
}

const clearForm = () => {
  email.value = ''
  password.value = ''
}

const notify = (type) => {
  const title = type === 'success' ? 'Nice' : 'Error'
  const message = type === 'success' ? 'User logged successfully' : error.value
  ElNotification({
    title,
    message,
    type,
  })
}
</script>

<template>
  
  <div class="flex justify-center items-center min-h-[80vh]">
    <div class="flex flex-col justify-center w-[50vw] bg-slate-300 min-h-[500px] p-10">
      <h2 class="text-2xl text-slate-600 mb-10 text-center">Enter your credentials</h2>
      <el-form class="flex flex-col gap-4 w-full">
        <div class="grid grid-cols-2">
          <span class="text-end mr-10 text-slate-700">Username</span>
          <el-input v-model="email" type="email" />
        </div>
        <div class="grid grid-cols-2">
          <span class="text-end mr-10 text-slate-700">Password</span>
          <el-input v-model="password" type="password" />
        </div>
        <el-button type="primary" @click="login">
          <img v-if="loading" class="w-4 mr-1" src="loading.svg" alt="">
          <span>Login</span>
        </el-button>
      </el-form>
    </div>
  </div>
</template>

<style scoped>

</style>
