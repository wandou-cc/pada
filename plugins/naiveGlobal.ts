
import { defineNuxtPlugin } from '#app'
import { createDiscreteApi } from 'naive-ui'

export default defineNuxtPlugin((nuxtApp) => {
    const { loadingBar } = createDiscreteApi(['loadingBar'])

    // // 弹窗
    // nuxtApp.provide('notification', (config: notifConfig): void => {
    //     notification[config.type as keyof typeof notification]({
    //         content: config.content,
    //         meta: config.meta,
    //         duration: config.duration || 2500,
    //         keepAliveOnHover: config.keepAliveOnHover || true
    //     })
    // })

    // nuxtApp.provide('message', (config: messageConfig): void => {
    //     message[config.type as keyof typeof message](
    //         config.content,
    //         {
    //             duration: config.duration || 2500,
    //             keepAliveOnHover: config.keepAliveOnHover || true
    //         })
    // })

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
