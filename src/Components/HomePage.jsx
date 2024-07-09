import React, { useState } from 'react';
import { Breadcrumb, Card, Layout, Menu, Row, theme,Col, Space,Button } from 'antd';
import HomeCard from './HomeCard';
import data from '../data.json';
import { Link } from 'react-router-dom';


const Homepage = () => {
    const { Header, Content, Footer} = Layout;


const labels = ['Cart','Login']

const items = new Array(2).fill(null).map((_, index) => ({
  key: index + 1,
  label: labels[index],
}));
    const [cartCount,setCartCount]=useState(0);
    
    items[0].label=(<Link to='/cart' >{'Cart '+cartCount} </Link>);
  const {
    token: { ColorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{width:'100vw',height:'100vh'}}>
      <Header style={{ display: 'flex', alignItems: "center",background:'white', boxShadow:'10px 10px 5px lightgrey' }}>
        <div className='side-logo' > <Link className="demo-logo" to='/'>SHEY PIZZA</Link><img className="logo-pic"src="https://emojipedia-us.s3.amazonaws.com/source/skype/289/pizza_1f355.png"  alt=""/></div>
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items}
          style={{ flex: "auto", minWidth: 0, flexDirection:'row-reverse' }}
        />
      </Header>
      <Content style={{ padding: '0' ,margin:'0',background:'white',}}>
        
            
            <Row justify={"space-between"} className='row-design' >
            {
                data.map((pizza)=>{
                    return(
                        <Col span={8}>
                            <HomeCard name={pizza.name} price={pizza.price} src={pizza.src} setCartCount={setCartCount} cartCount={cartCount}/>


                        </Col>
                    );
                })
            }
          </Row>
        
      </Content>
     
      
    </Layout>
  );
};

export default Homepage;