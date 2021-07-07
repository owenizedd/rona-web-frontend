import React from 'react';
import { Link } from 'react-router-dom';
export default function(){
  
  return(
    <header className="rona-header">
      <img src="images/header-logo.png"/>

      <nav>
        <Link to="/">Covid 19</Link>
        <Link to="/vaccines">Vaccines</Link>
        <Link to="/about">About</Link>

      </nav>
    </header>
  )
} 