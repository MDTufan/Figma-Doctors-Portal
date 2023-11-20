
import '../CSS/index.css'

const Contact = () => {
  return (
    <div className=' contactimg'>
      <div className="container">
        <div className="row">
            <div className="col-12 py-5 text-center">
                <p>Contact Us</p>
                <h6>Stay connected with us</h6>
            <form className='contact py-3'>
  <div class="mb-3">
   
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  placeholder='Enter Your Email'/>
   
  </div>
  <div class="mb-3">
    
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder='Enter Your Password'/>
  </div>
 
  <div class="mb-3 ">
  
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder=' Your Message'></textarea>
</div>
 <div className="mx-auto">
 <button type="submit" class="btn btn-primary">Submit</button>
 </div>
</form>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
