import React,{useContext} from 'react';
import '../ItemDetail/ItemDetail.css';
import ItemCountContainer from '../../container/ItemCountContainer/ItemCountContainer';


const ItemDetail = ({detail}) => {

    console.log(detail)
    return(
        <React.Fragment>
            <div className="content">
                <div className="contain">
                  <div className="contain-img"> 
                    <img src={detail.pictureUrl} alt={detail.altText}/>
                   </div>
                   <div className="contain-detail"> 
                        <h2 className='titleDetail'>{detail.title}</h2>
                        <p className="detail">Talle: {detail.talle}</p>
                        <p>{detail.description}</p>
                        <p className='price'>${detail.price}</p>
                        <ItemCountContainer clase={'styleDetail'}stock={detail.stockA} item={detail}/>
                  
                    </div> 
                </div>
            </div>
        </React.Fragment>
    )
} 


export default ItemDetail;