# 面向 Openai 接口编程

- 多模态
 - 单模态
   chatgpt 文本
 -图片、视频、音频

- npm init -y 后端
  openai i openai     openai sdk
  - 时间 占用空间
    npm i -g openai 
  -npm config set registry https://registry.npmmirror.com
   设置了npm的源， npm 国外的， 慢,阿里国内做了npm 的镜像 
  -时间 占用空间
  npm i -g openai
  npm i -g pnpm
  安装到哪里去了？命令行直接调用 环境变量？污染全局

- 既不会重复安装，也不会污染全局，符号链接去指向之前的安装
  快了， 省空间 pnpm

  - main.mjs 主入口，单点入口的职责
    mjs es6 module 语法 import from 