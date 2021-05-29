
import React, {useState,useContext, useEffect} from 'react';
import {CartContext} from '../../context/CartContext';
import {getFirestore} from '../../firebase/index';
import OrdenComponent from '../../components/OrdenComponent/OrdenComponent'
import firebase from 'firebase'

const CreateOrder=()=>{
    const {cart, setCart,isInCart,addItem,removeItem,clearCart,SumarTotalFinal} = useContext(CartContext);
    const buyer ={name:'Ana Clara',phone:'4567890',email:'anagama@gmail.com'}
    const [order,setOrderId]= useState('');
    const [loading,setLoading]=useState(true);
  function AddOrder(){
        const db = getFirestore();   /*Inicializa el acceso a mi BD*/
        const orders =db.collection('orders'); //configuro que voy a acceder a la colleccion items
        const newOrder={
        buyer:buyer,
        items:cart,
        date:firebase.firestore.Timestamp.fromDate(new Date()),
        total:SumarTotalFinal(0)
    };
    console.log(typeof(cart))
    console.log(newOrder)
    orders.add(newOrder)
    .then(({id})=>{
        setOrderId(id)
    })
    .catch((error)=>{
        console.log(error)
    })
    .finally(()=>{
        console.log('Fin Order')
        setLoading(false);
    })
 }
 
   return(
         loading?<h2>Cargando...</h2>:<h2>{order}</h2>        
   )

}

export default CreateOrder;