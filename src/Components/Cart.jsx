import React, { useMemo, useState } from 'react';
import { Flex, Layout, Button } from 'antd';
import CartCard from './CartCard';

import { useSelector } from 'react-redux';
const Cart = () => {
    const {Content} = Layout;
    const cartItems=useSelector(state=>state.cart.items);
    
    
    
 
   
const [totalPrice,setTotalPrice]=useState(0);
   
    useMemo(()=>{
      let tempPrice=0;
      for(const item of cartItems){
      
        tempPrice+=Number(item.priceToSend)*Number(item.Quantity);
      }
      setTotalPrice(tempPrice);
    },[cartItems])
  
  
  return (
    
      <Content className='Content-style'>
      <Flex className='Cart-page-Style' gap={'20rem'} justify='center'>
        
          <div className='left-cart-card' 
            key='2'
            
          ><h1>My Cart</h1>
          {
           
          cartItems.map((item)=>{
            console.log(item)
            return(<CartCard pid={item.pid} totalPrice={totalPrice} setTotalPrice={setTotalPrice}/>);
          })
          
        }

          
          </div>
          <div className='right-cart-card'
           
           
          ><h1>{`Total Amount: ${totalPrice}RS/-`}</h1>
          <Button type='primary' colorBgContainer='green'>Pay Now</Button>
          </div>
      </Flex>   
      </Content>
     
      
    
  );
};

export default Cart;