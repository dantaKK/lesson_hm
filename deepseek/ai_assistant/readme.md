# AI Assistant 全栈项目

- 大前端全栈
- 后端驱动为主的
  - 设计模式
      大前端 前端 mvvm model(数据状态 useState, ref/reactive, api/axios 接口, pinia) view viewmodel

      model 模型层 = 数据定义 + 数据处理 + 数据存储 + 数据管理 + 数据请求
      view 视图层 = component 组件  views components 
      vm 视图模型层 数据的绑定{} {{}} 数据驱动界面(v-if/show/v-for) ... script 事件监听 @Change onChange
      props   

      

      写到哪算哪, 产品设计线框图 idear 亮点

      后端 mvc 思想 数据库 mysql table 简历模型
      model view controller 数据库独立于后端的 数据模型文件 schema orm 
      view 视图层 = 前端页面 index.html about.html
      controller 控制器层
  - 并发数
  - 基础设施 
  - DDos 肉鸡攻击 qps
  
## 后端全栈AI 项目
- python flask 框架 node koa
  app.py 单点入口 
- 纯js 
- deepseek 在线api

## 写文章(ts + next.js + react 思想) + leetcode 150
面试

## 项目准备
- 安装python 
  3.10.6
- 配置虚拟环境
  python -m venv name
  本地项目项目依赖 不受全局影响 不影响全局
  项目下有了项目依赖包
  
  安装依赖
  pip install openai Flask python-dotenv -i https://mirrors.aliyun.com/pypi/simple/

  openai 已经成为了aigc LLM 的事实标准
  /completion/chat
  base_url deepseek

  Flask koa 后端框架
  
  - 没用做前后端分离 mvc 开发模式
    - 前端 static 目录下
    - 路由 / 显示index.html

- 静态文件
  - js/css/img FE
  - 启动静态服务器

- 状态码
  1xx 请求中...
  2xx 成功 201 Created
  3xx 重定向
  4xx 客户端错误
    405 Method Not Allowed 方法不允许
    代码不会出问题
  5xx 服务器错误
  
  响应头第一个数据包 浏览器或程序 就通过状态码知道怎么处理
  程序逻辑的一部分

- env

## 界面
- html 结构
  - 写注释
  - 图标字体库 font-awesome iconfont
    - 性能优化
    - 小图标都用图片，http 请求数的暴涨，网页同时并发请求数是有上限的
    - fas fa-comment-alt
    - font-awesome 不提供选择 都是一样的
  - css 样式的组合 面向对象特性 多态 方便复用和维护
    tailwindcss 原子类
  - textarea LLM 支持比较多的tokens 出入长度 kimi deepseek
  - html5
    - 语义化标签
    - 无障碍访问
      label + for
    - form 表单增强功能
      input type[number|range...]
      placeholder 提示
 - css
  - 弹性布局
    - 居中
    - align-items 纵轴
    - justify-content 横轴 flex-start space-between
  - grid 布局
    display:grid;
    grid-template-columns: 1fr 1fr;
    gap 24px
  - 响应式布局
    width max-width
    @media screen and (max-width: 768px) {
      
    }
  - transition animation
    - width transition ipad 旋转屏幕
    - transition: 多个属性分别设置
  - 面向对象思想
    - 封装 多态 继承
    - button 样式组件 基础样式
      UI风格 antd 
    - 组合业务样式
      primary secondary default -> tailwindcss 原子类
    - calc 
      css中执行简单的数学运算，用于动态布局设计中精确控制元素大小与位置
      性能有一点的问题，不能滥用，涉及不必要的重绘重排
    - flex: 1;
      flex-grow 1 其他子元素没有设置， 主元素，其他元素占完后，剩下的都归他来grow;多个元素都设置 按比例划分。
      flex-basis
      flex-shrink
      
-js
  - 用户体验
   - keydown enter 阻止默认行为
   - event.preventDefault()
  - promise 的使用
    await 后面的肯定是promise 或返回promise实例的函数
    then 链式调用 
      处理函数返回的仍然是promise 链式调用
      如果不是呢？ promise.resolve()包一下
  - BOM
    - navigator.userAgent
    操作系统 浏览器版本 内核
    - navigator.cilpboard
    - localStorage
      - 本地存储 5M 4096kb cookie kb 带上
      - getIterm(null) null
      - setItem
    - array,string 方法强化一下
    - slice 负数
    - event 事件机制
      - dom level 和 event 两个概念 dom level 涉及和event 相关的定义
      - onclick(内嵌DOM 0 level 0) addEventListener(事件监听 DOM 2)
      - 小红书(js高级程序设计)
      - 事件冒泡 | 捕获
      - 事件委托
        事件监听 内存开销比较大的
        - 利用冒泡机制 父元素上 监听一次 性能好 事件的委托
        - event.target 目标元素 data-index 数据属性
        
  产品需求
    - 产品经理提出产品需求
    - 设计师 界面设计
    - 前端 vue/react 完成需求
    - 后端 数据和mvc 完成需求
       - 分析
       - 技术设计
       - 代码实现
       - debug
       - 交付上线
  - 代码开发风格
    - 注释
    - 封装
      - 一个函数只做一个件事
      - 一个函数不超过10行 
    - es6 + 风格
      promise + async/await
## 业务
   - 界面业务
     - grid 布局
     - transition
     - css 面向对象
   - scrollToTop 业务
   - 发消息业务
   - 流式输出
   - 剪贴版功能
   - 聊天历史分组功能
     - localStorage chatLog