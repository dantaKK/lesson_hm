<template>
  <div>
    <p v-if="mousePos">{{ mousePos.x }}</p>
    <p v-if="mousePos">{{ mousePos.y }}</p>
  </div>
</template>

<script setup>
import { useMouse,usMemo } from '../hooks/useMouse';
import Hook from '../hooks/useMouse';
console.log(Hook)
console.log(usMemo)
// 直接使用整个响应式对象，不要解构
const mousePos = useMouse();
</script>

<style scoped>
/* 样式代码 */
</style>