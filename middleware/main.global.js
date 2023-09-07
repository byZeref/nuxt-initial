import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'

export default defineNuxtRouteMiddleware((to, from) => {
  // console.log(to);
  const userStore = useUserStore()
  const { logged, loading } = storeToRefs(userStore)
  // loading.value = true
  const allowDefault = ['auth']
  if (!logged.value && !allowDefault.includes(to.name)) {
    return navigateTo('/auth')
  }

})