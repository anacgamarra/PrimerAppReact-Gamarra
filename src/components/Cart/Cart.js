import React, {useState,useContext, useEffect} from 'react';
import './Cart.css';
import {CartContext} from '../../context/CartContext';
import {Link} from 'react-router-dom';


const Cart = () => {
    const {cart, setCart,isInCart,addItem,removeItem,clearCart,SumarTotalFinal} = useContext(CartContext);
   
    const datosCart= [...cart];
  

    return(
        <div className="contenedor">
             <h1>{'Finalizar Compra'}</h1>
             {datosCart.length>0?
             <div>
                
                 {datosCart.map(i=>{
                  return (
                    <div className='ItemCart' key={i.Items.id}>
                        <img src={i.Items.pictureUrl}/> 
                        <div>
                            <p><strong>Producto:</strong> {i.Items.id} - {i.Items.title}</p> 
                            <p><strong>Precio:</strong> ${i.Items.price}</p> 
                            <p><strong>Cantidad:</strong> {i.qt}</p>
                            <p><strong>Total del Item:</strong>${i.totLin}</p> 
                            <button onClick={()=>removeItem(i.Items.id)}>X</button>
                        </div>
                   </div>)
                
                })}

                <div className='TotalFinal'> <strong>Total</strong>  <p>${SumarTotalFinal(0)}</p> </div>
             </div>  
          :
          <div><h2>No hay productos en el carrito</h2><Link to={'/'}> <button  className="btn btnCompra">Volver a Home</button></Link></div>}
        </div> 
    )

}



export default Cart;