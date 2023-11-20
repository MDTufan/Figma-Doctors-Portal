import React from 'react';
import '../CSS/index.css'
import fluoride from "../../../assets/images/fluoride.png"
import cavity from "../../../assets/images/cavity.png"
import whitening from "../../../assets/images/whitening.png"
const Card = () => {
  return (
    <div>
      <section>
        <div className="container">
            <div className="row py-5">
                <div className="col-12 py-5 text-center">
                    <p>OUR SERVICES</p>
                    <h2>Services We Provide</h2>

                </div>
            </div>
            <div className="row py-5">
                <div className="col-4 ">
                <div className="card text-center p-3 shadow" >
                <img src={fluoride} className=" mx-auto p-2  img-fluid" alt="..." />
                <div className="card-body">
                    <h5 className="card-title pp">Fluoride Treatment</h5>
                    <p className="card-text pp xx">Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
                   
                </div>
                </div>
                </div>
                <div className="col-4 ">
                <div className="card text-center p-3 shadow" >
                <img src={cavity} className=" mx-auto p-2  img-fluid" alt="..." />
                <div className="card-body">
                    <h5 className="card-title pp">Fluoride Treatment</h5>
                    <p className="card-text pp xx">Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
                   
                </div>
                </div>
                </div>
                <div className="col-4 ">
                <div className="card text-center p-3 shadow" >
                <img src={whitening} className=" mx-auto p-2  img-fluid" alt="..." />
                <div className="card-body">
                    <h5 className="card-title pp">Fluoride Treatment</h5>
                    <p className="card-text pp xx">Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
                   
                </div>
                </div>
                </div>
                
            </div>
        </div>
      </section>
    </div>
  );
}

export default Card;
