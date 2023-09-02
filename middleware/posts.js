export default defineNuxtRouteMiddleware((to, from) => {
  if (to.params.id === '1') {
    return abortNavigation()
    // return navigateTo('/')
  }

  // if (to.path !== '/') {
  //   return navigateTo('/')
  // }
})