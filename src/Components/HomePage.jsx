import React, { useEffect, useState } from 'react';
import { Layout, Row, Col, Spin } from 'antd';
import HomeCard from './HomeCard';
import axios from 'axios';



const Homepage = () => {
    const {Content} = Layout;
    const pizzas_url=import.meta.env.VITE_API_URL;
    
  

 const [pizzas,setPizzas]=useState([]);
 const [loading,setLoading]=useState(true);
  useEffect(()=>{
    axios.get(pizzas_url)
    .then((res)=>{
        setPizzas(res.data);
        setLoading(false);
        
    })
    .catch((err)=>{
          
      alert("cannot load data" + err);
        
    })

  },[])

  return (
    
      
      <Content className='Content-style'>
        { loading?(<Spin size="large"/> ):
        
            (<Row justify={"space-between"} className='row-design' >
            {
                pizzas.map((pizza)=>{
                    return(
                        <Col key={pid} span={8}>
                            <HomeCard pid={pizza.id} name={pizza.name} price={pizza.price} src={pizza.src} />


                        </Col>
                    );
                })
            }
          </Row>)
}
      </Content>
     
      
   
  );
};

export default Homepage;