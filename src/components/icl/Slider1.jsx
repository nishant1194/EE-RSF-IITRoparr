import React from 'react'
import Main from '../images/mainimg.jpeg'
import Slider3 from '../images/Slider3.jpg'
import Department from '../images/Department.jpeg'
import './Slidder.css' ;

function Slider1() {

  return (

       <div>



<div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={Main} className="d-block w-100 sliddder"  alt="..."  />

     
    </div>
    <div className="carousel-item">
      <img src={Department} className="d-block w-100"  alt="..." />
     
    </div>
    <div className="carousel-item">
      <img src={Slider3} className="d-block w-100" alt="..." />
     
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>




    </div>
   
  );
}

export default Slider1
