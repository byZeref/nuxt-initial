import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const email = ref('')
  const token = ref('')
  const logged = ref(false)

  const login = (_token, _email) => {
    token.value = _token
    email.value = _email
    logged.value = true
  }

  return { email, token, logged, login }
})