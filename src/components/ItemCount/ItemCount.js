import React from 'react';



const ItemCount = ({btnOnAdd,btnSumar,btnRestar,stockTotal,stockPedido}) =>{
    


    return(
       <div className="info">
           <p   className = {stockTotal===0 ? "stk sinStk" : "stk"}>El stock actual es: <strong >{stockTotal}</strong></p>
           <div className="btns">
            <button  className="btn"  disabled={stockTotal < 0} onClick={btnRestar}>-</button>
            <p>{stockPedido}</p>
            <button  className="btn"  disabled={stockTotal < 0} onClick={btnSumar}>+</button>
           </div>
           <button  className="btn btnCompra"  disabled={stockPedido===0 } onClick={btnOnAdd}>Comprar</button>
       </div>

   )
}


export default ItemCount;