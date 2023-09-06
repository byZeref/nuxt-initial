<script setup>
defineProps({
  loading: Boolean
})
defineEmits(['submit'])
const email = ref('')
const password = ref('')

</script>

<template>
  <el-form class="flex flex-col gap-4 w-full">
    <div class="grid grid-cols-2">
      <span class="text-end mr-10 text-slate-700">Username</span>
      <el-input v-model="email" type="email" />
    </div>
    <div class="grid grid-cols-2">
      <span class="text-end mr-10 text-slate-700">Password</span>
      <el-input v-model="password" type="password" />
    </div>
    <el-button type="primary" @click="$emit('submit', {email, password})">
      <img v-if="loading" class="w-4 mr-1" src="loading.svg" alt="">
      <span>Login</span>
    </el-button>
  </el-form>
</template>

<style scoped>

</style>
