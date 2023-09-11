<script setup>
// SEO solo para esta page
useHead({
  title: 'Users Page',
  meta: [
    { name: 'description', content: 'This is the all users page.' }
  ],
})

const { ENDPOINT } = config
/**
 * useLazyFetch()
 * no bloquea la navegacion | permite manejar 'pending' mientras resuelve
 */
const { data: users, pending } = await useLazyFetch('/users', {
  baseURL: ENDPOINT
})

/**
 * useAsyncData()
 * con 'await' - funciona como useFetch() | bloquea la navegacion hasta resolver
 * sin 'await' - no bloquea la navegacion | permite manejar 'pending' mientras resuelve
 * refreshNuxtData('users_key') - vuelve a realizar la peticion | permite manejar 'pending' mientras resuelve
 */
// const { data: users, pending, error } = useAsyncData('users_key', () => $fetch(`${ENDPOINT}/users`))
</script>

<template>
  <div>
    <span class="text-3xl">Users</span>
    <div class="flex flex-col">
      <div v-if="pending">Loading...</div>
      <Transition name="fade">
        <div v-if="!pending">
          <div class="flex my-1" v-for="{ id, firstname, lastname, email } in users" :key="id">
            <div><b>{{ firstname + ' ' + lastname }}</b> | {{ email }}</div>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<style scoped></style>
