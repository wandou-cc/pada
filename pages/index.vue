
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
                        <n-button strong v-bind="{ ...item.buttonAttr }" :class="`outlink-${item.icon}`"
                            class="outlink-button-icon m-2 flex-1" v-for="(item, index) in outlinkList" :key="index">
                            <template #icon v-if="item.icon">
                                <!-- <n-icon :component="item.icon" v-bind="{ ...item.iconAttr }" /> -->
                                <!-- <img :src="requireImg('img/' + item.icon)" v-bind="{ ...item.iconAttr }" alt=""> -->
                                <div class="icon"></div>
                            </template>
                            <span v-if="item.name"> github </span>
                        </n-button>
                    </div>
                </div>
                <div>
                    <div>
                        <h1 class="pada-title">Projects</h1>
                    </div>
                    <div class="flex">
                        <n-card class="mr-3 flex-1 cursor-pointer" :title="item.packageName" hoverable
                            v-for="item in ProjectsList" :key="item.id">
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
// import { LogoGithub } from "@vicons/ionicons5"

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

const outlinkList = [
    {
        icon: 'github',
        iconAttr: {},
        buttonAttr: {},
        name: 'github',
        url: 'https://www.naiveui.com/zh-CN/os-theme/components/icon'
    },
    {
        icon: 'bilibili',
        iconAttr: {},
        url: 'https://www.naiveui.com/zh-CN/os-theme/components/icon'
    }
]
</script>


<style scoped lang="less">
.pada-title {
    @apply text-2xl mt-5 mb-5;
}

.outlink-button-icon { 
    .icon {
        @apply transition-all duration-300 h-full w-full
    }
    &:hover {
        .icon {
            @apply transition-all duration-300
        }
    }
}


// .outlink-button-icon {
//     .icon {
//         height: 100%;
//         width: 100%;
//         transition: all @transition-speed;
//     }

//     &:hover {
//         .icon {
//             transition: all @transition-speed;
//         }
//     }
// }

.outlink-github {
    .icon {
        background: url('~/assets/img/github.svg') no-repeat center;
    }

    &:hover {
        .icon {
            background: url('~/assets/img/douyin.svg') no-repeat center;
        }

        background-color: aqua;
    }
}</style>