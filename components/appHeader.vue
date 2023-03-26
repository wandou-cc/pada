<template>
    <n-layout>
        <div class="perch-header" />
        <n-layout-header bordered class="c-navtool-header">
            <n-menu :value="selectedKey" mode="horizontal" :options="menuOptions" />
            <n-button @click="changeTheme">
                切换主题
            </n-button>
        </n-layout-header>
    </n-layout>
</template>

<script setup lang="ts">
import getMenu from '@/utils/renderIcon'
import { ref, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import type { MenuOption } from 'naive-ui'
const emits = defineEmits(['changeTheme'])

let resMenuData = []
const menuOptions = ref<MenuOption[]>([])
const selectedKey = ref('/test')
const router = useRouter()
const scroll = ref(0)

watch(() => router.currentRoute.value.path, (n, o): void => {
    selectedKey.value = n
}, {
    immediate: true
})

onMounted(() => {
    setTimeout(async () => {
        resMenuData = [
            {
                label: '导航',
                key: '1',
                url: '/navTool'
            },
            {
                label: '测试跳转',
                key: '2',
                url: '/test'
            }
        ]
        menuOptions.value = await getMenu(resMenuData)
    })

    // window.onscroll = () => {
    //     scroll.value = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    //     console.log(scroll.value)
    // }
})

const changeTheme = () => {
    emits('changeTheme')
}
</script>

<style scoped lang="less">
.c-navtool-header {
    position: fixed;
    top: 0;
    left: 0;
    height: @header-height;
    display: flex;
    // justify-content: center;
    align-items: center;
}
.perch-header {
    height: @header-height;
}
</style>
