<script setup>
const show = ref(false)
const mounted = ref(false)
const notified = computed(() => localStorage.getItem('notified'))

// acepta todos los metodos
const { data } = await useFetch('/api/hello')
const { hello } = data.value
console.warn(hello);

// solo acepta GET
const { data: onlyGet } = await useFetch('/api/test', {
  method: 'get'
})
console.warn(onlyGet.value);

// solo acepta POST
const { data: onlyPost } = await useFetch('/api/test', {
  method: 'post',
  body: {
    name: 'Pancho',
    lastName: 'Villa'
  }
})
const { email, age } = onlyPost.value.data
console.warn(`email: ${email}`);
console.warn(`age: ${age}`);

onMounted(() => {
  mounted.value = true
  if (!notified.value) {
    loginNotify('success')
    localStorage.setItem('notified', 1)
  }
})
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
