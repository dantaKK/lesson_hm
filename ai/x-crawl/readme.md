- package.json
  项目描述文件
  - dependencies 依赖部分？
  - devDependencies 开发期间依赖
  - scripts 脚本
    npm run dev (development)
  - 版本号 的意义
    >1.0.0 正式版 商用 成熟
   - 1.0.0 1主版本 0次更新 0 bug 修复
   - 2.0.0  Vue2 Vue3 本质的改变
   - 2.2.0 添加了某项功能
   - 2.2.1 新增的有bug  修复

- es6 
   - es6 模块化 import from   mjs
   - 解构 
    - 待解构的对象在右边
    - 解构出来的在左边
    - 对象(key)、数组(下标)都可以解
    - ... rest 剩余运算符

- AI 爬虫的核心
  - 发送请求爬取HTML 完成了 输入（HTML 字符串）
     -http 请求
     -解析出来 indent 
  
  - 交给大模型
     `
     ${indent_html}
     Git the image link
     `