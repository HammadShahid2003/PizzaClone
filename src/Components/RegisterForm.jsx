import React, { useState } from 'react';
import { Flex, Card, Layout, Menu, Row, theme,Col, Space,Button } from 'antd';
import { Link } from 'react-router-dom';

const RegisterForm = () => {
    const { Header, Content, Footer} = Layout;


const labels = ['Cart','Login']

const items = new Array(2).fill(null).map((_, index) => ({
  key: index + 1,
  label: labels[index],
}));
    const [cartCount,setCartCount]=useState(0);
    
    items[0].label=(<Link to='/cart' >{'Cart '+cartCount} </Link>);
    items[1].label=(<Link to='/login' >Login</Link>);
    
    
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
          style={{ flex: 1, minWidth: 0, flexDirection:'row-reverse' }}
        />
      </Header>
      <Content style={{ padding: '0' ,margin:'4rem',background:'#F8F8F8',}}>
      <Row  >
        <Col span={10} offset={6} className='login-form'>
        <form action="submit" >
          <p className='login-title'>Register User</p>
        <input type="text" placeholder='Enter Name' required className='login-input-fields'/>
        <br/>
        <input type="email" placeholder='Enter Email' required className='login-input-fields'/>
        
        <br/>
        <input type="password" placeholder='Enter Password' required className='login-input-fields'/>
        <br/>
        <input type='password' placeholder='Confirm Password' className='login-input-fields'/>
        <br/>
        <Button type='primary' danger>Register</Button>
        
        <br/>
        <Link to='/login'>Click here to Login</Link>
        </form>
        </Col>
      </Row>
      </Content>
     
      
    </Layout>
  );
};

export default RegisterForm;