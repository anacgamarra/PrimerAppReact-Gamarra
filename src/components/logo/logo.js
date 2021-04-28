import React from 'react';
import logo from '../../logo.svg';
import './logo.css';
import {Link} from 'react-router-dom';

const Logo = () => {
     return (
      <Link  to="/"><img src={logo} className="logo"  alt="logo"/></Link>
     )
}

export default Logo;