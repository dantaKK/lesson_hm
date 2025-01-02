<template>
 <div>
    <p id="count">Lifecyle Component - Count: {{ count }}</p>
 </div>
</template>

<script setup>
import {
    defineProps,
    onMounted,
    onBeforeMount,
    onUnmounted,
    onBeforeUnmount,
    onUpdated,
    onBeforeUpdate
      } from 'vue'
let props=defineProps({
   count:{
    type:Number,
    required: true   
}
})


// console.log('haha');

onBeforeMount(()=>{
    console.log(document.getElementById('count'));
  console.log('挂载之前');
})
// 组件有生老病死 

onMounted(()=>{
    // on 某个阶段
    // mounted 挂载
    // 已经完成了挂载
    console.log(document.getElementById('count'));
  console.log('组件已经挂载');
})

onBeforeUpdate(()=>{
  console.log('组件即将更新');
})
onUpdated(()=>{
  console.log('组件已经更新');
})

onBeforeUnmount(()=>{
  console.log('组件即将卸载');
})
onUnmounted(()=>{
  console.log('组件已经卸载');
})
</script>

<style  scoped>
 
</style>