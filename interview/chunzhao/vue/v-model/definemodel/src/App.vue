<template>
  <CustomInput v-model="username" />
  <p>用户名: {{ username }}</p>
</template>

<script setup>
import { ref } from 'vue';
import CustomInput from './components/ChildComponent.vue';

const username = ref('');
</script>