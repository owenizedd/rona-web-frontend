import React, {useState} from 'react'
import Card from '../components/Card';
import Modal from '../components/Modal';

export default function Center() {
  const [isModalShowing, setIsModalShowing] = useState(false);

  const handleClick = () => {
    setIsModalShowing(!isModalShowing);
  }
  return (
    <main className="content-centres" style={{display: 'flex', justifyContent: 'center', marginTop: '20px'}}>
      <div className="list-centre-container" >
        <input type="text" name="address" id="" placeholder="Enter address.." style={
          {
            color: 'black', 
            padding: '10px',
            borderRadius: '7px',
            border: '2px solid darkgray',
            width: '85%'
          }
        } />
        <div className="wrapper-list" style={{maxHeight: '800px', overflowY: 'scroll'}}>
        {
          [1,2,3,4].map((va) => <Card key={va} onClick={handleClick}/>)
        }
        </div>
      </div>
      <img src="/map.png" width='auto' height='800px' style={{objectFit: 'fill'}}/>
      {isModalShowing && <Modal onClick={handleClick} />}
    </main>
  )
}
