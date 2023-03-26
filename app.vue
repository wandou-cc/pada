<template>
    <n-loading-bar-provider>
        <n-config-provider :theme="theme" :locale="locale" :date-locale="dateLocale" inline-theme-disabled>
            <!-- <appHeader @change-theme="changeTheme" /> -->
            <NuxtPage />
        </n-config-provider>
    </n-loading-bar-provider>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { darkTheme, zhCN, dateZhCN } from 'naive-ui'
import type { GlobalTheme, NLocale, NDateLocale } from 'naive-ui'
const theme = ref<GlobalTheme | null>(null)
const locale = ref<NLocale | null>(null)
const dateLocale = ref<NDateLocale | null>(null)
theme.value = null
const changeTheme = () => {
    theme.value = darkTheme
}
</script>
