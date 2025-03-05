<template>
    <div>
  <ChildTwo :msg2="msg2"/>
    </div>
</template>

<script setup>
import ChildTwo from './ChildTwo.vue';
import {ref,reactive} from 'vue'

const msg2=ref('传给子组件的信息2')
// const msg1=reactive("传给子组件的信息2")
</script>

<style lang="scss" scoped>

</style>