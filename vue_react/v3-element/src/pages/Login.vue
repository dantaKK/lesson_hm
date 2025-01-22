<template>
    <el-form
      style="position: absolute;left: 45%;"
      ref="formRef"
      :model="form"
      :rules="rules"
      label-width="auto"
    >
      <!-- 用户名 -->
      <el-form-item label="用户名" prop="name">
        <el-input v-model="form.name" size="small"/>
      </el-form-item>
  
      <!-- 密码 -->
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" type="password" size="small"/>
      </el-form-item>
      
      <!-- 登录按钮 -->
      <el-form-item>
        <el-button type="primary" @click="onSubmit" :loading="loading">登录</el-button>
      </el-form-item>
    </el-form>
  </template>
  
  <script setup>
  import { ref, reactive } from 'vue'
  import { login } from '../api/index'
  
  const formRef = ref(null)
  
  // 表单数据
  const form = reactive({
    name: '',
    password: ''
  })
  
  // 定义验证规则
  const rules = reactive({
    name: [
      { required: true, message: '请输入用户名', trigger: 'blur' },
      { min: 5, max: 10, message: '长度在5-10个字符', trigger: 'blur' }
    ],
    password: [
      { required: true, message: '请输入密码', trigger: 'blur' },
      { min: 5, max: 10, message: '长度在5-10个字符', trigger: 'blur' }
    ]
  })
  
  const loading = ref(false)
  
  const onSubmit = async () => {
    // if (!formRef.value) return
  
   
    // // 开始加载状态
    loading.value = true
     await formRef.value.validate(async(valid)=>{
       // 发送请求给后端
       // 账号，密码数据库是否匹配
       // 发送给前端一个凭证 token
       // 以后的请求 都需要携带这个凭证
       // 服务器解析凭证 得到用户对象
        
        if(valid){
          console.log("验证成功")
          const res = await login(form)
          // console.log(res)
          if(res.data.code == 200){
           console.log(res.data.data)
          }
          else{
            console.log(res.data.message)
          }
          return true
        }else{
          console.log("验证失败")
          return false
        }
     })
    // try {
    //   // 调用validate方法进行验证
    //   await formRef.value.validate((valid) => {
    //     if (valid) {
    //       console.log('提交成功')
    //       // 在这里处理表单提交逻辑，例如发送请求到服务器
         
    //     } else {
    //       console.log('验证失败')
         
    //       return false
    //     }
    //   })
    // } catch (error) {
    //   console.error('验证过程中发生错误:', error)
    // } finally {
    //   // 不管结果如何，最后都要关闭加载状态
    //   loading.value = false
    // }
  }
  </script>
  
  <style scoped>
  /* 样式 */
  </style>