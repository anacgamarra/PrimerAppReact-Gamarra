import React from 'react';
import CartWidget from '../cartWidget/cartWidget';
import  './navBar.css';
import Logo from '../logo/logo';
import IconoMenu from '../IconoMenu/IconoMenu';

const navBar = ()=> {
    return (
        <header>
             <div className='menuSup'> 
                <Logo/>     
                <h3> Mi Tienda</h3>
                <CartWidget/> 
             
            </div>  
                <nav className="nav"> <IconoMenu/> </nav>
                <ul className="menu">   
                    <li><a><p>Mujeres ▼</p></a></li>
                    <li><a><p>Hombres ▼</p></a></li>
                    <li><a><p>Niños ▼</p></a></li>
                </ul>
               
                  
        </header> 
        
    )

}

export default navBar;
