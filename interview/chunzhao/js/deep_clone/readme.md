# 深拷贝和浅拷贝

- 深拷贝和浅拷贝的区别
  - 简单数据类型拷贝值
  - 复杂数据类型拷贝引用(浅)
  - 复杂数据类型 开辟新空间 拷贝值(深)

- JSON.parse(JSON.stringify(obj)) 简单粗暴
  - 无法处理函数、undefined、Symbol
  - 循环引用的对象会报错
  
- 手写深拷贝
  - 遍历 for(key in ) forEach
  - 递归
  - 循环引用 map(key 对象)
  - 更加复杂的类型 