import React from 'react';
import { Link } from 'react-router-dom';
export default function({pos, onClick}){
  
  return(
    <div className="list-card">
      <h6 className="list-card-title">Rona Impfzentrum Mitte {pos}</h6>
      <table>
        <tr>
          <td><strong>Adresse</strong></td>
          <td>:</td>
          <td>Macairestraße { parseInt(Math.random()*100) }</td>
        </tr>
        <tr>
          <td><strong>Öffnungszeiten</strong></td>
          <td>:</td>
          <td>09:00 - 18.00</td>
        </tr>
        <tr>
          <td><strong>Kontakt</strong></td>
          <td>:</td>
          <td>(030) 7289021</td>
        </tr>
      </table>
      <p><strong>Termin Buchen</strong></p>
      <p>Nicht Rollstuhlgerecht</p>
      <button className="btn btn-primary" onClick={onClick}>Anzeigen</button>
    </div>
  )
} 