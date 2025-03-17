<template>
    <div>
    {{count}}
    </div>
  </template>
  
  <script setup>
  import { ref ,watch} from 'vue'
  const count = ref(0);
  // 参数1 依赖的响应式数据 参数2 回调函数 
  watch(count,(newValue,oldValue)=>{
    console.log(newValue,oldValue);
  },{
    immediate:true, // 立即执行
    deep:true   // 深度监听 { { } }
  })
  
  setTimeout(()=>{
    count.value++;
  },1000)
  </script>
  
  <style  scoped>
  
  </style>