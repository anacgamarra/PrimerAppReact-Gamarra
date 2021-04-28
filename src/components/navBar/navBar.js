import React from 'react';
import CartWidget from '../cartWidget/cartWidget';
import  './navBar.css';
import Logo from '../logo/logo';
import IconoMenu from '../IconoMenu/IconoMenu';
import {Link} from 'react-router-dom';

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
                    <li><Link  to={`/category/M`} className={Link}><p>Mujeres ▼</p></Link></li>
                    <li><Link  to={`/category/H`} className={Link}><p>Hombres ▼</p></Link></li>
                    <li><Link  to={`/category/N`} className={Link}><p>Niños ▼</p></Link></li>
                </ul>
               
                  
        </header> 
        
    )

}

export default navBar;
