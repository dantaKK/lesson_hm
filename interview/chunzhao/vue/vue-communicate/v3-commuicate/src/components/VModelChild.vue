<template>
    <div>
    {{ value }}
    <button @click="handleClick">按钮</button>
    </div>
</template>

<script setup>
import {defineEmits} from 'vue'
defineProps(['value'])
const emit = defineEmits(['value'])
const handleClick =() =>{
    emit("update:value","新的value")
}
</script>

<style lang="scss" scoped>

</style>