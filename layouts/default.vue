<template>
  <NavBar />
  <main>
    <slot />
  </main>
  <Footer class="footer" />
</template>

<script setup>
import { useUserStore } from '@/stores/user'
const userStore = useUserStore()
onBeforeMount(() => userStore.loadLocalData())
</script>

<style lang="scss">
@use "~/assets/styles.scss";
// .footer {
//   margin-top: auto;
// }
</style>