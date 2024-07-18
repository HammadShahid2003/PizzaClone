import React, { useState } from 'react';
import { Flex, Card, Layout, Menu, Row, theme,Col, Space,Button } from 'antd';
import { Link } from 'react-router-dom';

const RegisterForm = () => {
    const { Content} = Layout;


  const {
    token: { ColorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    
      <Content className='login-content'>
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
     
      
   
  );
};

export default RegisterForm;