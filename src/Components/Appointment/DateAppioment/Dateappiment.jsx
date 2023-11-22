import { useEffect, useState } from "react";
import { format } from 'date-fns';


const Dateappiment = ({appointment,setAppointment,settrethment,trethment,selected}) => {
  const {name,slots}=trethment;

   



  const Date=format(selected, 'PP');

    useEffect(()=>{
        fetch("App.json")
        .then(res=>res.json())
        .then(data =>{
          setAppointment(data)
          
        })
    },[])
  return (
    <div>
      <div className="container">
        <div className="row d-flex">
            <div className="col-4">
            {
                appointment.map((opation1) => (
                   <div className="">
                        <p>{opation1.name}</p>
                   <p>{opation1.slots[0]
                   }</p>
                  
                  
                   {
                    trethment && <div className="">
                                            
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>settrethment(opation1)}>
                      Launch demo modal
                    </button>


                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="d-flex justify-content-between p-3">
                            <h5 class="modal-title" id="exampleModalLabel">{name}</h5>
                            <button type="button" class="btn-close  bg-info" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body">
                          <form>
                        <div class="mb-3">
                          
                          <input type="email" value={Date} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" disabled />
                          
                        </div>
                        <div class="mb-3">
                          
                              <select class="form-select" aria-label="Default select example">
                                {
                                  (opation1.slots.map((sol,i)=> <option value={sol} key={i}>
                                    {sol}
                                  </option>))
                                }
                              </select>
                          
                        </div>
                        <div class="mb-3">
                          
                          
                        <select class="form-select" aria-label="Default select example">
                          
                        </select>
                                                        
                             
                          
                          
                        </div>
                        <div class="mb-3">
                          <label for="exampleInputEmail1" class="form-label">Email address</label>
                          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div class="mb-3">
                          <label for="exampleInputPassword1" class="form-label">Password</label>
                          <input type="password" class="form-control" id="exampleInputPassword1"/>
                        </div>
                        <div class="mb-3 form-check">
                          <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                          <label class="form-check-label" for="exampleCheck1">Check me out</label>
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
