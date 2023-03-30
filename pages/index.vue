
<template>
    <NuxtLayout>         
        <template #content>
            <div class="h-20 mt-40">
                <div class="flex">
                    <div class="">
                        <div class="">HELLO I AM A PADA</div>
                        <div class="">
                            Front-end developer / Amateur designer. Currently working at DiDi.
                            I like making interesting projects.
                        </div>
                    </div>
                    <div class="">
                        <!-- <pada-button> 按钮DIANJ </pada-button> -->
                    </div>
                </div> 
                <div class="">
                    <n-button strong secondary>  
                        <template #icon>
                            <n-icon><logo-github /></n-icon>
                        </template>
                        github
                    </n-button>
                </div>
                <div class="">
                    <h1 class="">Projects</h1>
                    <n-row gutter="24" item-responsive class="">
                        <n-col :span="8" v-for="item in ProjectsList" :key="item.id">
                            <n-card :title="item.packageName" hoverable>
                               <div class="flex items-center">
                                    <img  class="w-10 mr-5" :src="requireImg('img/' + item.icon)" alt="">
                                    <span>1</span>
                               </div>
                            </n-card>
                        </n-col>
                    </n-row>
                </div>
                <div class="">
                    <h1>超儿子</h1>
                    <div class="" v-for="item in list">
                        <span>{{ item.title }}</span>
                        <span>{{ item.data }}</span>
                    </div>
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

const list = [
    {
        title: "超儿子是个猪猪，猪猪猪猪",
        data: "2023-01-01",
    },
    {
        title: "超儿子是个猪猪，猪猪猪猪",
        data: "2023-01-01",
    },
    {
        title: "超儿子是个猪猪，猪猪猪猪",
        data: "2023-01-01",
    },
    {
        title: "超儿子是个猪猪，猪猪猪猪",
        data: "2023-01-01",
    },
    {
        title: "超儿子是个猪猪，猪猪猪猪",
        data: "2023-01-01",
    },
];
</script>
