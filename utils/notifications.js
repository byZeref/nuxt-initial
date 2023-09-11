import { useUserStore } from "~/stores/user"

export const loginNotify = (type, error) => {
  const userStore = useUserStore()
  const title = type === 'success' ? 'Welcome' : 'Error'
  const message = type === 'success' ? userStore.email : error
  ElNotification({
    title,
    message,
    type,
  })
}