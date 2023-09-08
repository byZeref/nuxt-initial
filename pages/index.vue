<script setup>
const show = ref(false)
const mounted = ref(false)

onMounted(() => mounted.value = true)
</script>

<template>
  <div>
    <Transition name="fade">
      <h1 v-if="mounted" class="text-3xl font-bold">Hello World!!!</h1>
    </Transition>
    <Subtitle />
    <div class="mt-10">
      <el-button type="primary" @click="show = !show">Transition!</el-button>
      <Transition name="fade">
        <div v-if="show">
          <span>TARGET OF TRANSITION</span>
        </div>
      </Transition>
    </div>
  </div>
</template>

<style scoped>
</style>
