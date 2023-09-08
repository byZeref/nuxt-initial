<script setup>
import { useUserStore } from '@/stores/user'
const userStore = useUserStore()
onBeforeMount(() => userStore.loadLocalData())
</script>

<template>
  <!-- <Loading v-if="userStore.loading" /> -->
  <NuxtLayout>
      <NuxtLoadingIndicator color="#ea580c" />
      <NuxtPage />
  </NuxtLayout>
</template>

<style lang="scss">
@use "~/assets/main.scss";
@use "~/assets/transitions.scss";
</style>
