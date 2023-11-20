import React from 'react';
import { Link } from "react-router-dom";

const Navber = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
    <a class="navbar-brand" href="#">Doctors Portal</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="appointment">Appointment</Link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Reviews</a>
        </li>
       
        <li class="nav-item">
          <a class="nav-link" href="#">Contact Us</a>
        </li>
       
        <li class="nav-item">
          <Link class="nav-link" to="login">Login</Link>
        </li>
       
       
      </ul>
      
    </div>
  </div>
</nav>
    </div>
  );
}

export default Navber;
