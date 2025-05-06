<!-- <template>
  <div>
    <div ref="my">Hello,vue!</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const my = ref(null)
onMounted(() => {
  console.log(my.value)
})
</script>

<style lang="scss" scoped>

</style> -->

<template>
  <div>
    <input v-focus type="text" placeholder="自动获取焦点">
  </div>
</template>

<script setup>
// 定义自定义指令
const vFocus = {
  mounted(el) {
    // 元素挂载后自动获取焦点
    el.focus(); 
  }
};
</script>

<style scoped>
</style>