import React from "react";
import { Breadcrumb, Card, Layout, Menu, Row, theme,Col, Space,Button } from 'antd';
import { Link } from "react-router-dom";

function NavigationBar({cartCount}){
    const { Header, Content} = Layout;


    const labels = ['Cart','Login']
    
    const items = new Array(2).fill(null).map((_, index) => ({
      key: index + 1,
      label: labels[index],
    }));
       
        
        items[0].label=(<Link to='/cart' >{'Cart '+cartCount} </Link>);
        items[1].label=(<Link to='/login' >Login</Link>);
      const {
        token: { ColorBgContainer, borderRadiusLG },
      } = theme.useToken();
    
      return (
          <Header style={{ display: 'flex', alignItems: "center",background:'white', boxShadow:'10px 10px 5px lightgrey' }}>
            <div className='side-logo' > <Link className="demo-logo" to='/'>SHEY PIZZA</Link><img className="logo-pic"src="https://emojipedia-us.s3.amazonaws.com/source/skype/289/pizza_1f355.png"  alt=""/></div>
            <Menu
              theme="light"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              items={items}
              className="menu-content"
            />
          </Header>
          
         
          

      );




};





export default NavigationBar;