<template>
    <div>
     ComponentA
     <button @click="handeClick">触发事件</button>
    </div>
</template>

<script setup>
// 
import mitt from '../mitt'

const handeClick=()=>{
    mitt.emit("handleChange")
}
</script>

<style lang="scss" scoped>

</style>