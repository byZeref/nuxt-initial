<script setup>
const { ENDPOINT } = config

const { data: users } = await useFetch('/users', {
  baseURL: ENDPOINT
})

</script>

<template>
  <span class="text-3xl">Users</span>
  <div class="flex flex-col">
    <div class="flex my-1" v-for="{ id, firstname, lastname, email } in users" :key="id">
      <div><b>{{ firstname + ' ' + lastname }}</b> | {{ email }}</div>
    </div>
  </div>
</template>

<style scoped></style>
