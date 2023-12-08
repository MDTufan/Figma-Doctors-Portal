import { useContext, useEffect, useState} from "react";
import { format } from 'date-fns';
import "../../Home/CSS/index.css"
import { AuthContext } from "../../UseContext/AuthProvider";
import toast from "react-hot-toast";



const Dateappiment = ({appointment,setAppointment,settrethment,trethment,selected}) => {
  const {name,slots}=trethment;
  
  

   const {user}=useContext(AuthContext);



  const Date=format(selected, 'PP');


 

    useEffect(()=>{
        fetch(`http://localhost:3000/Aappointment?Date=${Date}`)
        .then(res=>res.json())
        .then(data =>{
          setAppointment(data)
          
        })
    },[])


    const handlebooking=(event)=>{
      event.preventDefault();
      const form = event.target;
		
		const name=form.name.value;
		const phone = form.phone.value;
		const slot = form.slot.value;
		const email = form.email.value;
      
   const booking={
    appointmentDate:Date,
    parseInt:name,
    slot,
    email,
    phone

  
   }
    
   fetch("http://localhost:3000/bookings", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(booking),
  })
   
  .then((res) => res.json())
  .then((data) => {
    if (data.acknowledged) {
      toast.success("Appintment Confirm");
     
      
      
    } else {
      toast.error(data.message);
    }

  });





    }

  return (
    <div className="container mb-5">
      <div className=" ">
      
        <div className="">
            <div className="  d-flex Car     ">
            {
                appointment.map((opation1) => (
                   <div className="mt-5 shadow-lg p-4 rounded">
                        <h6 className="text-color">{opation1.name}</h6>
                        
                   <p className="pp">{opation1.slots[0]
                    
                   }</p>
                   <p className="pp">16 SPACES AVAILABLE</p>
                   
                  
                  
                  
                   {
                    trethment && <div className="p-3 ">
                                            
                    <button type="button" className="btn btn-primary bgcolor" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>settrethment(opation1)}>
                    GET STARTED
                    </button>


                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="d-flex justify-content-between p-3">
                            <h5 class="modal-title" id="exampleModalLabel">{name}</h5>
                            <button type="button" class="btn-close  bgcolor2 rounded-circle p-2 " data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body">
                          <form  onSubmit={handlebooking} >
                        <div class="mb-3">
                          
                          <input type="email" value={Date} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" disabled />
                          
                        </div>
                        <div class="mb-3">
                          
                              <select name="slot" class="form-select" aria-label="Default select example">
                                {
                                  (opation1.slots.map((sol,i)=> <option value={sol} key={i}>
                                    {sol}
                                   
                                  </option>))
                                  
                                    
                                  
                                  
                                }
                              </select>
                          
                        </div>
                        
                        <div class="mb-3">
                          <label for="exampleInputEmail1" class="form-label">Name:</label>
                          <input type="text" name='name' defaultValue={user?.displayName} class="form-control" disabled id="exampleInputEmail1" aria-describedby="emailHelp"/>
                          
                        </div>
                        <div class="mb-3">
                          <label for="exampleInputPassword1" class="form-label">Phone:</label>
                          <input type="text" name='phone' class="form-control" id="exampleInputPassword1"/>
                        </div>
                        <div class="mb-3">
                          <label for="exampleInputPassword1" class="form-label">Email:</label>
                          <input type="email" name='email' defaultValue={user?.email } class="form-control" disabled  id="exampleInputPassword1"/>
                        </div>
                        
                        <button type="submit" class="btn btn-primary">Submit</button>
                      </form>
                        </div>
                          
                        </div>
                      </div>
                    </div>

               </div>
                   }
                   </div>
                  
                    
                    
                )

                
                    )
            }
            </div>
        </div>
      </div>
    </div>
  );
}

export default Dateappiment;
