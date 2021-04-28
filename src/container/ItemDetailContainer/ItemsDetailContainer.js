import React, {useState,useEffect} from 'react';
import ItemDetail from '../../components/ItemDetail/ItemDetail'

const ItemDetailContainer = (props) => {
    const [item,setItem] = useState({});
   
    useEffect(() => {    /*Esto solo me lo hara la priemra vez que renderiza porque le pase []*/ 
        const task = new Promise((resolve,reject)=>{
            const itemArray = 
                {
                    id:'2',
                    title: 'Remera Niño algodon Talle M',
                    description:'Remera Niño algodon Talle M, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ullamcorper ipsum ipsum, in pretium eros tincidunt ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis faucibus nisi. Morbi in odio id odio porttitor venenatis. Maecenas eleifend, ipsum eget scelerisque varius',
                    price:'$400', 
                    pictureUrl:'/assets/remeraNinio.jpg',// '../../public/assets/remeraNinio.jpg'
                    stockA:5,
                    altTex:'Imagen Remera ninio',
                    size:'M'
                }
                
            setTimeout(()=>{
                resolve(itemArray)
            },2000)

            })
        task.then((res)=>{
                setItem(res) /*aqui guaardo en mi estado local el resultado de mi fecth en este caso es un arreglo*/
        })
        .catch((err)=>{
                console.log("Hubo un error")
            })
        .finally(()=>{
                console.log("TERMINO")
            })
    },[])    

    console.log('Item:', item)
    
    return (
        <div className="contenedor">
           <h1>{props.text}</h1>
           
           {item && item.id  ? <ItemDetail  detail={item}/> : <h2>No se encontro resultados</h2> }
        </div>
    )
}

export default ItemDetailContainer