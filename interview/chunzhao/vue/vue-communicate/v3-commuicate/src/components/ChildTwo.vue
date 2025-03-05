<template>
    <div>
     ChildTwo
     <!-- <ChildTwo  /> -->
    {{msg2}}
    </div>
</template>

<script setup>
// import ChildTwo from './ChildTwo.vue'
import { defineProps } from 'vue';
const props = defineProps({
   msg2:{
      type:String,
      required:true
   }
})

</script>

<style  scoped>

</style>