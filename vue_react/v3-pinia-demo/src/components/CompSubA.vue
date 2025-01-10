<template>
    <div>
      CompSubA
      {{counterStore.count}}
    </div>
</template>

<script setup>
import { useCounterStore } from '../store/counter';

const counterStore = useCounterStore();

const {count,increment } = counterStore; // 值， 响应式

</script>

<style  scoped>

</style>