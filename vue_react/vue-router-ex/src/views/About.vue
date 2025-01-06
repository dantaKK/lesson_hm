<template>
    <div>
       来到关于
    <hr>
     <button @click="goto">点击进入文章</button> 
     <router-view></router-view>
    </div>
  
</template>
<script setup>

import {useRouter} from 'vue-router'
const router = useRouter() // 路由实例 总管 


 const goto=()=>{
        // js 跳转 
        // Browser Object Model  >  DOM
        // BOM API
        // 破坏了什么
        // window.location.href = '/'
        router.push('/about/meta')
    }

</script>

<style lang="scss" scoped>

</style>