import React from 'react';
import '../Home/CSS/index.css'
import { Link } from "react-router-dom";
const SignUp = () => {
  return (
    <div>
       <div>
       <div className="container">
        <div className="row">
            <div className="col-12 py-5  ">
                
            <form className='contact shadow p-5 '>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Name:</label>
                    <input type="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email:</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password:</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" />
                    <p>Forgot Password ?</p>
                </div>
               
               <div className="">
               <button type="submit" class="btn btn-primary w-full">SINGUP</button>
               <p >Alredy Have An Account <Link className='ddd' to='/login' >Plase Login</Link></p>
               </div>
               <div className="d-flex">
                <span className='ber'></span>
               <span className='or'> OR</span>
                <span className='ber'></span>
               </div>
               <div className="">
               <button type="submit" class="btn btn-google">CONTINUE WITH GOOGLE</button>
               </div>
                </form>
                            </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default SignUp;
