import React from 'react';
import "../CSS/index.css"
import clock from "../../../assets/images/clock.svg"
import phone from "../../../assets/images/Path1.svg"
import location from "../../../assets/images/Path2.svg"
const Cardinfo = () => {
  return (
    <div>
      <section>
        <div className="container">
        <div class="row my-5  cennter">
                        
                        <div class="col-12  col-md-6 col-lg-4 " >

                            <div class="bgcolor rounded d-flex  p-3 " >
                                <div className="">
                                    <img className='img-fluid mt-3' src={clock} alt="" />
                                </div>
                                <div className="px-3">
                                   <h5>Opening Hours</h5>
                                   <p>Lorem Ipsum is simply dummy text of the pri</p>
                                </div>
                              </div>
                             
                            </div>
                            <div class="col-12  col-md-6 col-lg-4 " >

                            <div class="bgcolor rounded d-flex  p-3 " >
                                <div className="">
                                    <img className='img-fluid mt-3' src={location} alt="" />
                                </div>
                                <div className="px-3">
                                   <h5>Opening Hours</h5>
                                   <p>Lorem Ipsum is simply dummy text of the pri</p>
                                </div>
                              </div>
                             
                            </div>
                            <div class="col-12  col-md-6 col-lg-4 " >

                            <div class="bgcolor rounded d-flex  p-3 " >
                                <div className="">
                                    <img className='img-fluid mt-3' src={phone} alt="" />
                                </div>
                                <div className="px-3">
                                   <h5>Opening Hours</h5>
                                   <p className=''>Lorem Ipsum is simply dummy text of the pri</p>
                                </div>
                              </div>
                             
                            </div>
                           
                        </div>
        </div>
      </section>
    </div>
  );
}

export default Cardinfo;
