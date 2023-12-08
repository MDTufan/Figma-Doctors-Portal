import React, { useContext, useState } from 'react';
import '../Home/CSS/index.css'
import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';
import toast from "react-hot-toast";
import { AuthContext } from '../UseContext/AuthProvider';

const SignUp = () => {
  const {register,handleSubmit,formState: { errors },} = useForm();
  const {createAccount,updateUser}=useContext(AuthContext);
  const[singUpError,SetsingupError]=useState('')


const HendelsingUp=(data)=>{
//  console.log(data);
createAccount(data.email,data.password)
.then(result => {
  const user = result.user;
  toast.success('User Created Successfully Done');
 

  const userInfo = {
    displayName: data.name
  }

  updateUser(userInfo)
  .then(() =>{})
  .catch(error => SetsingupError(error.message))
    })

.catch(error =>SetsingupError(error.message))

  }

  return (
    <div>
       <div>
       <div className="container">
        <div className="row">
            <div className="col-12 py-5  ">
                
            <form onSubmit={handleSubmit(HendelsingUp)} className='contact shadow p-5 '>
                <div class="mb-3">
                    <h1>Name:</h1>
                    <input type="name"  {...register("name", { required: true })} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    {
                      errors.name && <p className='text-danger'>{errors.name.message}</p>
                    }
                    
                </div>
                <div class="mb-3">
                    <h1>Email</h1>
                    <input type="email"  {...register("email", { 
                      required: true
                    })} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              {
                      errors.email && <p className='text-danger'>{errors.email.message}</p>
                    }
                    
                </div>
                <div class="mb-3">
                    <h1>Password</h1>
                    <input type="password" {...register("password", { 
								required: true,
								minLength:{value:6, message:"password must be Six carecters."},
								pattern: {value: /(?=.*?[0-9].*?[#!@$%&*])/,message:"Please provide at least 2 special characters"},
								
							})} class="form-control" id="exampleInputPassword1" />
              {
                      errors.password && <p className='text-danger'>{errors.password.message}</p>
                    }

                    <p>Forgot Password ?</p>

                </div>
                {
							      singUpError && <p className="pb-3 text-red-500">{singUpError}</p>
						    }
               
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
