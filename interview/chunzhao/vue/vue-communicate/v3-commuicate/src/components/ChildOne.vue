<template>
    <div>
     ChildOne
     {{msg}}
     {{msg2}}
    </div>
</template>

<script >

export default {
    props:['msg','msg2'],
    setup(props){
        console.log(props.msg)
        console.log(props.msg2) 
    } 
}
</script>

<style scoped>

</style>