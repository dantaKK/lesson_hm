## 在 CSS 中实现「一边固定，另一边自由」的布局效果

1. Flexbox 弹性布局（推荐）​​
   ​​ 适用场景 ​​：一维布局（横向或纵向）。
   ​​ 核心思路 ​​：父容器设为 display: flex，固定边设置固定宽度/高度，自由边用 flex: 1 占据剩余空间。

2. Grid 网格布局 ​​
   ​​ 适用场景 ​​：复杂二维布局，但同样适用于一维需求。
   ​​ 核心思路 ​​：父容器设为 display: grid，通过 grid-template-columns 或 grid-template-rows 定义轨道。

3. Position 定位 ​​
   ​​ 适用场景 ​​：需要精确控制元素位置，或兼容旧浏览器。
   ​​ 核心思路 ​​：固定边用 position: absolute 或 fixed，自由边通过 margin 或 calc() 腾出空间。

4. Float + Margin（传统方法）​​
   ​​ 适用场景 ​​：兼容旧浏览器（如 IE9 以下）。
   ​​ 核心思路 ​​：固定边浮动，自由边通过 margin 避免重叠。
