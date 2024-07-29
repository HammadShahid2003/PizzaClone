import { Form, Input, Button, Flex, Modal, Alert } from "antd";
const { Search } = Input;
import { useState } from 'react';
import axios from 'axios';
import { useSelector } from "react-redux";

const DeleteProduct = () => {
  const [searchId, setSearchId] = useState('');
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSearch = () => {
    const pizzas=useSelector((state)=>state.pizzas.pizza);
    pizzas.find((item)=>{
        if(item.id===searchId){
            setError(false)
        }
        setError('Product not found');
    })
    
  };

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this product?") && !error) {
      setConfirmLoading(true);
      try {
        await axios.delete(`http://localhost:3000/pizzas/${searchId}`);
        alert('Product deleted successfully!');
        setSearchId(''); 
      } catch (error) {
        setError('Failed to delete product. Please try again.');
        console.error('Error deleting product:', error);
      } finally {
        setConfirmLoading(false);
      }
    }
    if(error){
        setError('Product not found');}
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
      >
        {error && <Alert message={error} type="error" />}

        <Search
          placeholder="Enter Product Id"
          allowClear
          enterButton="Search"
          size="large"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
          onSearch={onSearch}
          className="Admin-Form-items"
        />

        <br />
        <Button
          className="Admin-Form-items"
          type="primary"
          danger
          onClick={handleDelete}
          loading={confirmLoading}
        >
          Delete Product
        </Button>
      </Form>
    </Flex>
  );
};

export default DeleteProduct;
