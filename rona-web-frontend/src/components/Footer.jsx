import React from 'react';
import { Link } from 'react-router-dom';
export default function(){
  
  return(
    <footer className="rona-footer">

      <nav>
        <Link to="/">FAQ</Link>
        <Link to="/">Twitter</Link>
        <Link to="/">Berlin</Link>

      </nav>
      <img src="/footer-logo.png"/>
    </footer>
  )
} 