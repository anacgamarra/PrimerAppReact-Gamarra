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
     const db = getFirestore();   /*Inicializa el acceso a mi BD*/
     const itemsColection =db.collection('items'); //configuro que voy a acceder a la colleccion items
    itemsColection.get()
    .then((querySnapshot)=>{  /*invoca el llamado a toda la colleccion con get   y accede a el resultado querySnapshot*/
       if(querySnapshot.size===0){  /*con .size  ve si tiene algo*/
         console.log('No hay Items')
       }
         const documentos=querySnapshot.docs.map(doc=>{
            return { id:doc.id,     /*retorno un objeto que arme con el id y el doc.data() desestructura para ponerlo en el mismo objeto*/
                    ...doc.data()
                  }
          });/*con querySnapshot.docs accede a los datos documentos de FireBase devuelve un array de docs,
          luego recorro cada elemento del arreglo con map para acceder alos datos con .data() este map me devolvera otro arreglo con los datos
      
          ya preparados*/
       console.log(id) 
      if(id===undefined){   //si id tiene un valor quiere decir que estoy eligiendo una categoria /category/:id sino quiere decir que estoy en '/'   
        setProductos(documentos);  /*y guarda todo en el estado local de productos*/
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


     console.log(productos)
    
    return (
        <div className="contenedor">
           <h1>{props.text}</h1>
           { }
           {loading?<h2>Cargando...</h2>:productos.length > 0 ?<ItemList productos={productos}/> : <h2>No se encontro resultados</h2>}
        </div>
    )
}


export default ItemListContainer;