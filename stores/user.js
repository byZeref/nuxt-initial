import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const token = ref('')
  const logged = ref(false)

  const login = (tok) => {
    token.value = tok
    logged.value = true
  }

  return { token, logged, login }
})