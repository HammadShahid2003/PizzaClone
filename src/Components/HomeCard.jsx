import { Breadcrumb, Card, Layout, Menu, Row, theme,Col, Space,Button } from 'antd';
import data from '../data.json';



function HomeCard({name,price,src,setCartCount,cartCount}){

return(

    <>
    <Card title={name} className='card-style'>
            <img src={src}  alt="" style={{height: '50%', width: '60%'}}/>
            <div className="options-fields">
                <div className='inside-options'>
                
                    <p>Variants:</p>
                    <select name="Size" id="" className='options-select'>
                        <option value="">Large</option>
                        <option value="">Medium</option>
                        <option value="">Small</option>
                    </select>
                    
                    </div>
                    <div className='inside-options'>
                      
                    <p>Quantity:</p>
                    <select name="Quantity" id="" className='options-select'>
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                        <option value="">4</option>
                        <option value="">5</option>
                        <option value="">6</option>
                        <option value="">7</option>
                        <option value="">8</option>
                        <option value="">9</option>
                        <option> 10</option>
                    </select>
                    
                </div>
            </div>
            <div className="price-and-cart">
            <div className="options-fields">
                <div className='inside-options'>
                
                    <p style={{fontWeight:"bold"}}>{`Price:${price} Rs/-`}</p>
                    
                    
                    </div>
                    <div className='inside-options'>
                    <Button type="primary" danger onClick={()=>{
                        console.log(cartCount);
                            setCartCount(cartCount+1);
                    }}>ADD TO CART</Button>
                    
                </div>
            </div>
            
            </div>
            </Card>
    </>
);


}
export default HomeCard;