import React, { useState } from 'react';
import { Flex, Card, Layout, Menu, Row, theme,Col, Space,Button,Alert } from 'antd';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { signupSchema } from '../forms/signupSchema';
const initialValues={name:"",
   password:"",
   email:"",
   confirmPassword:""};
const RegisterForm = () => {
    const { Content} = Layout;


  const {
    token: { ColorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const {values,errors,handleChange,handleSubmit,touched}=useFormik({
    initialValues:initialValues,
    validationSchema:signupSchema,
    onSubmit:(value,action)=>{
      console.log(value);
      action.resetForm();
    }


  });
  return (
    
      <Content className='login-content'>
      <Row  >
        <Col span={10} offset={6} className='login-form'>
        <form onSubmit={handleSubmit}>
          <p className='login-title'>Register User</p>
        <input type="text" placeholder='Enter Name' name='name' value={values.name} onChange={handleChange} autoComplete='false' className='login-input-fields'/>
        {errors.name && touched ?<Alert message={errors.name.toUpperCase()} type="error" />:null}       
        <br/>
        <input type="email" placeholder='Enter Email' name='email' value={values.email} onChange={handleChange} autoComplete='false' className='login-input-fields'/>
        {errors.email && touched ?<Alert message={errors.email.toUpperCase()} type="error" />:null}
        <br/>
        <input type="password" placeholder='Enter Password' name='password'  value={values.password} onChange={handleChange} autoComplete='false' required className='login-input-fields'/>
        {errors.password && touched ?<Alert message={errors.password} type="error" />:null}
        <br/>
        <input type='password' placeholder='Confirm Password' name='confirmPassword' value={values.confirmPassword} onChange={handleChange} autoComplete='false' className='login-input-fields'/>
        {errors.confirmPassword && touched ?<Alert message={errors.confirmPassword} type="error" />:null}
        <br/>
        <Button type='primary' danger onClick={handleSubmit}>Register</Button>
        
        <br/>
        <Link to='/login'>Click here to Login</Link>
        </form>
        </Col>
      </Row>
      </Content>
     
      
   
  );
};

export default RegisterForm;