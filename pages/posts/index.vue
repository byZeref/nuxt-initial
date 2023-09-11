<script setup>
import { useUserStore } from '@/stores/user'
const userStore = useUserStore()
const { ENDPOINT } = config

/**
 * useFetch()
 * bloquea la navegacion hasta resolver
 * { refresh } - refresh() - vuelve a realizar la peticion
 */
const { data: posts } = await useFetch('/posts', {
  baseURL: ENDPOINT,
  method: 'get',
  headers: {
    Authorization: 'Bearer X'
  },
})

const target = ref()
const view = id => target.value = id

const title = ref('Posts Page')
</script>

<template>
  <!-- SEO solo para esta page -->
  <Head>
    <Title>{{ title }}</Title>
    <Meta name="description" :content="`This is the all ${title}`" />
  </Head>

  <div class="text-3xl mb-5">Posts</div>
  <div class="flex flex-col gap-2">
    <div class="flex" v-for="{ id, slug, title } in posts" :key="id">
      <div class="mr-2 font-bold">{{ slug }}</div>
      <span>| {{ title }}</span>
      <NuxtLink :to="`/posts/${id}`" @click="view(id)" class="py-1 px-4 ml-2 min-h-[32px] flex items-center bg-orange-500">
        <img :id="id" v-if="target === id" src="~/public/loading.svg" alt="">
        <span v-else>Ver</span>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>

</style>
