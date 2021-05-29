import React, {useState,useContext, useEffect} from 'react';
import {getFirestore} from '../../firebase/index';


const OrdenComponent = ({OrderId})=>{
    const [Orden,setOrden]=useState({});
    useEffect(()=>{
        const db = getFirestore();   /*Inicializa el acceso a mi BD*/
        const itemsColection =db.collection('orders'); //configuro que voy a acceder a la colleccion items
        const item=itemsColection.doc(OrderId)
        console.log(OrderId)
        item.get()
       .then((doc)=>{ 
          if(!doc.exists){  
            console.log('No existe Item')
          }
            console.log(...doc.data()) 
            setOrden({...doc.data()});     
       }).catch((error)=>{
          console.log('Error al cargar Orden',error);
       }).finally(()=>{
          console.log('Termino de cargar Orden')
       })
       },[]) /*Esto solo me lo hara la priemra vez que renderiza porque le pase []*/ 
       console.log(Orden)
  return  ( <div>
        <h2>Orden Confirmada</h2>
        <strong>Orden Nro: {OrderId}</strong>
        <p>Datos del Comprador:</p>
        <strong>Nombre:</strong><p>{Orden.buyer.name}</p>
        <strong>Telefono:</strong><p>{Orden.buyer.phone}</p>
        <strong>Email:</strong><p>{Orden.buyer.email}</p>
    </div> )
    }




export default OrdenComponent;