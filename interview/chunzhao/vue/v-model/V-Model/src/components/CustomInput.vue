<template>
    <input 
      :value="modelValue" 
      @input="$emit('update:modelValue', $event.target.value)" 
      placeholder="请输入内容..." 
    />
  </template>
  
  <script setup>
  // 使用defineProps接收父组件传递的值
  const props = defineProps(['modelValue']);
  
  // 使用defineEmits定义需要触发的事件
  const emit = defineEmits(['update:modelValue']);
  </script>