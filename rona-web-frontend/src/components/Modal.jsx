import React from 'react'

export default function Modal({onClick}) {
  return (
    <main className="content-modal" style={
      { 
        position: 'fixed',
        left: 0,
        top: 0,
        height: '100%',
        width: '100%',
        background: 'rgba(0,0,0,.3)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }
    }>
      <div className="modal-box" style={{background: 'white', borderRadius: '10px', padding:'15px', width: '800px', margin: 'auto', }}>
        <h6 className="color-green">Rona Impfzentrum Mitte 1</h6>
        <div className="container-modal-content" style={{display: 'flex'}}>
          <img src="/modal-pic1.png" alt="" />
          <div className="content">
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
            <h6 className="color-green">Wählen Sie Ihren Wunschtermin aus</h6>
            <div className="schedule">
              <img src="cal.jpg" alt="" style={{float: 'left'}}/>
              <img src="dropdown.JPG" alt="" style={{float: 'left'}}/>
              <button className="btn btn-primary" style={{marginLeft:'15px'}} onClick={onClick}>Buchen</button>
            </div>
          </div>
          
        </div>
      </div>
    </main>
  )
}
