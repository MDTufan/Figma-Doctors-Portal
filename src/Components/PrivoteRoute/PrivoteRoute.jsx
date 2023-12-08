import { useContext } from "react";
import { AuthContext } from "../UseContext/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivoteRoute = ({children}) => {
  const {user, loading}=useContext(AuthContext);
  const location = useLocation();

  if(loading){
    return <>
    <div class="spinner-border text-primary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-secondary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-success" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-danger" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-warning" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-info" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-light" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-dark" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
    </>
  }

if(user){
    return children;
}


return <Navigate to="/login" state={{from: location}} ></Navigate>

}

export default PrivoteRoute;
