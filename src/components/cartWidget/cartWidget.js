import React from 'react';
import Cart from './cartWidget.svg';//'../../logo.svg'; 
import './cartWidget.css';

const cartWidget = () => {
    return (
        <img src={Cart} className="cartWidget"  alt="cartWidget"/>
    )
}

export  default cartWidget;