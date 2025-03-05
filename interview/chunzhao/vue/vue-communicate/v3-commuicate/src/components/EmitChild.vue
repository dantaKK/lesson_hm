<template>
    <div>
     <button @click="handleClick">
        按钮
     </button>
     <button @click="emit('mtClick','hello')">
        按钮
     </button>
    </div>
</template>

<script setup>
const emit =defineEmits(['mtClick'])

const handleClick = () => {
    emit('mtClick','hello')
}
</script>

<style  scoped>

</style>