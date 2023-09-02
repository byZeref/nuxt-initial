<template>
  <NavBar />
  <main>
    <slot />
  </main>
  <Footer class="footer" />
</template>

<style lang="scss">
@use "~/assets/styles.scss";
// .footer {
//   margin-top: auto;
// }
</style>