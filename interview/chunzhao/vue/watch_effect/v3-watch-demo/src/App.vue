<template>
  <div>
   {{count}}
  {{double}}
</div>
</template>

<script setup>
import { ref ,watchEffect} from 'vue'
const count = ref(0);
const double = ref(0);
watchEffect(()=>{   
  console.log(count.value);
  console.log(double.value); 
})
setTimeout(()=>{
  count.value++;
  double.value = count.value * 2;
},1000)

</script>

<style  scoped>

</style>