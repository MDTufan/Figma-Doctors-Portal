
import React from 'react';
import '../CSS/index.css';
import img from "../../../assets/images/treatment.png"
const Treatment = () => {
  return (
    <div>
     <section className=''>
        <div className="container">
            <div className="row my-5 py-5">
            <div className="col-6 text-center">
                    <img className=' img-1 ' src={img} alt="" />
                </div>
                <div className="col-6">
                    <h2 className='py-3'>Exceptional Dental <br/>Care, on Your Terms</h2>
                    <p className='py-2'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button className='btn text-white fw-bold bgcolor'>GET STARTED</button>
                </div>
            </div>
        </div>
     </section>
    </div>
  );
}

export default Treatment;
