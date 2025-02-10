<template>


    <!-- 搜索头部 -->
   <div class=" home ">
   
    
     <!-- 背景 -->
     <div class="fixed top-0 left-0 w-full h-[4.5rem] z-[10] transform -translate-y-0 bg-cover bg-center  "
        style="background-image: url('https://bpic.588ku.com/back_origin_min_pic/20/12/08/3ea9e235acca002058ec0bf303858979.jpg!/fw/750/quality/99/unsharp/true/compress/true');">
     </div>
     <!-- 搜索 -->
       <div class="search flex items-center px-4 text-sm py-4 fixed top-1 left-0 z-[10]">
       
         <div
         class="title font-bold text-gray-900
         text-lg w-[6.5rem] text-center font-serif mr-0.5 bg-gray-200 rounded-full bg-opacity-50" 
       >抖音商城</div>
 
       <van-search
         v-model="searchField"
         placeholder="请输入搜索关键字"
         show-action
         shape="round"
         background="transparent"
         class="w-full rounded-full "
       >
       <template #left-icon>
         <van-icon name="search" color="#ff6a00" size="1.25rem" />
       </template>
       <template #right-icon >
      <div class="flex ">
         <van-icon name="photograph" size="1.25rem" class="mr-1"  />
         <van-button  round color="#FF6A00" size="mini">搜索</van-button>
           </div>
       </template>
         <template #action>
           <div class="text-white justify-center items-center flex ml-0.5">
             <van-icon name="shopping-cart-o" size="1.75rem"  />
           </div>
         </template>
       </van-search>
     </div>
 
    
  
     <!-- 主体 -->
     <main class="w-full pt-9  z-[-50] flex flex-col space-y-1 ">
       <!-- 导航栏 -->
       <header
         class="justify-center min-h-18 rounded-2xl p-2 shadow-md self-center bg-white bg-opacity-20"
       >
         <section class="w-full topbar flex justify-around my-[0.5rem]">
           <div
             class="topbar-item flex flex-col items-center"
             v-for="item in topBarState"
             :key="item.title"
           >
             <div class="topbar-item__icon ">
               <van-icon :name="item.icon" :color="item.color" size="2rem" :badge="item.badge" :style="{  '--van-badge-font-size': '9px',
         '--van-badge-padding': '6px 1px', /* 内边距 */
         '--van-badge-min-width':'auto ! important'  }"/>
          
             </div>
             <div class="topbar-item__text text-xs font-bold">{{ item.title }}</div>
           </div>
         
         </section>
             </header>
            
        <!-- 新人补贴栏目 -->
         <section class=" justify-around min-h-40  flex  rounded-2xl  shadow-md bg-white bg-opacity-50">
            
           <!-- <div class=" flex  ">
       <h2 class="text-xl  font-bold text-red-500 mr-20">新人补贴</h2>
       <span class="text-sm text-gray-500">新人礼遇 低至0.01元</span>
          </div> -->
            </section>
       <div>xxxx</div>
       <div>xxxx</div>
       <div>xxxx</div>
       <div>xxxx</div>
       <div>xxxx</div>
       <div>xxxx</div>  <div>xxxx</div>
       <div>xxxx</div>
       <div>xxxx</div>
       <div>xxxx</div>
       <div>xxxx</div>
       <div>xxxx</div>
       <div>xxxx</div>
       <div>xxxx</div>
       <div>xxxx</div>
       <div>xxxx</div>
        </main>
      
     
     
  
     </div>
   
 
     
 
 
 
 
 </template>
 
 <script setup lang="ts">
 import { ref } from 'vue'
 import { toRefs } from 'vue';
 import { useHomeStore } from '../../store/homeStore';
 const searchField = ref('')
 const homeStore = useHomeStore();
 const {topBarState,newprodects} = toRefs(homeStore);
 </script>
 
 <style scoped>
 
 </style>