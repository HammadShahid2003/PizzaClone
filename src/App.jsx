import { useState } from 'react'
import './App.css'
import Homepage from './Components/HomePage'
import {Routes,Route} from 'react-router-dom'
import Cart from './Components/Cart'
import LoginForm from './Components/LoginForm'
import RegisterForm from './Components/RegisterForm'
import NavigationBar from './Components/Header'
import {Layout} from 'antd';
import { CartContextProvider } from './CartContext'
import { Provider } from 'react-redux'
import cartStore from "./Store/Store.js"
import Admin from './Components/Admin Panel/Admin.jsx'
function App() {
  // const [cartCount, setcartCount] = useState(0)
  // const[cartItems,setcartItems]=useState([]);
  // function setCartCount(val){
  //   setcartCount(val);
  // }
  // function setCartItems(val){
  //   setcartItems(val);
  // }
  return (
    // <CartContextProvider value={{cartCount,cartItems,setCartCount,setCartItems}}>
    <Provider store={cartStore}>
    <Layout style={{width:'100vw',height:'100vh'}}>

    <NavigationBar />
      <Routes>
        
      <Route path='/' element={<Homepage/>}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/login' element={<LoginForm/>}></Route>
        <Route path='/register' element={<RegisterForm/>}></Route>
        <Route path='/admin' element={<Admin/>}></Route>
      </Routes>
      </Layout>
      </Provider>
      //</CartContextProvider>
  )
}

export default App
