
 // 组件就是函数
 // 组件首字母大写 复用
 // 组件的返回值是JSX
function App() {
   
  // jsx
  // js函数区域 里面编写html
  let myTitle=<h1>Hellow,world</h1>
  return (
    // <div>
    //   {myTitle}
    // </div>
    // JSX 最外层， 只能有且必须要一个节点
    // enclosed tag -> 原理? api  fragment 节点
    <>
       <p>hellow</p>
       <p>world</p>
    </>
   
    
  )
}

export default App
