<template>
  <div>
    <router-link to="/">首页</router-link>
    <router-link to="/page-a">页面A</router-link>
    <router-link to="/page-b">页面B</router-link>
    <!-- <Home /> -->
    <!-- <component :is="visComponent" /> -->
    <hr />

    <router-view v-slot="{Component}">
      <keep-alive :include="['Home']">
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
  <button @click="show=!show">Toggle</button>
  <transition name="scale">
      <div v-if="show" style="background: #f00; height: 200px; width: 200px;"></div>
  </transition>
  <transition>
      <div v-if="show" style="background: #f00; height: 100px; width: 100px;"></div>
  </transition>
  

</template>

<script setup>
import Home from "./components/Home.vue";
import PageA from "./components/PageA.vue";
import PageB from "./components/PageB.vue";
// import { ref } from "vue";
// const visComponent = ref(Home);
// setTimeout(() => {
//   visComponent.value = PageA;
// }, 3000);
import { ref } from 'vue';
// 使用 ref 创建响应式数据 show，初始值为 false
const show = ref(false);
</script>

<style  scoped>
/* 定义过渡效果的 CSS 类 */
/* 进入过渡的开始状态 */
.v-enter-from {
  opacity: 0;
}
/* 进入过渡的结束状态 */
.v-enter-to {
  opacity: 1;
}
/* 离开过渡的开始状态 */
.v-leave-from {
  opacity: 1;
}
/* 离开过渡的结束状态 */
.v-leave-to {
  opacity: 0;
}
/* 进入和离开过渡的持续时间和动画曲线 */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s;
}
.scale-enter-from {
  transform: scale(0);
}
.scale-enter-to {
  transform: scale(1);
}
.scale-leave-from {
  transform: scale(1);
}
.scale-leave-to {
  transform: scale(0);
}
.scale-enter-active,
.scale-leave-active {
  transition: transform 1s;
}
</style>