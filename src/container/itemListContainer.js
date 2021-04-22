import React, {useState,useEffect} from 'react';
import './ItemLListContainer.css';
import ItemList from '../components/ItemList/ItemList'


const ItemListContainer = (props) => {
    const [ productos, setProductos ] = useState([])

  useEffect(() => {    /*Esto solo me lo hara la priemra vez que renderiza porque le pase []*/ 
    const task = new Promise((resolve,reject)=>{
    const items = [
          {
            id:'1',
            title: 'Remera Dama',
            description:'Remera Dama algodon Talle Unico',
            price:'$600', 
            pictureUrl: 'http://i.imgur.com/2p9VXAn.jpg', //'../../public/assets/remeraMujer.jpg'
            stockA:0
          },
          {
            id:'2',
            title: 'Remera Niño',
            description:'Remera Niño algodon Talle M',
            price:'$400', 
            pictureUrl:'http://i.imgur.com/2p9VXAn.jpg',// '../../public/assets/remeraNinio.jpg'
            stockA:5
          },
          {
            id:'3',
            title: 'Remera Hombre',
            description:'Remera Hombre algodon Talle L',
            price:'$700', 
            pictureUrl: 'http://i.imgur.com/2p9VXAn.jpg',//'public/assets/remeraHombre.jpg'
            stockA:5
          },

          { id:'4',
            title: 'Remera Hombre',
            description:'Remera Hombre algodon Talle L',
            price:'$700', 
            pictureUrl: 'http://i.imgur.com/2p9VXAn.jpg',
            stockA:1
          }

        ]
        setTimeout(()=>{
          resolve(items)
        },2000)
      })
  
       task.then((res)=>{
            setProductos(res) /*aqui guaardo en mi estado local el resultado de mi fecth en este caso es un arreglo*/
       })
       .catch((err)=>{
            console.log("Hubo un error")
        })
        .finally(()=>{
            console.log("AL FIN TERMINE")
        })
  },[])
     console.log(productos)
    
    return (
        <div className="contenedor">
          {/* <h1>{props.text}</h1> */}
           {productos.length > 0 ?<ItemList productos={productos}/> : <h2>No se encontro resultados</h2> }
           {/* */}
        </div>
    )
}


export default ItemListContainer;