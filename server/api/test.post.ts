export default defineEventHandler(async (event) => {
  const query = getQuery(event) // luego destructurar query parameters
  const body = await readBody(event)
  const { name, lastName } = body

  
  return {
    data: {
      age: '30',
      email: `${name.toLowerCase()}_${lastName.toLowerCase()}@mail.com`
    }
  }
})
