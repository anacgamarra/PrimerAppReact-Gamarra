import React, {useState,useEffect} from 'react';
import './ItemLListContainer.css';
import ItemList from '../components/ItemList/ItemList'
import { useParams } from 'react-router';
import {getFirestore} from '../firebase/index';

const ItemListContainer = (props) => {
    const [ productos, setProductos ] = useState([])
    const [loading,setLoading]=useState(true)
    const {id} =useParams();
  

  useEffect(()=>{
     const db = getFirestore();  
     const itemsColection =db.collection('items'); //configuro que voy a acceder a la colleccion items
    itemsColection.get()
    .then((querySnapshot)=>{  
       if(querySnapshot.size===0){  
         console.log('No hay Items')
       }
         const documentos=querySnapshot.docs.map(doc=>{
            return { id:doc.id,    
                    ...doc.data()
                  }
          });
      if(id===undefined){   
        setProductos(documentos); 
      }else{
        const resFiltrado=documentos.filter(x => x.categoryId ===`${id}`)
        setProductos(resFiltrado)
     }       
    }).catch((error)=>{
       console.log('Error al cargar Items',error);
    }).finally(()=>{
       setLoading(false);
    })
  },[id]);

    return (
        <div className="contenedor">
           <h1>{props.text}</h1>
           { }
           {loading?<h2>Cargando...</h2>:productos.length > 0 ?<ItemList productos={productos}/> : <h2>No se encontro resultados</h2>}
        </div>
    )
}


export default ItemListContainer;