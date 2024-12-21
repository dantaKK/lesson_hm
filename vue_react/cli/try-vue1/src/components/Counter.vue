<template>
    <div class="counter">
        <p>Count:{{ count }}</p>
        <button @click="Increment">+1</button>
        2
    </div>
</template>

<script setup>
  import {ref} from 'vue'

  const count = ref(0)
  const Increment = () => {
    count.value++
  }
</script>
<style >
.counter{
  text-align: center;
  margin-top: 50px;
}
button{
  padding: 10px 20px;
  font-size: 16px;
}
</style>