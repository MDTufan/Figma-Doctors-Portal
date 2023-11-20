import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from '../Navber/Navber';
import Footer from '../Footer/Footer';

const Layout = () => {
  return (
    <div>
      <Navber />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
