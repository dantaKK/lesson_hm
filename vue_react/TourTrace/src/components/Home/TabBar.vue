
<template>
  <van-tabbar v-model="active" 
  class=" shadow-black shadow-2xl opacity-90"
  active-color="#ee0a24"
  >
 
    <van-tabbar-item icon="wap-home" to="/home">首页</van-tabbar-item>
    <van-tabbar-item icon="video-o" to="/video">视频</van-tabbar-item>
    <van-tabbar-item icon="chat-o"  badge="78" to="/information">消息</van-tabbar-item> 
    <van-tabbar-item icon="manager" dot to="/my">我</van-tabbar-item>
    
  </van-tabbar>
</template>

<script  lang="ts">
import { ref,reactive,onMounted } from "vue";
import { useRoute } from "vue-router";



const active = ref<number>(0);
// onMounted(()=>{
//   const route = useRoute();
//   console.log(route.fullPath);
//   if(route.fullPath == "/home"){
//     active.value = 1; 
//   }
//   else if(route.fullPath == "/video"){
//     active.value = 2; 
//   }
//   else if(route.fullPath == "/information"){
//     active.value = 3;
//   }
//   else if(route.fullPath == "/my"){
//     active.value = 4; 
//   }

// })
export default {
  setup() {
    return {
      active,
      
    };
  }, 
}
</script>

<style scoped></style> 
