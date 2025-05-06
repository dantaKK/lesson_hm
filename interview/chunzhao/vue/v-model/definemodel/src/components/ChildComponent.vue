<template>
    <input 
      v-model="modelValue" 
      placeholder="输入用户名"
    >
  </template>
  
  <script setup>
  // 定义双向绑定（自动关联 v-model）
  const modelValue = defineModel();
  
  const updateValue = (e) => {
    modelValue.value = e.target.value; // 直接修改，自动触发父组件更新
  };
  </script>