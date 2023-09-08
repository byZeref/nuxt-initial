<script setup>
import { useUserStore } from "@/stores/user"
const userStore = useUserStore()

const active = computed(() => {
  const id = route.name
  const el = document.getElementById(id)

})
const logout = () => {
  return userStore.logout()
}
</script>

<template>
  <div class="w-full h-20 bg-slate-200 border-b-2 border-slate-500 flex justify-end">
    <NuxtLink id="index" to="/" class="router-link p-2 flex items-center justify-center min-w-[100px]">Home</NuxtLink>
    <NuxtLink id="posts" to="/posts" class="router-link p-2 flex items-center justify-center min-w-[100px]">Posts</NuxtLink>
    <NuxtLink id="users" to="/users" class="router-link p-2 flex items-center justify-center min-w-[100px]">Users</NuxtLink>
    <NuxtLink to="/auth" @click="logout" class="router-link p-2 flex items-center justify-center min-w-[100px]">Logout</NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
.router-link {
  color: #475569;
  font-weight: bold;
  &-active, &:hover {
    color: #c2410c;
  }
}
</style>
