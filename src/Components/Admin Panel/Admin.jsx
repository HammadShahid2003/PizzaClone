import { Button, Row, Space } from "antd";
import { useState } from "react";
import AddProduct from "./AddProduct";
import DeleteProduct from "./DeleteProduct"; // Assume you have this component
import EditProduct from "./EditProduct"; // Assume you have this component
import { fetchPizza } from "../../PizzaSlice";
import { useDispatch,useSelector } from "react-redux";
const Admin = () => {
  const dispatch = useDispatch();
  dispatch(fetchPizza());

  const [currentView, setCurrentView] = useState(null);

  const renderComponent = () => {
    switch (currentView) {
      case 'add':
        return <AddProduct />;
      case 'delete':
        return <DeleteProduct />;
      case 'edit':
        return <EditProduct />;
      default:
        return null;
    }
  };

  return (
    <>
      <Row span={24} justify="center" align="middle" style={{ padding: "2rem" }}>
        <Space size={30} align="center">
          <Button onClick={() => setCurrentView('add')}>Add Product</Button>
          <Button onClick={() => setCurrentView('delete')}>Delete Product</Button>
          <Button onClick={() => setCurrentView('edit')}>Edit Product</Button>
        </Space>
      </Row>
      {renderComponent()}
    </>
  );
};

export default Admin;
