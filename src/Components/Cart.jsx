import React, { useState } from 'react';
import { Flex, Card, Layout, Menu, Row, theme,Col, Space,Button } from 'antd';
import { Link } from 'react-router-dom';
import data from '../data.json'
import Icon,{DeleteTwoTone,MinusOutlined,PlusOutlined} from '@ant-design/icons'
import CartCard from './CartCard';
const Cart = ({cartItems,setCartItems ,cartCount,setCartCount}) => {
    const {Content} = Layout;
    function removeItem(id){
     const newCart=cartItems.filter((item)=>{
        return item.pid !=id;
      });
      setCartItems(newCart);
      setCartCount(cartCount-1);

    }
  const {
    token: { ColorBgContainer, borderRadiusLG },
  } = theme.useToken();
  
    let tempPrice=0;
  
    for(const item of cartItems){
      
      tempPrice+=Number(item.priceToSend)*Number(item.Quantity);
    }
    
  
  const [totalPrice,setTotalPrice]=useState(tempPrice);
  return (
    
      <Content className='Content-style'>
      <Flex className='Cart-page-Style' gap={'20rem'} justify='center'>
        
          <div className='left-cart-card'
            key='2'
            
          ><h1>My Cart</h1>
          {
           
          cartItems.map((item)=>{
            
            return(<CartCard name={item.name} sizeValue={item.sizeValue} quantity={item.Quantity} priceToSend={item.priceToSend} pid={item.pid} removeItem={removeItem} totalPrice={totalPrice} setTotalPrice={setTotalPrice}/>);
          })
          
        }

          
          </div>
          <div className='right-cart-card'
            key='1'
           
          ><h1>{`Total Amount: ${totalPrice}RS/-`}</h1>
          <Button type='primary' colorBgContainer='green'>Pay Now</Button>
          </div>
      </Flex>   
      </Content>
     
      
    
  );
};

export default Cart;