<script setup>
import { useUserStore } from '@/stores/user'
const userStore = useUserStore()
onBeforeMount(() => userStore.loadLocalData())
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="scss">
@use "~/assets/styles.scss";
</style>
