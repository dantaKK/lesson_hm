import { useState } from 'react'

import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Home from '@/pages/Home'
import Search from '@/pages/Search'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/search' element={<Search/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
