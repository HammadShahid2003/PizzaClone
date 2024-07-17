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
import NavigationBar from './Components/Header'
import {Layout} from 'antd';
function App() {
  const [cartCount, setCartCount] = useState(0)
  const[cartItems,setCartItems]=useState([]);
  return (
    <Layout style={{width:'100vw',height:'100vh'}}>
    <NavigationBar cartCount={cartCount} />
      <Routes>
      <Route path='/' element={<Homepage cartCount={cartCount} setCartCount={setCartCount} cartItems={cartItems} setCartItems={setCartItems}/>}></Route>
        <Route path='/cart' element={<Cart cartItems={cartItems} setCartItems={setCartItems} cartCount={cartCount} setCartCount={setCartCount}/>}></Route>
        <Route path='/login' element={<LoginForm/>}></Route>
        <Route path='/register' element={<RegisterForm/>}></Route>
      </Routes>
      </Layout>
  )
}

export default App
