<template>
  <div>

  </div>
</template>

<script setup>
import {ref,effect} from "./reactivity";
const r=ref(0);
// const date = ref(r) isRef的作用
let val;
effect(()=>{
  val=r.value
})
r.value=1
console.log(val)

// r.value = 1;
// import {reactive,effect} from "@vue/reactivity";
// import {
//   reactive,
//   shallowReactive,
//   effect
// } from "./reactivity";
// const ret=shallowReactive({
//   num:0,
//   age:1,
//   num2:{
//     a:1,
//     b:2
//   }
// })
// // console.log(ret.num++)
// let val;
// let val2;
// effect(()=>{
//   val=ret.num2.a
//   // val2=ret.num;
// })
// ret.num2.a=2
// // ret.num=10
// console.log(val,val2,'-----')


// effect(()=>{
//   //依赖地图 
//   val=ret.num
//   //  ret.age
//   //  ret.num
// })
// effect(()=>{
//   //依赖地图 
//   // val=ret.num
//   ret.age
//   console.log('/////')
//      //  ret.num
// })


//  console.log(val)
// ret.num++
// ret.num=10
// console.log(val)
// ret.age=22
</script>

<style  scoped>

</style>