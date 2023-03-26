
<script lang="ts" setup>
</script>

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
      </div>
    </template>
  </NuxtLayout>
</template>

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
}
</style>