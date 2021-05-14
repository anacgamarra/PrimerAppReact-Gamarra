import React, {useState,useEffect} from 'react';

export const CartContext= React.createContext([]);   //creo el contexto

export const Cantidad = ({children}) => {

    const [cart, setCart] = useState([])
    


    useEffect(()=>{
      console.log(cart)
    },[cart])

    function isInCart(itemId){
      const InCart= cart.find( x => x.id === itemId)   //finde devuelve el valor del primer elemento que cumple la condicion
      if (InCart!==undefined){
        return true;
      }
      return false;   
 
    }

/*busca la cantidad del Item y le suma la cantidad nueva*/
function getQuantity(Items,cant){
    const datosCart= [...cart];
    datosCart.map(i=>{
        if(i.id ===Items.id){
          if(i.qt < Items.stockA && (i.qt + cant <= Items.stockA)){
              i.qt=i.qt+cant;
          }    
        }
    })
    setCart(datosCart)
}    
    
/*agrego el producto al carrito y si ya esta en el carrito  actualiza la cantidad*/ 
    function addItem(Items,cant){
      if(isInCart(Items.id)){
          console.log('isInCart(Items.id)',isInCart(Items.id))
          getQuantity(Items,cant)
      }else{
        console.log('isInCart(Items.id)',isInCart(Items.id))
        setCart([...cart,{...Items,qt:cant}])
      }
    
    }
    
   
    return (
      <CartContext.Provider value={{cart, setCart,isInCart,addItem}}>
        {children}
      </ CartContext.Provider>
    )
  }