import React from 'react'

export default function Team() {
  const imgPos = [2,6,10,15,19,23];
  const imgUrl = ['/Group 29.png', '/Group 28.png', '/Group 33.png', '/Group 30.png','/Group 32.png', '/Group 31.png'];
  let buttons = [];
  for(let i = 0; i < 24; i++) buttons[i] = null;
  let pointer = 0 ;
  imgPos.forEach((idx) => {
    buttons[idx] = imgUrl[pointer];
    pointer++;
  });
  console.log(buttons);
  return (
    <main className="content-body">
      <div className="buttons" style={{display: 'flex', flexWrap: 'wrap', padding: '0 200px', }}>
        {
          buttons.map((val) => {
            console.log(val);
            if (val){
              return(
                <div className={"btn-box image"} style={{maxWidth: '169px', height:'169px', margin: '10px 5px', }} >
                  <img src={val} alt="" style={{width: '100%', height: '100%'}}/>
                </div>
              )

            }
            else {
              const isDark = (Math.random() * 10) < 5;
              return (
                <div className={"btn-box " + (isDark && 'dark') } style={{margin: '10px 5px', width: '169px', height:'169px'}}></div>
              )
            }
          })
        }
      </div>
        {/* <img src="/team.jpg" alt="" width="100%"/> */}
    </main>
  )
}
