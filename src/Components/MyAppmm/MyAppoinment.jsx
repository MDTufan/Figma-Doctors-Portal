import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { AuthContext } from '../UseContext/AuthProvider';

const MyAppoinment = () => {
    const {user}=useContext(AuthContext);
    useEffect(()=>{
        fetch(`http://localhost:3000/bookings?email=${user.email}`)
        .then(res=>res.json())
        .then(data =>{
          setAppointment(data)
          console.log(data);
          
        })
    },[])
  return (
    <div>
      ggggggggggg
    </div>
  );
}

export default MyAppoinment;
