import React, { useState } from 'react';
import "../../Home/CSS/index.css"
import img from "../../../assets/images/chair.png"

import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
const Mainappinment = ({selected,setSelected}) => {
    
  return (
    <div>
       <div>
      <section className='bg-img'>
        <div className="container">
            <div className="row my-5 text-center">
                <div className="col-12 col-lg-6 col-md-6 ">
                <DayPicker
                mode="single"
                selected={selected}
                onSelect={setSelected}
                
                />
                {/* <p>You picked {format(selected, 'PP')}.</p>; */}
                </div>
       
       
                <div className="col-12 col-lg-6 col-md-6 ">
                    <img className='img-fluid p-3' src={img} alt="" />
                </div>
            </div>
            <div className="row">
              <div className="col-12">
              <h6 className="text-center text-color my-5">Available Appointments {format(selected, 'PP')}</h6>
              </div>
            </div>
        </div>
      </section>
    </div>
    </div>
  );
}

export default Mainappinment;
