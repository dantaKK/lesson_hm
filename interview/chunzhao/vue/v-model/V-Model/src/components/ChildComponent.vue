<script setup>
import { defineProps, defineEmits } from 'vue';

// 使用defineProps接收父组件传递的值
const props = defineProps({
  modelValue: Number // 注意：这里使用的是modelValue而非value
});

// 使用defineEmits来定义需要触发的事件
const emit = defineEmits(['update:modelValue']);

// 定义一个方法来处理计数器的增加
function increment() {
  // 发出事件并带上新的值
  emit('update:modelValue', props.modelValue + 1);
}
</script>

<template>
  <button @click="increment">{{props.modelValue}}</button>
</template>