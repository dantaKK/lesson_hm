# 大文件上传

- 技能点？
  - 切片
    - 体验 快， 稳定 
    - 断点续传
      blob 
    http 1.1 管道化
    http2.0 
    多路复用(二进制帧) 并发 更快
    
- 切完片后 传到服务器的是啥？
  - 切片
  - 合并
  
- 后端 合并切片
  fs.createWriteStream()
  - 前端
  html5 blob file.__proto__ Blob slice 切片
  FormData 
  html5 特性 ？
  - 后端
  - multiparty 中间件 拿到 post 请求
  区别于一般的表单请求 附件
  multiparty 是处理表单数据，尤其用于解析含文件上传的POST请求体的中间件
  - 临时放切片
    写入？
  - 合并 fs stream
  - 删除切片
  - fs-extra 中间件
    fs-extra是Node.js 扩展文件系统模块，提高更多实用便捷文件操作方法。
  - promise.all 
    可以合并了
  
- 合并切片
  - /merge 路由

- 快传
  - 已经在服务器 ？
  - 标识 ？ 
    hash 唯一 shouUpload 标记
- 断点续传
  - 之前没传的切片
  - 失败的切片重传
  verfity 返回的uploadeChunk filter
  将未完成的切片(比较size)和未传(不在返回的uploadedChunk中)的切片 重新上传
- 暂停上传
  promise.all
  