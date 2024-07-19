import React, { useState } from "react";
import { Flex } from "antd";
import Icon,{DeleteTwoTone,MinusOutlined,PlusOutlined} from '@ant-design/icons'
import useCart from "../CartContext";

function CartCard({name,sizeValue,quantity,priceToSend,pid,removeItem,totalPrice,setTotalPrice}){
  const [Quantity,setQuantity]=useState(Number(quantity));
  const [eachPrice,seteachPrice]=useState(Number(priceToSend)*Quantity);

  const {cartItems}=useCart();
  const item=cartItems.find(item=>item.pid===Number(pid));

  function handleIncrease(){
    setQuantity(Quantity+1);
    
    // seteachPrice(Number(priceToSend)*Quantity);
    setTotalPrice(totalPrice+priceToSend);
    console.log(Quantity);

  }
  
  function handleDecrease(){
    if(Quantity==1){
      handleDelete();
      return;
    }
    setQuantity(Quantity-1);
   
    // seteachPrice(Number(priceToSend)*Quantity);
    setTotalPrice(totalPrice-priceToSend);
    console.log(Quantity);
  }
  function handleDelete(){
    removeItem(pid);
    setTotalPrice(totalPrice-(Number(priceToSend)*Quantity))


  }
  
return(

    <Flex>
      <div className='cart-items cart-items-textSide'><p>{`${name} [${sizeValue}]`}</p>
      <p>{`Price:${Number(priceToSend*Quantity)}`}</p>
      <p>Quantity: <PlusOutlined style={{color:'green'}} onClick={handleIncrease}/>  {Quantity}  
         <MinusOutlined style={{color:'red'}} onClick={handleDecrease}/> </p>
      </div>
      <div className='cart-items'><img src="https://www.dominos.co.in//files/items/golden_corn_veg.jpg" alt="" className="Cart-Card-pic"/></div>
      <div className='cart-items' style={{display:'flex', justifyContent:'center',alignItems:'center'}}><DeleteTwoTone twoToneColor='#ff0000' onClick={handleDelete}/></div>
    </Flex>
    

);
}
export default CartCard;