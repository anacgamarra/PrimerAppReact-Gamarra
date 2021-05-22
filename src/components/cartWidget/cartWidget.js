import React, {useContext, useEffect} from 'react';
import {CartContext} from '../../context/CartContext';
import Cart from './cartWidget.svg';//'../../logo.svg'; 
import './cartWidget.css';
import {Link} from 'react-router-dom';

const CartWidget = () => {
   const {cart}=useContext(CartContext)
    const datosCart= [...cart];
    const sumarQt=((totQt)=>{datosCart.forEach((x)=>totQt=totQt+x.qt);return totQt})
     

    return (
        
        sumarQt(0)!==0 &&  <Link to={`/cart`} className={Link}> <img src={Cart} className="cartWidget"  alt="cartWidget"/><p style={{textAlign:'center'}}>{sumarQt(0)}</p></Link>
            
       
    )
}

export  default CartWidget;