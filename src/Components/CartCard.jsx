import React, { useState } from "react";
import { Flex } from "antd";
import Icon,{DeleteTwoTone,MinusOutlined,PlusOutlined} from '@ant-design/icons'
import { useDispatch,useSelector } from "react-redux";
import { decreaseQuantity, increaseQuantity, removeFromCart } from "../cartSlice";

function CartCard({pid}){
  
  
  const dispatch=useDispatch();
  const cartItems=useSelector(state=>state.cart.items);
  const item=cartItems.find(item=>item.pid===pid);
  
  function handleIncrease(){
    
    dispatch(increaseQuantity(pid));
    
    
    

  }
  
  function handleDecrease(){
    if(item.Quantity==1){
      handleDelete();
      return;
    }
    dispatch(decreaseQuantity(pid));
    
    
    
  }
  function handleDelete(){
    
    dispatch(removeFromCart(pid));
    


  }
  
return(

    <Flex>
      <div className='cart-items cart-items-textSide'><p>{`${item.name} [${item.sizeValue}]`}</p>
      <p>{`Price:${Number(item.priceToSend*item.Quantity)}`}</p>
      <p>Quantity: <PlusOutlined style={{color:'green'}} onClick={handleIncrease}/>  {item.Quantity}  
         <MinusOutlined style={{color:'red'}} onClick={handleDecrease}/> </p>
      </div>
      <div className='cart-items'><img src="https://www.dominos.co.in//files/items/golden_corn_veg.jpg" alt="" className="Cart-Card-pic"/></div>
      <div className='cart-items' style={{display:'flex', justifyContent:'center',alignItems:'center'}}><DeleteTwoTone twoToneColor='#ff0000' onClick={handleDelete}/></div>
    </Flex>
    

);
}
export default CartCard;