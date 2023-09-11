// cada file es un endpoint
export default defineEventHandler((event) => {
  return {  
    hello: 'hello from server api!'
  }
})
