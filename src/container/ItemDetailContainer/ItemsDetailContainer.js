import React, {useState,useEffect} from 'react';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import { useParams } from 'react-router';
import {getFirestore} from '../../firebase';


const ItemDetailContainer = (props) => {
    const [item,setItem] = useState({});
    const {id} =useParams();
   useEffect(()=>{
    const db = getFirestore();   /*Inicializa el acceso a mi BD*/
    const itemsColection =db.collection('items'); //configuro que voy a acceder a la colleccion items
    const item=itemsColection.doc(id)
    item.get()
   .then((doc)=>{ 
      if(!doc.exists){  
        console.log('No existe Item')
      }else{
        setItem({id:doc.id,...doc.data()}); 
      }      
   }).catch((error)=>{
      console.log('Error al cargar Items',error);
   }).finally(()=>{
      console.log('Termino de cargar Items')
   })
   },[]) 
   
    return (
        <div className="contenedor">
           <h1>{props.text}</h1>
           
           {item && item.id  ? <ItemDetail sty={'correr'} detail={item}/> : <h2>No se encontro resultados</h2> }
        </div>
    )
}

export default ItemDetailContainer