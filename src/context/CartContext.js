import React, {useState,useEffect} from 'react';


export const CartContext= React.createContext([]);   //creo el contexto

export const Cantidad = ({children}) => {

    const [cart, setCart] = useState([])

    useEffect(()=>{
      console.log(cart)
    },[cart])

    function isInCart(itemId){
      console.log('isInCart'+itemId)
      const InCart= cart.find( x=> x.Items.id === itemId)   
      if (InCart!==undefined){
        return true;
      }
      return false;   
 
    }

/*busca la cantidad del Item y le suma la cantidad nueva*/
function getQuantity(Items,cant){
    const datosCart= [...cart];
    datosCart.map(i=>{
        if(i.Items.id ===Items.id){
          if(i.qt < Items.stockA && (i.qt + cant <= Items.stockA)){
              i.qt=i.qt+cant;
              var precio=Items.price;
              i.totLin=i.qt*precio;
          }else{
             console.log('No hay mas stock')
          }    
        }
    })
    setCart(datosCart)
}    
    
/*agrego el producto al carrito y si ya esta en el carrito  actualiza la cantidad*/ 
    function addItem(Items,cant){
      if(isInCart(Items.id)){
          getQuantity(Items,cant)
      }else{
        var precio=Items.price;
        var totLin=cant*precio;
        setCart([...cart,{Items,qt:cant,totLin:totLin}])
       }
     
    }
    
  /*Remover un Item por su Id*/

  function removeItem(ItemId){
    const nuevoCart = cart.filter(Item => Item.Items.id !== ItemId);
    setCart(nuevoCart);
}


  function clearCart(){
     setCart([])
  }


  function SumarTotalFinal(){
    let totFinal=0;
     cart.forEach((x)=>totFinal=totFinal+x.totLin);
     return totFinal;
    }


    

    return (
      <CartContext.Provider value={{cart,setCart,isInCart,addItem,removeItem,clearCart,SumarTotalFinal}}>
        {children}
      </ CartContext.Provider>
    )
  }