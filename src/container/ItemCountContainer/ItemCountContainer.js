import React, {useState, useEffect} from 'react';
import ItemCountP from '../../components/ItemCount/ItemCount'

const ItemCount = ({stock}) => {
  console.log(stock)
    const [stockPedido, setStockPedido] =useState(1);
    const [stockTotal, setStockTotal] =  useState(stock);

const  sumar = ()=> {
 
  if (stockTotal === 0){
   
  }else{
      setStockPedido(stockPedido + 1)
      setStockTotal(stockTotal - 1)
    
  }
}

const  restar = ()=> {
  if (stockTotal < 0 || stockPedido === 0){
     
  }else{
      setStockPedido(stockPedido - 1)
      setStockTotal(stockTotal + 1)
      if(stockTotal===0){
         
      }
  }
}

const onAdd = () => {
  let compra = stockPedido
  if (compra === 0 ){
      console.log('Pedido = 0')
  }

}
   return (
     <ItemCountP btnOnAdd={onAdd} btnSumar={sumar} btnRestar={restar} stockTotal={stockTotal} stockPedido={stockPedido}/> 
   )


}
export default ItemCount;