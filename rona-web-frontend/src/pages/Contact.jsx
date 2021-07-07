import React, { useState, useEffect } from 'react'

export default function Contact() {
  const [people, setPeople] = useState([]);
  
  useEffect(async () => {
    const raw = await fetch('https://randomuser.me/api/?results=3');
    const data = await raw.json();
    // console.log(data);
    setPeople(data.results);
  }, []);
  return (
    <main class="content-body">
      {
        people.map((person) => {
          return(
            <>
              <div className="person-content" >
                <img src={person.picture.large} width="25%" height="auto"/>
                <div className="profile-content" style={{width: '100%'}}>
                  <h5 style={{textAlign: 'left'}}>{Object.values(person.name).join(" ")}</h5>
                  <p>Tel: {person.phone}</p>
                  <p>Email: {person.email}</p>
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
