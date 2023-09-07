<script setup>
const { ENDPOINT } = config
// useLazyFetch() DO NOT blocks navigation until promise is resolved
const { data: users } = await useLazyFetch('/users', {
  baseURL: ENDPOINT
})

</script>

<template>
  <div>
    <span class="text-3xl">Users</span>
    <div class="flex flex-col">
      <div class="flex my-1" v-for="{ id, firstname, lastname, email } in users" :key="id">
        <div><b>{{ firstname + ' ' + lastname }}</b> | {{ email }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
