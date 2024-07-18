import React, { useState } from 'react';
import { Breadcrumb, Card, Layout, Menu, Row, theme,Col, Space,Button } from 'antd';
import HomeCard from './HomeCard';
import data from '../data.json';
import { Link } from 'react-router-dom';


const Homepage = ({cartCount,setCartCount,cartItems,setCartItems}) => {
    const {Content} = Layout;

  const {
    token: { ColorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    
      
      <Content className='Content-style'>
        
            
            <Row justify={"space-between"} className='row-design' >
            {
                data.map((pizza)=>{
                    return(
                        <Col span={8}>
                            <HomeCard pid={pizza.id} name={pizza.name} price={pizza.price} src={pizza.src} setCartCount={setCartCount} cartCount={cartCount} cartItems={cartItems} setCartItems={setCartItems}/>


                        </Col>
                    );
                })
            }
          </Row>
        
      </Content>
     
      
   
  );
};

export default Homepage;