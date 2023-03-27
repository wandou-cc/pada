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
            <n-button type="primary" dashed> Primary </n-button>
          </div>
        </div>
        <div class="pade-center">
          <h1>给超儿子头打歪</h1>
          <n-grid cols="3" item-responsive>
            <n-grid-item span="">
              <div class="green">1</div>
            </n-grid-item>
            <n-grid-item>
              <div class="green">2</div>
            </n-grid-item>
            <n-grid-item>
              <div class="green">3</div>
            </n-grid-item>
            <n-grid-item>
              <div class="green">4</div>
            </n-grid-item>
            <n-grid-item>
              <div class="green">5</div>
            </n-grid-item>
            <n-grid-item>
              <div class="green">6</div>
            </n-grid-item>
          </n-grid>
        </div>
        <div class="pada-bottom">
          <h1>超儿子</h1>
          <div class="list" v-for="item in list">
            <span>{{item.title}}</span>
            <span>{{item.data}}</span>
          </div>
        </div>
      </div>
    </template>
  </NuxtLayout>
</template>
<script lang="ts" setup>
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
  .pada-baseinfo {
    display: flex;
    border: 1px solid teal;
    height: 30vh;
  }
  .pada-title-model {
    width: 55%;
  }
  .pada-待定 {
    flex: 1;
  }
  .pade-center {
    .green {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100px;
      background-color: rgba(0, 128, 0, 0.24);
      margin: 10px;
    }
  }
  .pada-bottom{

    .list{
      display: flex;
      justify-content: space-between;

    }
  }
}
</style>
