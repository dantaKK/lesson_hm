<script setup>
  import { ref } from 'vue'
const name = ref('张三')
const age = ref(18)
const sex = ref('男')
</script>

<template>
   <div>
    '我是{{name}},年龄{{age}},性别{{sex}}'
   </div>
</template>

<style scoped>

</style>
