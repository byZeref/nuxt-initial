<script setup>
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'

// login error - peter@klaven
const userStore = useUserStore()
const { LOGIN } = config
const loading = ref(false)
const error = ref('Please check your internet connection')

const login = async (payload) => {
  const { email } = payload
  loading.value = true
  await useFetch('/api/login', {
    baseURL: LOGIN,
    method: 'post',
    body: payload,
    onResponse({ response }) {
      const { status, _data: data } = response
      if (status !== 200) return;
      console.log('response ok', response);
      userStore.login(data.token, email)
      loginNotify('success', error.value)
      return navigateTo('/')
    },
    onRequestError() {
      console.log('request error');
      error.value = 'Please check your internet connection'
      loginNotify('error', error.value)
    },
    onResponseError({ request, response, options }) {
      const { status, _data: data } = response
      console.log('error with status', status);
      console.log(data.error);
      error.value = data.error
      loginNotify('error', error.value)
    },
  })
  loading.value = false
}

</script>

<template>
  <div class="flex justify-center items-center min-h-[80vh]">
    <div class="flex flex-col justify-center w-[50vw] bg-slate-300 min-h-[500px] p-10 rounded-md">
      <h2 class="text-2xl text-slate-600 mb-10 text-center">Enter your credentials</h2>
      <LoginForm :loading="loading" @submit="login" />
    </div>
  </div>
</template>

<style scoped>

</style>
