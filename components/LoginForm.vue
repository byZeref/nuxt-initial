<script setup>
defineProps({
  loading: Boolean
})
defineEmits(['submit'])
const email = ref('')
const password = ref('')

</script>

<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 min-h-full w-full">
    <div class="flex items-center max-lg:hidden">
      <img class="min-w-[400px] ml-[-70px]" src="/blob.svg" alt="">
    </div>
    <el-form class="flex flex-col gap-4 w-full h-full justify-center">
      <h2 class="text-xl text-slate-600 mb-4 text-center">Enter your credentials</h2>
      <div class="flex flex-col md:grid md:grid-cols-3">
        <span class="text-slate-700">Email</span>
        <el-input class="col-span-2" v-model="email" type="email" />
      </div>
      <div class="flex flex-col md:grid md:grid-cols-3">
        <span class="text-slate-700">Password</span>
        <el-input class="col-span-2" v-model="password" type="password" />
      </div>
      <el-button :disabled="loading" type="warning" @click="$emit('submit', {email, password})">
        <img v-if="loading" class="w-4 mr-1" src="loading.svg" alt="">
        <span>Login</span>
      </el-button>
    </el-form>
  </div>
</template>

<style scoped>

</style>
