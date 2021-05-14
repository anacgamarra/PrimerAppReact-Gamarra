import {BrowserRouter,Switch,Route} from 'react-router-dom';
import NavBar from './components/navBar/navBar';
import ItemListContainer from './container/itemListContainer';
import ItemDetailContainer from './container/ItemDetailContainer/ItemsDetailContainer';
import {Cantidad} from './context/CartContext';
import Cart from './components/Cart/Cart';

function App() {
  //aca puedo hacer todo lo que quiera de js

  return (
    <Cantidad>
        <BrowserRouter>
                <NavBar className="menu"/>
                <Switch>
                        <Route exact path="/item/:id">
                            <ItemDetailContainer text={'Detalle del producto'}/>
                        </Route>
                        <Route path="/category/:id">
                            <ItemListContainer text={'Bienvenidos a mi tienda online!'}/>
                        </Route>
                        <Route path="/cart">
                            <Cart text={'Finalizar Compra'}/>
                        </Route>
                        <Route path="/">
                            <ItemListContainer text={'Bienvenidos a mi tienda online!'}/>
                        </Route>
                </Switch>
        </BrowserRouter> 
    </Cantidad>
  );
}

export default App;
