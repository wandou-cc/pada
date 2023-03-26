// 全局路由中间件 https://juejin.cn/post/7102955197244112909 https://nuxt.com/docs/guide/directory-structure/middleware
export default defineNuxtRouteMiddleware((to, from) => {
    console.log('running global middleware')
})
