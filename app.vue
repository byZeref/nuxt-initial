<script setup>
import { useUserStore } from '@/stores/user'
const userStore = useUserStore()
const { $hello } = useNuxtApp() // plugin
$hello('hello')

// necesario si ssr: true
// onBeforeMount(() => userStore.loadLocalData())
</script>

<template>
  <NuxtLayout>
      <NuxtLoadingIndicator color="#ea580c" />
      <NuxtPage />
  </NuxtLayout>
</template>

<style lang="scss">
@use "~/assets/main.scss";
@use "~/assets/transitions.scss";
</style>
