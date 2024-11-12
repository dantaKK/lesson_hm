# 星球大战
 -<!DOCTYPE html>
  html5 版本声明头部
 - *
  css 通配符，所有元素
  margin 0 padding 0 所有元素初始化一致
  由于有不同的浏览器厂商，默认值不一样
  需要在页面样式开始之前，做一个reset。让任何浏览器访问，我们的页面都是一张白纸
  在所有浏览器上体验一致

  在样式重置时为什么不用 * ，因为 * 是性能不太好，所有宁愿列出来所有的标签

-居中
 -绝对定位 position:absolute 绝对定位
   -百分比相对于父元素
 -transform 变基属性
   -translate 移动
    x 左移 负 右移 正
    y 上移 负 下移 正
 -背景大法 
  盒子在页面的占位会出来

-css 动画
 -animation
 -keyfreames
 -transform scale translateY
 -飞船模拟动画，逼真
 -1% 时间差，让动画有一个缓冲的效果
 -transform-style: preserve-3d 开启3d效果
  perspective: 800px 视点， 眼睛离屏幕的距离 透视效果

-inline 元素不支持transform,display 属性切换为inline-block