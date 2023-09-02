<script setup>
definePageMeta({
  middleware: 'posts'
})
const { ENDPOINT } = config
const route = useRoute()
const { id } = route.params
const { data: post } = await useFetch(`/posts/${id}`, {
  baseURL: ENDPOINT
})
</script>

<template>
  <div class="text-xl mb-5">Post with ID: {{ id }}</div>
  <div>{{ post.content }}</div>
</template>

<style scoped>

</style>
