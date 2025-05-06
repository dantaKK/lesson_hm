<!-- <template>
  <div>
    <h1>Counter: {{ counter }}</h1>
    
    <ChildComponent v-model="counter" />
  </div>
</template> -->

<script setup>
// import { ref } from 'vue';
// import ChildComponent from './components/';

// 创建一个响应式变量
// const counter = ref(0);
// 
import { ref } from 'vue';
import CustomInput from './components/CustomInput.vue';

// 创建一个响应式变量
const message = ref('');
</script> 



<template>
  <div>
    <h1>当前输入的内容: {{ message }}</h1>
    <!-- 使用v-model将message与CustomInput组件绑定 -->
    <CustomInput v-model.lazy="message" />
  </div>
</template>

