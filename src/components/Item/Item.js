import React from 'react';
import ItemCountContainer from '../../container/ItemCountContainer/ItemCountContainer'
import './Item.css'


 const Item = ({id,title,description,price,pictureUrl,stockA}) => {
   console.log('id',id)
   console.log('title',title)
    return(
    
            <div className="card">
                        <img className='img'src={pictureUrl}></img>
                        <div className="info">
                            <h2>{title}</h2>
                            <p className="price"><strong>{price}</strong></p>
                            <p>{description}</p>
                        </div>
                        <ItemCountContainer stock={stockA}/>
            </div> 
   
    )
}
export default Item