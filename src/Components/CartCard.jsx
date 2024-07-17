import React, { useState } from "react";
import { Flex } from "antd";
import Icon,{DeleteTwoTone,MinusOutlined,PlusOutlined} from '@ant-design/icons'

function CartCard({name,sizeValue,quantity,priceToSend,pid,removeItem,totalPrice,setTotalPrice}){
  const [Quantity,setQuantity]=useState(Number(quantity));
  
return(

    <Flex>
      <div className='cart-items cart-items-textSide'><p>{`${name} [${sizeValue}]`}</p>
      <p>{`Price:${Number(priceToSend)*Quantity}`}</p>
      <p>Quantity: <PlusOutlined style={{color:'green'}} onClick={()=>{setQuantity(Quantity+1); setTotalPrice(totalPrice+Number(priceToSend)*Quantity)}}/>  {Quantity}  
         <MinusOutlined style={{color:'red'}} onClick={()=>{setQuantity(Quantity-1);setTotalPrice(totalPrice-Number(priceToSend)*Quantity)}}/> </p>
      </div>
      <div className='cart-items'><img src="https://www.dominos.co.in//files/items/golden_corn_veg.jpg" alt="" style={{height:'80px',width:'80px'}}/></div>
      <div className='cart-items' style={{display:'flex', justifyContent:'center',alignItems:'center'}}><DeleteTwoTone twoToneColor='#ff0000' onClick={()=>{removeItem(pid);}}/></div>
    </Flex>
    

);
}
export default CartCard;