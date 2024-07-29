import { Form, Input, Button, InputNumber, Flex, Alert } from "antd";
const { Search } = Input;
import { useState } from 'react';
import { useFormik } from "formik";
import axios from "axios";
import { AddProductSchema } from "../../forms/AddProductSchema"; // You should create a schema for adding products

const initialValues = {
  name: "",
  url: "",
  smallPrice: 0,
  mediumPrice: 0,
  largePrice: 0,
};

const AddProduct = () => {
  const [formError, setFormError] = useState(null);

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: AddProductSchema, 
    onSubmit: (values) => {
     
      
    addProduct({
      name: values.name,
      src: values.url,
      price: {
      small: values.smallPrice,
      medium: values.mediumPrice,
      large: values.largePrice},
    });

    },
  });

  const { values, errors, touched, setFieldValue, handleChange, handleBlur, handleSubmit } = formik;

 const addProduct = async (productData) => {
    try {
      await axios.post('http://localhost:3000/pizzas', productData);
      alert('Product added successfully!');
      setFormError(null);
      formik.resetForm(); 
    } catch (error) {
      setFormError('Failed to add product. Please try again.');
      console.error('Error adding product:', error);
    }
  };

  return (
    <Flex justify="center">
      <Form
        labelCol={{ span: 10 }}
        wrapperCol={{ span: 30 }}
        layout="horizontal"
        initialValues={{ size: "large" }}
        size={"large"}
        style={{ maxWidth: 600 }}
        className="Admin-Form"
        onFinish={handleSubmit}
      >
        {formError && <Alert message={formError} type="error" />}
        
        <label className="Admin-Form-items">Name:</label>
        <Input
          placeholder="Enter Pizza Name"
          name="name"
          value={values.name}
          className="Admin-Form-items"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.name && touched.name ? <Alert message={errors.name} type="error" /> : null}
        
        <label className="Admin-Form-items">Picture Url:</label>
        <Input
          placeholder="Enter Url"
          name="url"
          value={values.url}
          className="Admin-Form-items"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.url && touched.url ? <Alert message={errors.url} type="error" /> : null}
        
        <label className="Admin-Form-items">Prices:</label>
        <InputNumber
          placeholder="Small"
          name="smallPrice"
          value={values.smallPrice}
          className="Admin-Form-items"
          onChange={(value) => setFieldValue('smallPrice', value)}
          onBlur={handleBlur}
        />
        {errors.smallPrice && touched.smallPrice ? <Alert message={errors.smallPrice} type="error" /> : null}

        <InputNumber
          placeholder="Medium"
          name="mediumPrice"
          value={values.mediumPrice}
          className="Admin-Form-items"
          onChange={(value) => setFieldValue('mediumPrice', value)}
          onBlur={handleBlur}
        />
        {errors.mediumPrice && touched.mediumPrice ? <Alert message={errors.mediumPrice} type="error" /> : null}

        <InputNumber
          placeholder="Large"
          name="largePrice"
          value={values.largePrice}
          className="Admin-Form-items"
          onChange={(value) => setFieldValue('largePrice', value)}
          onBlur={handleBlur}
        />
        {errors.largePrice && touched.largePrice ? <Alert message={errors.largePrice} type="error" /> : null}
        
        <br />
        <Button type="primary" htmlType="submit">Add Product</Button>
      </Form>
    </Flex>
  );
};

export default AddProduct;
