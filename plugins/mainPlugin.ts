// .ts siempre (no funciona con .js)
export default defineNuxtPlugin(nuxtApp => {
  return {
    provide: {
      hello: (msg: string) => console.log(`Plugin loaded first! ${msg}`)
    }
  }
})