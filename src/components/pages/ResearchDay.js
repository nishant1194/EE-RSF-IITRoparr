import React from 'react'
import Navbar from '../icl/Navbar'
import Slider1 from '../icl/Slider1'
import './ResearchDayy.css'
import Footer from "../icl/Footer";

function ResearchDay() {
  return (
    <div>

        <Navbar />
        <Slider1 />

        {/* <section className="py-5">
        <div className="container ">
          <div className="row">
            <div className="col-md-12">
            <div className="line2"></div>
              <h1 style={{textAlign:"center"}}>Expert Talk</h1>
              <div className="line2"></div>
            </div>
          </div>
        </div>
      </section>


<section >
    <div className="container py-5 ">
<div className="card mb-3" style={{maxWidth: "540px"}}>
  <div className="row g-0" >
    <div className="col-md-4">
      <img src={image1} className="img-fluid rounded-start" alt="..." style={{height:"200px", width:"100%"}} />
    </div>
    <div className="col-md-8">
      <div className="card-body text-center" >
        <h5 className="card-title"><h2>Expert</h2></h5>
        <p className="card-text"><h5> Dr. ABC</h5></p>
        <p>xyz college</p>
        
      </div>
    </div>
  </div>
</div>
</div>
</section> */}


<section className="py-5">
        <div className="container ">
          <div className="row">
            <div className="col-md-12">
            <div className="line2"></div>
              <h1 style={{textAlign:"center"}}>Event Schedule</h1>
              <div className="line2"></div>
            </div>
          </div>
        </div>
        
      </section>

        <div className="container py-5">

         
  <div className="row">
    <div className="col-md-12">
    <h1 style={{
      fontStyle:"oblique",
      fontSize:"60px",
      textAlign:"center"

    }}>Coming soon ..... </h1>
      {/* <div id="content">
        <ul className="timeline-1 text-black">
          <li className="event" data-date="12:30 - 1:00pm">
            <h4 className="mb-3">Registration</h4>
            <p>Get here on time, it's first come first serve. Be late, get turned away.</p>
          </li>
          <li className="event" data-date="2:30 - 4:00pm">
            <h4 className="mb-3 pt-3">Opening Ceremony</h4>
            <p>Get ready for an exciting event, this will kick off in amazing fashion with MOP &amp; Busta
              Rhymes as an opening show.</p>
          </li>
          <li className="event" data-date="5:00 - 8:00pm">
            <h4 className="mb-3 pt-3">Main Event</h4>
            <p>This is where it all goes down. You will compete head to head with your friends and rivals. Get
              ready!</p>
          </li>
          <li className="event" data-date="8:30 - 9:30pm">
            <h4 className="mb-3 pt-3">Closing Ceremony</h4>
            <p className="mb-0">See how is the victor and who are the losers. The big stage is where the winners
              bask in their
              own glory.</p>
          </li>
        </ul>
      </div> */}
    </div>
  </div>
</div>

<div className="py-5">

</div>


<Footer />
     
      
    </div>
  )
}

export default ResearchDay
