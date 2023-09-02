<script setup>

const { ENDPOINT } = config
const { data: posts } = await useFetch('/posts', {
  baseURL: ENDPOINT,
  method: 'get',
  headers: {
    Authorization: 'Bearer X'
  },
  // onRequest({ request, options }) {
  //   options.headers.authorization = 'Bearer XDD'
  // },
})

const target = ref()
const view = id => target.value = id
</script>

<template>
  <div class="text-3xl mb-5">Posts</div>
  <div class="flex flex-col gap-2">
    <div class="flex" v-for="{ id, slug, title } in posts" :key="id">
      <div class="mr-2 font-bold">{{ slug }}</div>
      <span>| {{ title }}</span>
      <NuxtLink :to="`/posts/${id}`" @click="view(id)" class="py-1 px-4 ml-2 bg-emerald-500">
        <span :id="id" v-if="target === id">Loading...</span>
        <span v-else>Ver</span>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>

</style>
