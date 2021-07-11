import React, { useState, useEffect } from 'react'

export default function Contact() {
  const [people, setPeople] = useState([
    {
      name: 'Rupert Hecht',
      title: 'CEO & Founder',
      phone: '030-1255-0001',
      email: 'ruperthecht@ronacvc.com'
    },
    {
      name: 'Klaus Sahne',
      title: 'Lead Manager',
      phone: '030-1255-0024',
      email: 'klaussahne@ronacvc.com'
    },
    {
      name: 'Emreash Razu',
      title: 'Public Relation Expert',
      phone: '030-1255-0522',
      email: 'emreashrazu@ronacvc.com'
    },
    {
      name: 'Katrina Grieß',
      title: 'Medical Supervisor',
      phone: '030-1255-0126',
      email: 'katrinagriess@ronacvc.com'
    },
    {
      name: 'Alfons Keck',
      title: 'IT Support Architect',
      phone: '030-1255-0785',
      email: 'alfonskeck@ronacvc.com'
    },
  ]);
  
  return (
    <main class="content-body">
      {
        people.map((person) => {
          return(
            <>
              <div className="person-content" >
                <img src={'/' + person.name.split(" ")[0].toLowerCase() + ".png"} style={{marginRight: '25px'}} width="25%" height="auto"/>
                <div className="profile-content" style={{width: '100%'}}>
                  <h5 style={{textAlign: 'left'}}>{person.name}</h5>
                  <p>{person.title}</p>
                  <p>Tel: {person.phone} </p>
                  <p>Email: {person.email} </p>
                </div>
                <img style={{justifySelf: 'flex-end'}} width="30" height="30" src="https://w7.pngwing.com/pngs/401/19/png-transparent-computer-icons-email-direct-marketing-send-email-button-miscellaneous-angle-rectangle.png" alt="" />
              </div>
              <hr />
            </>
          )
        })
      }
    </main>
  )
}
