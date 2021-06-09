import React, {useState,useEffect} from 'react';
import NavBar from '../../components/navBar/navBar';
import {getFirestore} from '../../firebase/index';

const NavBarContainer = () => {
    const [loading,setLoading]=useState(true)
    const [category,setCategory] = useState([])
  

  useEffect(()=>{
     const db = getFirestore();   
     const itemsColection =db.collection('category');
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
  
        setCategory(documentos);  
        
    }).catch((error)=>{
       console.log('Error al cargar Items',error);
    }).finally(()=>{
       setLoading(false);
    })

  },[]);
 
    return (
        <div> {loading?<h2>Cargando...</h2>:category.length > 0 ?<NavBar  className="menu" category={category}/> : <h2>No se encontro resultados</h2>}</div> 
    )
}


export default NavBarContainer;