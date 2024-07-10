import React, { useState } from 'react';
import { Flex, Card, Layout, Menu, Row, theme,Col, Space,Button } from 'antd';
import { Link } from 'react-router-dom';
import data from '../data.json'
import Icon,{DeleteTwoTone,MinusOutlined,PlusOutlined} from '@ant-design/icons'
const Cart = () => {
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
      <Content style={{ padding: '0' ,margin:'0',background:'#F8F8F8',}}>
      <Flex style={{width:'100vw' ,marginTop:'4rem'}} gap={'20rem'} justify='center'>
        
          <div className='left-cart-card'
            key='1'
            
          ><h1>My Cart</h1>
          <Flex>
            <div className='cart-items cart-items-textSide'><p>Non Veg Pizza</p>
            <p>Price:100</p>
            <p>Quantity: <PlusOutlined style={{color:'green'}}/>  1   <MinusOutlined style={{color:'red'}}/> </p>
            </div>
            <div className='cart-items'><img src="https://www.dominos.co.in//files/items/golden_corn_veg.jpg" alt="" style={{height:'80px',width:'80px'}}/></div>
            <div className='cart-items' style={{display:'flex', justifyContent:'center',alignItems:'center'}}><DeleteTwoTone twoToneColor='#ff0000' /></div>
          </Flex>
          <Flex>
            <div className='cart-items cart-items-textSide'><p>Non Veg Pizza</p>
            <p>Price:100</p>
            <p>Quantity: <PlusOutlined style={{color:'green'}}/>  1   <MinusOutlined style={{color:'red'}}/> </p>
            </div>
            <div className='cart-items'><img src="https://www.dominos.co.in//files/items/golden_corn_veg.jpg" alt="" style={{height:'80px',width:'80px'}}/></div>
            <div className='cart-items' style={{display:'flex', justifyContent:'center',alignItems:'center'}}><DeleteTwoTone twoToneColor='#ff0000' /></div>
          </Flex>
          <Flex>
            <div className='cart-items cart-items-textSide'><p>Non Veg Pizza</p>
            <p>Price:100</p>
            <p>Quantity: <PlusOutlined style={{color:'green'}}/>  1   <MinusOutlined style={{color:'red'}}/> </p>
            </div>
            <div className='cart-items'><img src="https://www.dominos.co.in//files/items/golden_corn_veg.jpg" alt="" style={{height:'80px',width:'80px'}}/></div>
            <div className='cart-items' style={{display:'flex', justifyContent:'center',alignItems:'center'}}><DeleteTwoTone twoToneColor='#ff0000' /></div>
          </Flex>
          <Flex>
            <div className='cart-items cart-items-textSide'><p>Non Veg Pizza</p>
            <p>Price:100</p>
            <p>Quantity: <PlusOutlined style={{color:'green'}}/>  1   <MinusOutlined style={{color:'red'}}/> </p>
            </div>
            <div className='cart-items'><img src="https://www.dominos.co.in//files/items/golden_corn_veg.jpg" alt="" style={{height:'80px',width:'80px'}}/></div>
            <div className='cart-items' style={{display:'flex', justifyContent:'center',alignItems:'center'}}><DeleteTwoTone twoToneColor='#ff0000' /></div>
          </Flex>

          
          </div>
          <div className='right-cart-card'
            key='1'
           
          ><h1>Total Amount: 1000 RS/-</h1></div>
      </Flex>   
      </Content>
     
      
    </Layout>
  );
};

export default Cart;