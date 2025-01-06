<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>

  <div>  
    <router-link to="/home">点我直接回家</router-link>
    <hr>
    <router-link to="/about">点我直接到达关于</router-link>
    <hr>
    <router-view/>
  </div>
  
  
</template>

<style scoped>

</style>
