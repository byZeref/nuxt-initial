<script setup>
import { useUserStore } from "@/stores/user"
import { storeToRefs } from "pinia"
const userStore = useUserStore()
const { logged } = storeToRefs(userStore)

const logout = () => {
  return userStore.logout()
}
</script>

<template>
  <div class="w-full h-20 bg-slate-500 flex justify-end">
    <NuxtLink to="/" class="p-2 flex items-center justify-center min-w-[100px]">Home</NuxtLink>
    <NuxtLink to="/posts" class="p-2 flex items-center justify-center min-w-[100px]">Posts</NuxtLink>
    <NuxtLink to="/users" class="p-2 flex items-center justify-center min-w-[100px]">Users</NuxtLink>
    <NuxtLink to="#" @click="logout" class="p-2 flex items-center justify-center min-w-[100px]">Logout</NuxtLink>
    <!-- <NuxtLink v-if="!logged" to="/auth" class="p-2 flex items-center justify-center min-w-[100px]">Login</NuxtLink> -->
  </div>
</template>

<style scoped>

</style>
