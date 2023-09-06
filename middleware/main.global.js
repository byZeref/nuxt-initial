import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'

export default defineNuxtRouteMiddleware((to, from) => {
  const userStore = useUserStore()
  const { logged } = storeToRefs(userStore)
  const allowDefault = ['index', 'auth']
  if (!logged.value && !allowDefault.includes(to.name)) {
    return navigateTo('/auth')
  }
})