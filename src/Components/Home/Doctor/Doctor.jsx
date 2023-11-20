import React from 'react'
import "../CSS/index.css"
import doctor from "../../../assets/images/doctor.png"
const Doctor = () => {
  return (
    <div>
      <section className='bgurl'>
        <div className="container">
            <div className="row">
                <div className="col-6">
                   <div className="cc mx-auto">
                   <img src={doctor} className=' cc img-fluid  ' alt="" />
                   </div>
                </div>
                <div className="col-6">
                    <p>Appointment</p>
                    <h3 className=' text-white'>Make an appointment Today</h3>
                    <p className=' text-white'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button className='btn text-white fw-bold bgcolor'>GET STARTED</button>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Doctor

