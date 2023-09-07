const { LOGIN } = config

/**
 * Obtiene un email valido para el login
 */
export const checkToken = async () => {
  const { data } = await useFetch('/api/users?page=1', {
    baseURL: LOGIN,
    method: 'get',
  })
  const { data: arr } = data.value
  const email = arr.find(el => el.id === 4).email
  return { email, password: 'cityslicka' }
}