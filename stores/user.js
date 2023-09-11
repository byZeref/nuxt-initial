import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const email = ref('')
  const token = ref('')
  const logged = ref(false)
  const loading = ref(false)
  
  const loadLocalData = () => {
    email.value = JSON.parse(localStorage.getItem('auth'))?.email
    token.value = JSON.parse(localStorage.getItem('auth'))?.token
    logged.value = !!JSON.parse(localStorage.getItem('auth'))
  }
  
  const login = (_token, _email) => {
    token.value = _token
    email.value = _email
    logged.value = true
    const data = {
      token: token.value,
      email: email.value,
    }
    localStorage.setItem('auth', JSON.stringify(data))
  }
  
  const logout = () => {
    token.value = ''
    email.value = ''
    logged.value = false
    localStorage.removeItem('auth')
    localStorage.removeItem('notified')
    return navigateTo('/auth')
  }

  // funciona con ssr: false - en true da error al acceder al api del client side (localStorage)
  loadLocalData()
  
  return { email, token, logged, login, logout, loadLocalData, loading }
})