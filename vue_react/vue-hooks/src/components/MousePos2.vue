<template>
    <div>
      <p>{{mousePos.x}}</p>
      <p>{{mousePos.y}}</p>
    </div>
</template>

<script setup>

import {
  ref,
  reactive,
  onUnmounted,
  onMounted, // 生命周期 life cycle

} from 'vue'

// 灵活
// const x=ref(0)
// const y=ref(0)
// 整体
const mousePos =reactive({
  x:0,
  y:0
})
const mouePosHandler=(e)=>{
      mousePos.x = e.clientX;
      mousePos.y = e.clientY;
      console.log("我还在------")
    }

onMounted(()=>
{
  window.addEventListener('mousemove',mouePosHandler
    // (e)=>{
    //   // // Bug 修复：将逗号替换为分号
    //   // mousePos.x = e.clientX;
    //   // mousePos.y = e.clientY;
    //   // console.log("我还在------")
    // }
  )
})
onUnmounted(()=>{
   window.removeEventListener('mousemove',mouePosHandler)
})
</script>

<style  scoped>

</style>