import NavBar from './components/navBar/navBar';
import ItemListContainer from './container/itemListContainer';



function App() {
  //aca puedo hacer todo lo que quiera de js

  return (
    
    <div>
          <NavBar className="menu"/>
          <ItemListContainer text={'Bienvenidos a mi tienda online!'}/>
    </div>
  );
}

export default App;
