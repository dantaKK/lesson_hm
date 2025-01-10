<template>
    <div>
     <h2>CompA</h2>
     <p>count:{{count}}</p>
     <button @click="increment" ></button>
     <CompSubA />
    </div>
</template>

<script setup>
// 引入中央模块
import CompSubA from './CompSubA.vue';
import {toRefs} from 'vue';
import { useCounterStore } from '../store/counter';
import { ref } from 'vue';
const counterStore = useCounterStore(); // 本地和中央链接的过程
const {count,increment } = toRefs( counterStore); 
console.log(counterStore);
</script>

<style  scoped>

</style>