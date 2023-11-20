import React from 'react';
import { Link } from "react-router-dom";
import '../Home/CSS/index.css'

const Footer = () => {
  return (
    <div className='img-footer'>
     <div className="container">
     <div className="row py-3">
               
            <div className ="col-4  py-4">
               <h6 className=" fs-5 ">SERVICES</h6>

                    <p className="pt-2">Emergency Checkup</p>
                        <p className='text-black nav'><Link>Monthly Checkup</Link></p>
                        <p className='text-black' >Weekly Checkup</p>
                        <p className='text-black'>Deep Checkup</p>
                     
                </div> 
            <div className ="col-4  py-4">
               <h6 className=" fs-5 ">ORAL HEALTH</h6>

                    <p className="pt-2">Fluoride Treatment</p>
                        <p className='text-black'>Cavity Filling</p>
                        <p className='text-black' >Teath Whitening</p>
                        
                     
                </div> 
            <div className ="col-4  py-4">
               <h6 className=" fs-5 ">OUR ADDRESS</h6>

                    <p className="pt-2">New York - 101010 Hudson</p>
                       
                     
                </div> 
                
            </div>
            <div className="row py-3">
              <div className="col-12">
                <p className='text-center'>Copyright 2022 All Rights Reserved</p>
              </div>
            </div>
     </div>
    </div>
  );
}

export default Footer;
