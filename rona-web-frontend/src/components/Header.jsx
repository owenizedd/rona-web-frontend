import React from 'react';
import { Link, useLocation } from 'react-router-dom';
export default function({bg}){
  const location = useLocation();
  
  return(
    <header className={"rona-header " + bg}>
      <Link to="/">
        <img src="/header-logo.png"/>
      </Link>
      <nav>
        <Link to="/team">Team</Link>
        <Link to="/vaccines">Vaccines</Link>
        <Link to="/contact">Contact</Link>


      </nav>
    </header>
  )
} 