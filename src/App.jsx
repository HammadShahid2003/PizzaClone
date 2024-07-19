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
import { CartContextProvider } from './CartContext'
function App() {
  const [cartCount, setcartCount] = useState(0)
  const[cartItems,setcartItems]=useState([]);
  function setCartCount(val){
    setcartCount(val);
  }
  function setCartItems(val){
    setcartItems(val);
  }
  return (
    <CartContextProvider value={{cartCount,cartItems,setCartCount,setCartItems}}>
    <Layout style={{width:'100vw',height:'100vh'}}>

    <NavigationBar />
      <Routes>
        
      <Route path='/' element={<Homepage/>}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/login' element={<LoginForm/>}></Route>
        <Route path='/register' element={<RegisterForm/>}></Route>
        
      </Routes>
      </Layout>
      </CartContextProvider>
  )
}

export default App
