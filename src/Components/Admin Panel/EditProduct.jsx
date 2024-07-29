import {Form, Input,Button,InputNumber, Flex, Alert, } from "antd";
const {Search}=Input;
import {useSelector} from 'react-redux';
import {useState} from 'react';
import { Formik, useFormik } from "formik";
import { EditProductSchema } from "../../forms/EditProductSchema";
import axios from "axios";
const initialValues={
  name:"",
  url:"",
  smallPrice:0,
  mediumPrice:0,
  largePrice:0,
}
const EditProduct=()=>{
  
  const pizzas=useSelector((state)=>state.pizzas.pizza);
const[searchId,setSearchId]=useState('');

const fillfields=(item)=>{
    setFieldValue('name', item.name);
    setFieldValue('url', item.src);
    setFieldValue('smallPrice', item.price["small"]);
    setFieldValue('mediumPrice', item.price["medium"]);
    setFieldValue('largePrice', item.price["large"]);

}
const { values,errors,handleChange,touched,setFieldValue,handleBlur} =useFormik({
initialValues:initialValues,
validationSchema:EditProductSchema




});
const onSearch=()=>{
   
    pizzas.find((item)=>{
        
        if(item.id===searchId){
            fillfields(item);
        }
    })};

const editProduct=()=>{
 
    if (window.confirm("Are you sure you want to edit this product?")) {
      axios
        .put(`http://localhost:3000/pizzas/${searchId}`, {
          name: values.name,
          src: values.url,
          price: {
            small: values.smallPrice,
            medium: values.mediumPrice,
            large: values.largePrice,
          },
        })
        .then((res) => {
          Formik.resetForm();
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  

}


return (
  <Flex justify="center">
    <Form
      labelCol={{
        span: 10,
      }}
      wrapperCol={{
        span: 30,
      }}
      layout="horizontal"
      initialValues={{
        size: "large",
      }}
      size={"large"}
      style={{
        maxWidth: 600,
      }}
      className="Admin-Form"
    >
      <Search
        placeholder="Enter Product Id"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onSearch}
        value={searchId}
        onChange={(e) => {
          setSearchId(e.target.value);
        }}
        className="Admin-Form-items"
      />
      <label className="Admin-Form-items">Name:</label>
      <Input
        placeholder="Enter Pizza Name"
        name="name"
        value={values.name}
        className="Admin-Form-items"
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {errors.name && touched.name?<Alert message={errors.name} type="error" />:null}
        
      
      <label className="Admin-Form-items">Picture Url:</label>
      <Input
        placeholder="Enter Url"
        className="Admin-Form-items"
        value={values.url}
        name="url"
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {errors.url && touched.url ?<Alert message={errors.url} type="error" />:null
       
      }
      <label className="Admin-Form-items">Prices:</label>
      <InputNumber
        placeholder="Small"
        name="smallPrice"
        value={values.smallPrice}
        className="Admin-Form-items"
        onChange={(value) => setFieldValue('smallPrice', value)}
        onBlur={handleBlur}
      />
      {errors.smallPrice && touched.smallPrice?<Alert message={errors.smallPrice} type="error" />:null
      }
      <InputNumber
        placeholder="Medium"
        name="mediumPrice"
        value={values.mediumPrice}
        className="Admin-Form-items"
        onChange={(value) => setFieldValue('mediumPrice', value)}
        onBlur={handleBlur}
      />
      {errors.mediumPrice && touched.mediumPrice ?<Alert message={errors.mediumPrice} size="small" type="error" />:null}
      <InputNumber
        placeholder="Large"
        name="largePrice"
        value={values.largePrice}
        className="Admin-Form-items"
        onChange={(value) => setFieldValue('largePrice', value)}
        onBlur={handleBlur}
      />
      {errors.largePrice && touched.largePrice?<Alert message={errors.largePrice} type="error" />:null}
      <br />
      <Button onClick={editProduct}>Edit Product</Button>
    </Form>
  </Flex>
);




}

export default EditProduct;