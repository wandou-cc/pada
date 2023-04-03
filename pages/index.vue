
<template>
    <NuxtLayout>
        <template #content>
            <div class="h-20 mt-50">
                <div class="flex items-center h-40">
                    <div>
                        <div class="text-5xl font-900">HELLO I'm PADA</div>
                        <div class="mt-5 mb-5">
                            Front-end developer / Amateur designer. Currently working at DiDi.<br />
                            I like making interesting projects.
                        </div>
                    </div>
                    <div class="flex items-center justify-evenly h-10 ml-30">
                        <n-button strong secondary class="m-2 flex-1">
                            <template #icon>
                                <n-icon><logo-github /></n-icon>
                            </template>
                            github
                        </n-button>
                        <n-button strong secondary class="m-2 flex-1">
                            <template #icon>
                                <n-icon><logo-github /></n-icon>
                            </template>
                            github
                        </n-button>
                    </div>
                </div>

                <div>
                    <div>
                        <h1 class="pada-title">Projects</h1>
                    </div>
                    <div class="flex">
                        <n-card class="m-3  flex-1" :title="item.packageName" hoverable v-for="item in ProjectsList"
                            :key="item.id">
                            <div class="flex items-center">
                                <img class="w-10 mr-5" :src="requireImg('img/' + item.icon)" alt="">
                                <span>1</span>
                            </div>
                        </n-card>
                    </div>
                </div>
                <div>
                    <h1 class="pada-title">Projects</h1>

                </div>
            </div>
        </template>
    </NuxtLayout>
</template>
<script lang="ts" setup>
import { LogoGithub } from "@vicons/ionicons5"

const ProjectsList = [
    {
        id: 1,
        icon: 'QQ.svg',
        packageName: 'QQ',
        githubUrl: 'https://www.naiveui.com/zh-CN/os-theme/components/icon'
    },
    {
        id: 2,
        icon: 'douyin.svg',
        packageName: '抖音',
        githubUrl: 'https://www.naiveui.com/zh-CN/os-theme/components/icon'
    },
    {
        id: 3,
        packageName: 'vscode',
        icon: 'vscode.svg',
        githubUrl: 'https://www.naiveui.com/zh-CN/os-theme/components/icon'
    }
]
</script>


<style scoped lang="less">
.pada-title {
    @apply text-2xl m-5;
}
</style>