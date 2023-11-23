import { useEffect} from "react";
import { format } from 'date-fns';
import "../../Home/CSS/index.css"


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
    <div className="container mb-5">
      <div className=" ">
      
        <div className="">
            <div className="  d-flex Car text-center    ">
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
