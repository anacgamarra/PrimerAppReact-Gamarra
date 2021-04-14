import React from 'react';
import './ItemLListContainer.css';

const ItemListContainer = (props) => {
   
    return (
        <div className="contenedor">
            <h1>{props.text}</h1>
        </div>
    )
}


export default ItemListContainer;