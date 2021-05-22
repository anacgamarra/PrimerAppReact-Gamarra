import React from 'react'
import Item from '../Item/Item'
import './ItemList.css'


const ItemList = ({productos}) => {
    console.log(`Productos desde ItemsList:${productos}`)
    console.log(productos[0].id)
    return(  
        <div className="cardContainer">
              {productos.map((i)=>
                  <Item  key={i.id} id={i.id} title={i.title} description={i.description} price={i.price} pictureUrl={i.pictureUrl} stockA={i.stockA} altText={i.altText} talle={i.talle}/>
              )}
        </div>
           
        )

}

export default ItemList
