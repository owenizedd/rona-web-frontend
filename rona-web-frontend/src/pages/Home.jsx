import React from 'react';
import { Carousel } from 'react-responsive-carousel';
export default function(){
  return(
    <main>
      <Carousel>
        <div>
          <img src="images/bg1.jpg" alt="" />
          <p></p>
        </div>
        <div>
          <img src="images/bg2.jpg" alt="" />
          <p></p>
        </div>
        <div>
          <img src="images/bg3.jpg" alt="" />
          <p></p>
        </div>
        <div>
          <img src="images/bg4.jpg" alt="" />
          <p></p>
        </div>
      </Carousel>
    </main>
  )
}