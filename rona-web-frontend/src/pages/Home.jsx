import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'; 
export default function(){
  return(
    <main>
      <Carousel>
        <div className="carousel-item__container">
          <img className="carousel-item__background" src="https://via.placeholder.com/1366x500.png" alt="" />
          <div className="carousel-item__text-container">
            <small>About Us:</small>
            <div className="carousel-item__main-text">
              Coronavirus Vaccine With 
              <br/>
              <strong>Rona Vaccine Center</strong>
            </div>
            <span className="carousel-item__secondary-text">Find out how our coorperation works and see, whether you can be any use for us.</span>
     
            <button className="btn btn-primary mr-3">Book Appointment</button>
            <button className="btn btn-secondary mr-3">Read More</button>
          </div>
        </div>
        <div>
          <img src="https://via.placeholder.com/1366x500.png" alt="" />
          <p></p>
        </div>
      </Carousel>
    </main>
  )
}