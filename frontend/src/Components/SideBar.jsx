import React from 'react';
import { FaTachometerAlt, FaPlus, FaUsers, FaListUl } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
 

function SideBar() {
  return (
    <div className="sidebar">
      <ul className="list-unstyled">
        <li>
          <NavLink to="/dashboard" className="sidebar-link">
            <FaTachometerAlt className="me-2" />
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/addpost" className="sidebar-link">
            <FaPlus className="me-2" />
            Add Post
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/allusers" className="sidebar-link">
            <FaUsers className="me-2" />
            All Users
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/allpost" className="sidebar-link">
            <FaListUl className="me-2" />
            All Posts
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
