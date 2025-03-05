<template>
    <div>
        ParentOne
    <ChildOne :msg="msg" :msg2="msg2"/>
    <ChildTwo/>
    </div>
</template>

<script >
import ChildOne from './ChildOne.vue'
import ChildTwo from './ChildTwo.vue'
import {ref} from 'vue'
export default {
    data() {
         return{
            msg:'传给子组件的信息1'
         }   
    } ,
    setup(){
        // 打破vue2 语法割裂逻辑的限制， 把响应式数据和方法都放在setup 方法中
        const msg2=ref('传给子组件的信息2')
        return{
            msg2
        }
    
    },
    components:{
       ChildOne 
    }
  

}
</script>

<style  scoped>

</style>