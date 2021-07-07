import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'; 
import { Link } from 'react-router-dom';
export default function(){
  return(
    <main>
      <Carousel showThumbs={false}>
        <div className="carousel-item__container">
          <img className="carousel-item__background" src="/slide1.png" alt="" />
          <div className="carousel-item__text-container">
            <small>Vaccines:</small>
            <div className="carousel-item__main-text">
              Coronavirus Vaccine With 
              <br/>
              <strong>Rona Vaccine Center</strong>
            </div>
            <span className="carousel-item__secondary-text">Enabling you to get back to normal with our vaccine solution for individuals with a variety of selectable serums</span>
     
            <button className="btn btn-primary mr-3">Book Appointment</button>
            <Link to="/vaccines">
              <button className="btn btn-secondary mr-3">Read More</button>
            </Link>
          </div>
        </div>
        <div className="carousel-item__container">
          <img className="carousel-item__background" src="/slide2.png" alt="" />
          <div className="carousel-item__text-container">
            <small>About Us:</small>
            <div className="carousel-item__main-text">
              Coronavirus Vaccine With 
              <br/>
              <strong>Rona Vaccine Center</strong>
            </div>
            <span className="carousel-item__secondary-text">Find out how our coorperation works and see, whether you can be any use for us.</span>
     
            <button className="btn btn-primary mr-3">Book Appointment</button>
            <Link to="/about">
              <button className="btn btn-secondary mr-3">Read More</button>
            </Link>
          </div>
        </div>
        <div className="carousel-item__container">
          <img className="carousel-item__background" src="/slide3.png" alt="" />
          <div className="carousel-item__text-container">
            <small>Team:</small>
            <div className="carousel-item__main-text">
              Coronavirus Vaccine With 
              <br/>
              <strong>Rona Vaccine Center</strong>
            </div>
            <span className="carousel-item__secondary-text">Get a glimpse of our structure and what each representative has does for our cause.</span>
     
            <button className="btn btn-primary mr-3">Book Appointment</button>
            <button className="btn btn-secondary mr-3">Read More</button>
          </div>
        </div>
        <div className="carousel-item__container">
          <img className="carousel-item__background" src="/slide4.png" alt="" />
          <div className="carousel-item__text-container">
            <small>Contact: </small>
            <div className="carousel-item__main-text">
              Coronavirus Vaccine With 
              <br/>
              <strong>Rona Vaccine Center</strong>
            </div>
            <span className="carousel-item__secondary-text">If you have questions regarding our business, or want apply and enhance our team, you can see contact person in charge on "Read More".</span>
     
            <button className="btn btn-primary mr-3">Book Appointment</button>
            <Link to="/contact">
              <button className="btn btn-secondary mr-3">Read More</button>
            </Link>
          </div>
        </div>
      </Carousel>
    </main>
  )
}