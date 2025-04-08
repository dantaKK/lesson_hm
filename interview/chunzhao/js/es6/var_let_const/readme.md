- 作用域
  var 不支持块级作用域，let和const 支持块级作用域，这是js 满足大型项目的一个需要。
- 变量提升
  var 会变量提升并初始值为undefined，let和const 会提升但是有暂时性死区(TDZ)
  在声明前访问会报 referenceError
- 重复声明
  var 可以重复声明，let和const 不可以重复声明
- 全局污染
  var 会污染全局对象，let和const 不会污染全局对象
- 修改性
  var 和 let 可以修改，const 声明的常量不可以修改，但如果是对象，可以修改对象的属性。