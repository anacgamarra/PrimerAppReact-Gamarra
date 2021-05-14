import React from 'react';
import ItemCountContainer from '../../container/ItemCountContainer/ItemCountContainer'
import './Item.css'
import {Link} from 'react-router-dom';


 const Item = ({id,title,description,price,pictureUrl,stockA,altText,sty}) => {
  
   console.log('id',id)
   console.log('title',title)
    return(
    
            <div className={`Card ${sty}`}>
                   <Link to={`/item/${id}`} className={Link}> 

                        <img className='img'src={pictureUrl} alt={altText}></img>
                        <div className="info">
                            <h2>{title}</h2>
                            <p className="price"><strong>{price}</strong></p>
                            <p>{description}</p>
                        </div>
                    </Link> 
   
                        <ItemCountContainer clase={''} stock={stockA} item={{id,title,description,price,pictureUrl,stockA,altText,sty}}/>
                
            </div> 
   
    )
}
export default Item