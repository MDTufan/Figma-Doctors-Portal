import React from 'react';
import Navber from '../Navber/Navber';
import { Outlet } from 'react-router-dom';

const Deshboard = () => {
  return (
    <div>
      <Navber />
    <div className="container">
    <div class="d-flex align-items-start">
  <div className="nav flex-column nav-pills me-3 bg-danger" id="v-pills-tab" role="tablist" aria-orientation="vertical">
    <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">My Appionment</button>
    <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile</button>
    <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</button>
    <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</button>
  </div>
  <div className="tab-content bg-info" id="v-pills-tabContent">
    <div className="tab-pane fade show active p-5" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
      <Outlet />
    </div>
    {/* <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">ssssssssssssssssssssssssssssss</div>
    <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">fffffffffffffffffff</div>
    <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">jjjjjjjjjjjjjjjjjjjjjj</div> */}
  </div>
</div>
    </div>
      
    </div>
  );
}

export default Deshboard;
