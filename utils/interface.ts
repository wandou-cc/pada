// 提示
interface notifConfig {
    type: string | number,
    content: string,
    meta: string,
    duration?: number,
    keepAliveOnHover?: boolean
}

// 消息
interface messageConfig {
    content: string,
    duration?: number
}

export {
    notifConfig

}
