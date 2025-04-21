import React from 'react';
import Navbar from '../Components/Navbar';
import SideBar from '../Components/SideBar';
import { Outlet } from 'react-router-dom';


function AdminLayout() {
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          {/* Sidebar: col-12 on mobile, col-md-3 on desktop */}
          <div className="col-12 col-md-3 bg-dark text-white p-3 min-vh-100">
            <SideBar />
          </div>

          {/* Main Content: col-12 on mobile, col-md-9 on desktop */}
          <div className="col-12 col-md-9 p-4">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminLayout;
