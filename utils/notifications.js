export const loginNotify = (type, error) => {
  const title = type === 'success' ? 'Nice' : 'Error'
  const message = type === 'success' ? 'User logged successfully' : error
  ElNotification({
    title,
    message,
    type,
  })
}