<template>    
  <div class="bg-slate-700 min-h-[100vh] w-full">
    <slot />
  </div>
</template>

<script setup>
import { useUserStore } from '@/stores/user'
const userStore = useUserStore()
onBeforeMount(() => {
  userStore.loadLocalData()
  if (userStore.logged) return navigateTo('/')
})
</script>