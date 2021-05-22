import React, {useState,useEffect,useContext} from 'react';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import { useParams } from 'react-router';
import {getFirestore} from '../../firebase';


const ItemDetailContainer = (props) => {
    const [item,setItem] = useState({});
    const {id} =useParams();
   useEffect(()=>{
    const db = getFirestore();   /*Inicializa el acceso a mi BD*/
    const itemsColection =db.collection('items'); //configuro que voy a acceder a la colleccion items
    console.log(id)
    const item=itemsColection.doc(id)
    item.get()
   .then((doc)=>{ 
      if(!doc.exists){  
        console.log('No existe Item')
      }
    
        setItem({id:doc.id,...doc.data()});     
   }).catch((error)=>{
      console.log('Error al cargar Items',error);
   }).finally(()=>{
      console.log('Termino de cargar Items')
   })
   },[]) /*Esto solo me lo hara la priemra vez que renderiza porque le pase []*/ 
   

    console.log('Item:', item)
    
    return (
        <div className="contenedor">
           <h1>{props.text}</h1>
           
           {item && item.id  ? <ItemDetail sty={'correr'} detail={item}/> : <h2>No se encontro resultados</h2> }
        </div>
    )
}

export default ItemDetailContainer