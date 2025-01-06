<template>
    <div>
       <h2>{{title}}</h2>
       <button @click="sendMessageToParent">发送消息给父组件</button>
    </div>
</template>

<script setup>
import { 
    defineProps,
    defineEmits,
    ref
} from 'vue'

const childMessage=ref('hello Parent')

// emits 汇报 触发
const emit = defineEmits(['child-message']) 

// 发送消息给父组件
const sendMessageToParent = ()=>{
    emit('child-message',childMessage.value)
}

const props = defineProps({
    title:{
        type:String,
        required:true
    }

})
</script>

<style  scoped>

</style>