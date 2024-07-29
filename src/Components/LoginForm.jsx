import React, { useState } from 'react';
import { Flex, Card, Layout, Menu, Row, theme,Col, Space,Button ,Alert} from 'antd';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { loginSchema } from '../forms/loginSchema';
const initialValues={
email:"",
password:"",

}

const LoginForm = () => {
    const { Content} = Layout;


  const {
    token: { ColorBgContainer, borderRadiusLG },
  } = theme.useToken();

const {values,errors,handleChange,handleSubmit,touched}=useFormik({
initialValues:initialValues,
validationSchema:loginSchema,
onSubmit:(values,action)=>{
  console.log(values);
  action.resetForm();
}



})




  return (
    
      <Content className='login-content'>
      <Row  >
        <Col span={10} offset={6} className='login-form'>
        <form onSubmit={handleSubmit} >
          <p className='login-title'>Login</p>
        <input type="email" placeholder='Enter Email' name='email' value={values.email} className='login-input-fields' onChange={handleChange} autoComplete='false'/>
         {errors.email || touched.email ?<Alert message={errors.email.toUpperCase()} type="error" />:null} 
        <br/>
        <input type='password' placeholder='Enter Password' name='password' value={values.password} className='login-input-fields' onChange={handleChange} autoComplete='false'/>
         {errors.password || touched.password ?<Alert message={errors.password} type="error" />:null} 
        <br/>
        <Button type='primary' danger onClick={handleSubmit}>Login</Button>
        
        <br/>
        <Link to='/register'>Click here to register</Link>
        </form>
        </Col>
      </Row>
      </Content>
     
      
    
  );
};

export default LoginForm;