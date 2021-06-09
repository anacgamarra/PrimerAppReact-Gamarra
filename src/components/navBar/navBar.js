import React from 'react';
import CartWidget from '../cartWidget/cartWidget';
import  './navBar.css';
import Logo from '../logo/logo';
import IconoMenu from '../IconoMenu/IconoMenu';
import {Link} from 'react-router-dom';

const navBar = ({category})=> {
    return (
        <header>
             <div className='menuSup'> 
                <Logo/>     
                <h3> Mi Tienda</h3>
                <CartWidget/> 
             
            </div>  
                <nav className="nav"> <IconoMenu/> </nav> 
                   <ul className="menu"> 
                   {category.length > 0 ? 
                       category.map(i=>
                        <li key={i.id}>
                            <Link to={`/category/${i.id}`} className={Link}><p>{i.nombre} ▼</p></Link>
                        </li>
                    ):'no hay resultados'}
                     
                </ul>
                          
        </header> 
        
    )

}

export default navBar;
