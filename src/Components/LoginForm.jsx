import React, { useState } from 'react';
import { Flex, Card, Layout, Menu, Row, theme,Col, Space,Button } from 'antd';
import { Link } from 'react-router-dom';

const LoginForm = () => {
    const { Content} = Layout;


  const {
    token: { ColorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    
      <Content style={{ padding: '0' ,margin:'4rem',background:'#F8F8F8',}}>
      <Row  >
        <Col span={10} offset={6} className='login-form'>
        <form action="submit" >
          <p className='login-title'>Login</p>
        <input type="email" placeholder='Enter Email' required className='login-input-fields'/>
        <br/>
        <input type='password' placeholder='Enter Password' className='login-input-fields'/>
        <br/>
        <Button type='primary' danger>Login</Button>
        
        <br/>
        <Link to='/register'>Click here to register</Link>
        </form>
        </Col>
      </Row>
      </Content>
     
      
    
  );
};

export default LoginForm;