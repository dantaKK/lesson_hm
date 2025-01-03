## 层叠上下文


## 页面渲染规则

- 文档流
  body 开始从上到下，从左到右
- 布局 Layout
  

- 盒子(本身)大小 
  box-sizing border padding content
  盒模型:
  标准盒模型  content-box  wd content
  IE盒模型 border-box  
 
- 认标签，但也可转变 display
  块级元素 block  

  行内元素 inline 不用于做盒子 不是块级元素 不能设置宽高， 宽高由内容决定

  块级元素为何默认宽度100%？ 
  html 是第一个BFC 元素， body 参与html的BFC
  页面显示由html负责 页面的布局 块级元素从上到下，行内元素从左到右 

- display

- BFC block formatting context 块级格式化上下文
 - html 是根元素，也是最顶级的BFC
 - context 块级元素从上到下， 行内元素从左到右

- 格式上下文 ? formatting context 我跟谁混 
  - 为何弹性布局 打破了 html BFC 的规则
    - BFC 不是某个元素的特例， 弹性布局，创立了一个新的BFC 
    - BFC 不受外界影响 全新的渲染区域 FFC Flex Formatting Context 弹性布局上下文
    flex-direction:row|column 

- GFC Grid Formatting Context 网格布局上下文
  
  # BFC
    - 独立渲染区域 不受外界影响
    - html 是顶级的BFC
    - block level box 垂直方向，一个接一个的放置，且宽度100%
    - 盒子垂直方向的距离由margin 决定, 属于同一个BFC的两个相邻的盒子的margin会发生重叠 大的说了算
    - 每个元素的margin 左边， 与包含块 border的左边相接触，即使存在浮动也一样
    - BFC 区域不会与float box 重叠 
    -  独立渲染区域 不受外界影响
    - 计算BFC的高度时，浮动元素也参与计算  


    - 触发新BFC
      - overflow: hidden||auto... 不为visible
      水杯盛开水 
      
# 层叠
- 页面是平面的
  BFC、文档流、布局、盒模型、选择器、继承、层叠上下文... 为渲染引擎像素(rgb 像素点)计算而服务的 
  - z-index 越大越在上层 洋葱
  一层一层计算 叠加起来 (图层的合成)
  - 层叠上下文是HTML 的三维概念， 发生堆叠 z-index 受父元素的影响，如果父元素小的话，z-index 就没用效果了。
  - html DOM树 浏览器解析程序的数据结构(树)
  - css cssOM 树 
  - DOM树 + cssOM树 = renderTree 渲染树 -> 布局(float,positon,flex) -> 绘制(z-index) -> 合成(图层) -> 渲染引擎画出来。
  - z-index 太多了，性能不好
  - 父图层管着子图层 


# css 的三种写法
  - 行内样式 
    写在标签上的 style 属性上 优先级最高(除了！important ) 行内样式 ！important 不要多用，不好维护 
    ：style={width:width+'px'} 动态样式用 
  - 内嵌样式  
    少用， 不会方便复用和管理 影响页面加载速度(极致优化)
  - 外联样式
    好维护， 方便复用，模块化，并发请求，DOM 可以提前解析和 css 结合， 渲染，页面尽早出来(快)

- stylus 
  css 预编译 
  浏览器还是只认css， 先写styl，再编译成css 
  npm i -g stylus 全局安装了 stylus 
  stylus -w 10.styl -o 10.css 实时编译
  - 快捷 不用写花括号、、:、;
  - tab 缩进一下 选择器和规则的归属
  - stylus 让css 更强大