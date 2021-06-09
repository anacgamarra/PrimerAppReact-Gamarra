import {BrowserRouter,Switch,Route} from 'react-router-dom';
import ItemListContainer from './container/itemListContainer';
import ItemDetailContainer from './container/ItemDetailContainer/ItemsDetailContainer';
import {Cantidad} from './context/CartContext';
import Cart from './components/Cart/Cart';
import NavBarContainer from './container/NavBarContainer/NavBarContainer';

function App() {

  return (
    <Cantidad>
        <BrowserRouter>
                <NavBarContainer/>
                <Switch>
                        <Route exact path="/item/:id">
                            <ItemDetailContainer text={'Detalle del producto'}/>
                        </Route>
                        <Route path="/category/:id">
                            <ItemListContainer text={'Bienvenidos a mi tienda online!'}/>
                        </Route>
                        <Route path="/cart">
                            <Cart/>
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
