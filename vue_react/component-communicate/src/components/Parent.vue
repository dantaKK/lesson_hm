<template>
    <div>
      <Child ref="comp" />
      <button @click="handlerClick">按钮</button>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Child from './Child.vue'

const comp = ref(null) // 标记DOM 元素  null 组件没用挂载，DOM 也不在 
const title = ref('hello') // 标记数据
const handlerClick = ()=>{
    console.log(comp,comp.value)
   console.log( comp.value.childName)
   comp.value.someMethod()
}

</script>

<style  scoped>

</style>