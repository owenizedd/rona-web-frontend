import React from 'react';
import { Link, useLocation } from 'react-router-dom';
export default function(){
  const location = useLocation();
  const pathName = location.pathname;
  let title = "";
  if(pathName !== "/"){
    title = pathName.slice(1);
  }

  return(
    <footer className="rona-footer">
      <h4 className="title-text">{title}</h4>
      <nav>
        <Link to="/about">FAQ</Link>
        <Link to="/">Twitter</Link>
        <Link to="/">Berlin</Link>

      </nav>
      <img src="/footer-logo.png"/>
    </footer>
  )
} 