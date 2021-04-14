import React from 'react';
import CartWidget from '../cartWidget/cartWidget';
import  './navBar.css';
import Logo from '../logo/logo';


const navBar = ()=> {
    return (
        <div>
             <div className='menuSup'> 
                <Logo/>     
                <h3> Mi Tienda</h3>
                <CartWidget/>  
            </div>  
                <ul className="menu">   
                    <li><a><p>Mujeres ▼</p></a></li>
                    <li><a><p>Hombres ▼</p></a></li>
                    <li><a><p>Niños ▼</p></a></li>
                </ul>   
        </div> 
        
    )

}

export default navBar;
