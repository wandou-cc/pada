<script lang="ts" setup>
defineProps({
  icon: String,
  border: {
    type: String,
    default: 'solid'
  }
})
</script>

<template>
  <div class="pada-button">
    
    <slot />
  </div>
</template>

<style lang="less" scoped>

</style>