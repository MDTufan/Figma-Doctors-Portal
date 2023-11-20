import React from 'react';
import "../CSS/index.css"
import icon from '../../../assets/images/dd.png'
import pepole from "../../../assets/images/people.png"
const Testimonial = () => {
  return (
    <div>
      <section>
        <div className="container">
            <div className="row py-5">
                <div className="col-6">
                    <p>Testimonial</p>
                    <h3>What Our Patients Says</h3>
                </div>
                <div className="col-6 text-end">
                    <img src={icon} alt="" />
                </div>
            </div>
        </div>
      </section>
      <section>
        
    <div className="container py-5">
    <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col ">
    <div class="card h-100">
      
      <div class="card-body shadow">
        <p class="card-title"> It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
        <div className="row">
            <div className="col-6">
                <img src={pepole} alt="" />
            </div>
            <div className="col-6">
                <h6>Winson Herry</h6>
                <p>California</p>
            </div>
        </div>
      </div>
      
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
    <div class="card-body shadow">
        <p class="card-title"> It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
        <div className="row">
            <div className="col-6">
                <img src={pepole} alt="" />
            </div>
            <div className="col-6">
                <h6>Winson Herry</h6>
                <p>California</p>
            </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
    <div class="card-body shadow">
        <p class="card-title"> It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
        <div className="row">
            <div className="col-6">
                <img src={pepole} alt="" />
            </div>
            <div className="col-6">
                <h6>Winson Herry</h6>
                <p>California</p>
            </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
      </section>
    </div>
  );
}

export default Testimonial;
