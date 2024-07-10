import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Homepage from './Components/HomePage'

import {Routes,Route} from 'react-router-dom'
import Cart from './Components/Cart'
import CartCard from './Components/CartCard'
import LoginForm from './Components/LoginForm'
import RegisterForm from './Components/RegisterForm'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Homepage className="home"/> */}
    
      <Routes>
      <Route path='/' element={<Homepage/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/login' element={<LoginForm/>}></Route>
        <Route path='/register' element={<RegisterForm/>}></Route>
      </Routes>
      </>
  )
}

export default App
