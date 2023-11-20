import React from 'react';
import "../CSS/index.css"
import img from "../../../assets/images/chair.png"
const Hero = () => {
  return (
    <div>
      <section className='bg-img'>
        <div className="container">
            <div className="row my-5">
                <div className="col-6">
                    <h3>Your New Smile Starts <br/> Here</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <button className='btn text-white fw-bold bgcolor'>GET STARTED</button>
                </div>
                <div className="col-6">
                    <img className='img-fluid p-3' src={img} alt="" />
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
