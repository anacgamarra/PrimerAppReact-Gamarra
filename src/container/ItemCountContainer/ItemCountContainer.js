import React, {useContext, useState} from 'react';
import ItemCountP from '../../components/ItemCount/ItemCountP';
import {CartContext} from '../../context/CartContext';
import '../../components/Item/Item.css';
import {Link} from 'react-router-dom';

const ItemCount = ({stock,clase,item}) => {

  console.log(item)
    const itemA=item
    const [stockPedido, setStockPedido] =useState(1);
    const [stockTotal, setStockTotal] =  useState(stock);
    const {cart, setCart,isInCart,addItem,removeItem,clearCart} = useContext(CartContext);  
    const [terminar,setTerminar] =useState(false)
const  sumar = ()=> {
  if (stockTotal !== 0){
      setStockPedido(stockPedido + 1)
      setStockTotal(stockTotal - 1)
  }
}

const  restar = ()=> {
  if (!(stockTotal < 0 || stockPedido === 0)){
    setStockPedido(stockPedido - 1)
    setStockTotal(stockTotal + 1)
  }
}

const onAdd = () => {
  let cantCompra = stockPedido
  if (cantCompra === 0 ){
      alert('No selecciono ningun articulo')
  }else{
     addItem(itemA,cantCompra)
     setTerminar(!terminar); //cambia de estado para mostrar el boton terminar compra
  }

}
   return (
     <>
        {!terminar?<ItemCountP clas={clase} btnOnAdd={onAdd} btnSumar={sumar} btnRestar={restar} stockTotal={stockTotal} stockPedido={stockPedido}/> 
         :<Link to={'/cart'}> <button  className="btn btnCompra">Terminar Compra</button></Link>}
     </>    
   )


}
export default ItemCount;