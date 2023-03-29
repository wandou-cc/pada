
<template>
    <NuxtLayout>         
        <template #content>
            <div class="pada-home">
                <div class="pada-baseinfo">
                    <div class="pada-title-model">
                        <div class="pada-title">HELLO I AM A PADA</div>
                        <div class="pada-second-title">
                            Front-end developer / Amateur designer. Currently working at DiDi.
                            I like making interesting projects.
                        </div>
                    </div>
                    <div class="pada-待定">
                        <!-- <pada-button> 按钮DIANJ </pada-button> -->
                    </div>
                </div> 
                <div class="pada-outlink pada-shadow">
                    <n-button strong secondary>  
                        <template #icon>
                            <n-icon><logo-github /></n-icon>
                        </template>
                        github
                    </n-button>
                </div>
                <div class="pada-projects">
                    <h1 class="pada-title">Projects</h1>
                    <n-row gutter="24" item-responsive class="pada-projects-center">
                        <n-col :span="8" v-for="item in ProjectsList" :key="item.id">
                            <div class="pada-project-item pada-shadow">
                                <div class="pada-project-item-icon">
                                    <img />
                                </div>
                                <div class="pada-project-item-center">
                                    <p class="flex flex-row justify-center text-green-500 font-bold">ceshi</p>
                                    <p>这里是二级这里是二是二级这里是二级</p>
                                </div>
                            </div>
                        </n-col>
                    </n-row>
                </div>
                <div class="pada-bottom">
                    <h1>超儿子</h1>
                    <div class="list" v-for="item in list">
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
        packageName: 'blogUi',
        githubUrl: 'https://www.naiveui.com/zh-CN/os-theme/components/icon'
    },
    {
        id: 2,
        icon: 'douyin.svg',
        packageName: 'blogUi',
        githubUrl: 'https://www.naiveui.com/zh-CN/os-theme/components/icon'
    },
    {
        id: 3,
        packageName: 'blogUi',
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

<style lang="less" scoped>
.pada-home {
    padding: 20vh 0;
}

.pada-baseinfo {
    display: flex;
    border: .0625rem solid teal;
    height: 30vh;

    .pada-title-model {
        width: 55%;
    }

    .pada-待定 {
        flex: 1;
    }

}

.pada-outlink {
    margin-top: 2vh;
    // border: .0625rem solid teal;
    display: flex;
    border-radius: .125rem;
    justify-content: center;
    padding: .3125rem;
}

.pada-projects {
    &center {
        // display: flex;
        // justify-content: space-around;
    }

    .pada-project-item {
        display: flex;
        align-items: center;
        border-radius: .625rem;
        padding: .9375rem .625rem;
        &-icon {
            width: 3.125rem;
            height: 50px;
            img {
                height: 100%;
                width: 100%;
            }
        }
        &-center {
           flex: 1;
           height: 100%;
           margin-left: 20px;
        }
    }
}



.pada-bottom {
    .list {
        display: flex;
        justify-content: space-between;

    }
}
</style>
