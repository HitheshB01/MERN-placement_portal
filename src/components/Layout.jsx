import React from 'react';
import { Outlet } from 'react-router-dom';
import SideNav from './SideNav';

const Layout = () => {
  return (
    <div className="flex min-h-screen">
      {/* SideNav will always be rendered and fixed */}
      <div className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-10">
        <SideNav />
      </div>

      {/* Main content where child routes will render */}
      <div className=" ml-[260px] flex-grow bg-gray-100">
        <Outlet /> {/* This is where child routes will be rendered */}
      </div>
    </div>
  );
};

export default Layout;
