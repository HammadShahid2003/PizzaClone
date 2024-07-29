import {  Card,Button } from 'antd';

import { useState } from 'react';
import useCart from '../CartContext';
import { useDispatch } from 'react-redux';
import { addToCart } from '../cartSlice';
import { useSelector } from 'react-redux';


function HomeCard({pid,name,price,src}){
    const [sizeValue,setSizeValue]=useState("small");
    const [Quantity,setQuantity]=useState(1);
    // const {cartCount,setCartCount,cartItems,setCartItems}=useCart();
    const dispatch=useDispatch();
    const cartItems=useSelector(state=>state.cart.items);
    
return(

    <>
    <Card title={name} className='card-style'>
            <img src={src}  alt="" className='card-style-img'/>
            <div className="options-fields">
                <div className='inside-options'>
                
                    <p>Variants:</p>
                    <select name="Size" id="" className='options-select' value={sizeValue} onChange={(event)=>{setSizeValue(event.target.value);}}>
                        <option value="large">Large</option>
                        <option value="medium">Medium</option>
                        <option value="small">Small</option>
                    </select>
                    
                    </div>
                    <div className='inside-options'>
                      
                    <p>Quantity:</p>
                    <select name="Quantity" id="" className='options-select' value={Quantity} onChange={(event)=>{setQuantity(event.target.value)}}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value={"10"}> 10</option>
                    </select>
                    
                </div>
            </div>
            <div className="price-and-cart">
            <div className="options-fields">
                <div className='inside-options'>
                
                    <p style={{fontWeight:"bold"}}>{`Price:${price[sizeValue]*(Quantity)} Rs/-`}</p>
                    
                    
                    </div>
                    <div className='inside-options'>
                    <Button type="primary" danger onClick={()=>{
                            const foundItem = cartItems.find(item => item.pid === pid);
                            if(!foundItem){
                            
                            const priceToSend=price[sizeValue];
                            dispatch(addToCart({pid,name,sizeValue,Quantity,priceToSend}));
                            }
                    }}>ADD TO CART</Button>
                    
                </div>
            </div>
            
            </div>
            </Card>
    </>
);


}
export default HomeCard;