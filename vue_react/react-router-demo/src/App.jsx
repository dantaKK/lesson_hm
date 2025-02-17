// 页面级别组件
// 二级路由 about  /about 
import "./App.css"
import { Outlet,
  NavLink,
 } from "react-router-dom" 
function App() {


  return (
    <>
     <hearder> 
      <nav>
       <NavLink to="/">Home</NavLink>
       <NavLink to="/about">About</NavLink>
       </nav>
      
     </hearder>
     <Outlet></Outlet>
    </>
  )
}

export default App
