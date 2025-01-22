<script setup>
import DeepWatchExample from './components/DeepWatchExample.vue'
import BaseCard from './components/BaseCard.vue'
import Layout from './components/Layout.vue'
import {
   ref, 
  watch,
  watchEffect,
  }
   from 'vue'
// count 改变后去做点啥? function log 复杂 抖音视频推荐算法 发送 停留的时间
// 模板响应式更新
// 200 - 100  v-if
// computed 计算属性

const num=ref(100)
function incrementNum(){
  num.value++
}


const count = ref(0)
const increment = () => {
  count.value++
}

//watch 监听数据状态
watch(count,(newValue,oldValue)=>{
  // 状态的改变
  // console.log(newValue,oldValue)
  if(newValue%2===0)
  {
    console.log('偶数')
  }
  else{
    console.log('奇数')
  }
},{
  immediate:true,
})

// 监听 订阅发布者模式
// effect 副作用 
watchEffect(()=>{
  console.log(`当前count的值是:${count.value + num.value}`)
})
</script>

<template>
  <div>
    <DeepWatchExample/>
    <p>计数器二:{{ num }}</p>
    <button @click="incrementNum">增加2</button>

    <p>计数器:{{ count }}</p>
    <button @click="increment">增加</button>
    <BaseCard>
      <p>这里是默认插槽的内容,父组件slot形式传入，提升组件的定制性</p>
    </BaseCard>
    <Layout>
    
      <template #header>
        <h1>头部内容，由父组件决定</h1>
      </template>
      <template #main>
        <p>主内容，由父组件决定</p>
      </template>
      <template #footer>
        <p>底部内容，由父组件决定</p>
      </template>
    </Layout>
  </div>
</template>

<style scoped>

</style>
