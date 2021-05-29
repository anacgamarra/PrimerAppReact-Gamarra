import React, {useState,useContext, useEffect} from 'react';
import './Cart.css';
import {CartContext} from '../../context/CartContext';
import {Link} from 'react-router-dom';
import firebase from 'firebase';
import {getFirestore} from '../../firebase/index';

const Cart = () => {
    const {cart, setCart,isInCart,addItem,removeItem,clearCart,SumarTotalFinal} = useContext(CartContext);
    const datosCart= [...cart];
   
    const buyer ={name:'Ana Clara',phone:'4567890',email:'anagama@gmail.com'}
    const [order,setOrderId]= useState('');
    const handleCompra= ()=>{
        const db = getFirestore();   /*Inicializa el acceso a mi BD*/
        const orders =db.collection('orders'); //configuro que voy a acceder a la colleccion items
        const newOrder={
            buyer:buyer,
            items:cart,
            date:firebase.firestore.Timestamp.fromDate(new Date()),
            total:SumarTotalFinal()
         };
        console.log(newOrder)
       if (newOrder!=={}){
            orders.add(newOrder)
            .then(({id})=>{
                setOrderId(id)
                console.log(id)
            })
            .then((res)=>{
                handleStock();
            })
            .catch((error)=>{
                console.log(error)
            })
            .finally(()=>{
                console.log('Fin Order')
                console.log(order)
                clearCart();
            })
       } 
     }


 const handleStock =()=>{
     const datos= datosCart.map(j => {return {cant:j.qt,id:j.Items.id,stockPrevio:j.Items.stockA}})
     console.log(datos)
     const db = getFirestore();
    
     datos.forEach(item => { 
        var docRef=db.collection('items').doc(item.id);
         const StockActual= docRef.update({stockA:item.stockPrevio-item.cant})
        })
 }
 
    return(
        <div className="contenedor">
             <h1>{'Finalizar Compra'}</h1>
             {datosCart.length>0?
             <div>
                
                 {datosCart.map(i=>{
                  return (
                    <div className='ItemCart' key={i.Items.id}>
                        <img src={i.Items.pictureUrl} alt={i.Items.altText}/> 
                        <div>
                            <p><strong>Producto:</strong> {i.Items.id} - {i.Items.title}</p> 
                            <p><strong>Precio:</strong> ${i.Items.price}</p> 
                            <p><strong>Cantidad:</strong> {i.qt}</p>
                            <p><strong>Total del Item:</strong>${i.totLin}</p> 
                            <button onClick={()=>removeItem(i.Items.id)}>X</button>
                        </div>
                   </div>)
                
                })}

                <div className='TotalFinal'> <strong>Total</strong><p>${SumarTotalFinal()}</p> </div>
                <button className="btn btnCompra" onClick={handleCompra}>Confirmar Compra</button>
                {order && <h2>Orden Creada {order}</h2>}
             </div>  
          :
          <div><h2>No hay productos en el carrito</h2><Link to={'/'}> <button  className="btn btnCompra">Volver a Home</button></Link></div>}
           {order && <h2>Orden Creada {order}</h2>}
        </div> 
    )

}



export default Cart;