
import { defineNuxtPlugin } from '#app'
import { createDiscreteApi } from 'naive-ui'


export default defineNuxtPlugin((nuxtApp) => {
    
    const { loadingBar } = createDiscreteApi(['loadingBar'])

    nuxtApp.hook('page:start', (e) => {
        loadingBar?.start()
    })
    nuxtApp.hook('page:finish', (e) => {
        setTimeout(() => {
            loadingBar?.finish()
        }, 100)
    })

    nuxtApp.hook('app:error', (e) => {
        if (process.client) {
            setTimeout(() => {
                loadingBar?.finish()
            }, 100)
        }
    })
})
