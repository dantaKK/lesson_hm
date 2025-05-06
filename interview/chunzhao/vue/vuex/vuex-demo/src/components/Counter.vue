<template>
    <div>
     {{count}}
     <button @click="increment">+</button>
    </div>
</template>

<script setup>
// local 
// hooks
import { computed } from 'vue';
import {useStore} from 'vuex'

const store=useStore()
const count = computed(() => store.state.count) // 读
const increment = () => store.dispatch('increment') // action

</script>

<style lang="scss" scoped>

</style>