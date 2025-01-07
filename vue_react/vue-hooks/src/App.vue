<template>
  <div>
   <MousePos v-if="showMouse"/>
   <button @click="toggleMouse" >切换显示</button>
  </div>
</template>

<script setup>
// composition API vue3 核心亮点
import MousePos from "./components/Mouseos.vue"
import {
  ref,
  reactive,
  onMounted, // 生命周期 life cycle
  onUnmounted
} from 'vue'

// 灵活
// const x=ref(0)
// const y=ref(0)
// 整体
const showMouse = ref(true)
const toggleMouse = () => {
  showMouse.value = !showMouse.value
}
</script>

<style  scoped>

</style>
