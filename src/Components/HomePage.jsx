import React, { useEffect, useState } from 'react';
import { Breadcrumb, Card, Layout, Menu, Row, theme,Col, Space,Button } from 'antd';
import HomeCard from './HomeCard';
import data from '../data.json';
import { Link } from 'react-router-dom';
import axios from 'axios';
import useCart from '../CartContext';


const Homepage = () => {
    const {Content} = Layout;
    const pizzas_url=import.meta.env.VITE_API_URL;
    console.log(pizzas_url);
  const {
    token: { ColorBgContainer, borderRadiusLG },
  } = theme.useToken();

 const [pizzas,setPizzas]=useState([]);
  useEffect(()=>{
    axios.get(pizzas_url)
    .then((res)=>{
        setPizzas(res.data);
        
    })
    .catch((err)=>{
        alert("Cannot load data!!!!!!")
    })

  },[])

  return (
    
      
      <Content className='Content-style'>
        
            
            <Row justify={"space-between"} className='row-design' >
            {
                pizzas.map((pizza)=>{
                    return(
                        <Col span={8}>
                            <HomeCard pid={pizza.id} name={pizza.name} price={pizza.price} src={pizza.src} />


                        </Col>
                    );
                })
            }
          </Row>
        
      </Content>
     
      
   
  );
};

export default Homepage;