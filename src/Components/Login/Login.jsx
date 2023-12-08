import React, { useContext, useState } from 'react';
import '../Home/CSS/index.css'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import toast from "react-hot-toast";
import { AuthContext } from '../UseContext/AuthProvider';
const Login = () => {

  const {register,handleSubmit,formState: { errors },} = useForm();
  const {signIn}=useContext(AuthContext);
  const[loginUpError,SetloginError]=useState('')
  const location = useLocation();
	const navigate = useNavigate();

	const from = location.state?.form?.pathname || "/";


  const handlelogin=(data)=>{

    SetloginError('')
    signIn(data.email,data.password)
    .then(result => {
      const user = result.user;
      toast.success('User Login Successfully Done');
      navigate(from, {replace: true})
     
    
      const userInfo = {
        displayName: data.name
      }
    
      updateUser(userInfo)
      .then(() =>{})
      .catch(error => SetloginError(error.message))
        })
    
    .catch(error =>SetloginError(error.message))

  }

  return (
    <div>
       <div className="container">
        <div className="row">
            <div className="col-12 py-5  ">
                
            <form onSubmit={handleSubmit(handlelogin)} className='contact shadow p-5 '>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email"  {...register("email", { 
                      required: true
                    })} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" {...register("password", { 
                      required: true,
                      
                      
								
							})} class="form-control" id="exampleInputPassword1" />
                    <p>Forgot Password ?</p>
                </div>
                {
							     loginUpError && <p className="pb-3 text-red-500">{loginUpError}</p>
						    }
               <div className="">
               <button type="submit" class="btn btn-primary w-full">login</button>
               <p>New to Doctors Portal? <Link className='ddd' to='/signup' >Create new account</Link></p>
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
  );
}

export default Login;
