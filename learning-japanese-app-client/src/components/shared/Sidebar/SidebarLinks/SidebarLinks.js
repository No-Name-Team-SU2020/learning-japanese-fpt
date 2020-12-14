import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import LogoutModal from "../../LogoutModal";

const SidebarLinks = () => {
  const [showLogout, setShowLogout] = useState(false);
  const openLogoutModal = () => setShowLogout(true);
  const closeLogoutModal = () => setShowLogout(false);

  return (
    <nav className='sidebar-links my-4'>
      <li>
        <NavLink exact to='/' activeClassName='active-sidebar-link'>
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink to='/syllabus' activeClassName='active-sidebar-link'>
          SYLLABUS
        </NavLink>
      </li>
      <li>
        <NavLink to='/calendar' activeClassName='active-sidebar-link'>
          CALENDAR
        </NavLink>
      </li>
      <li>
        <NavLink to='/about' activeClassName='active-sidebar-link'>
          ABOUT
        </NavLink>
      </li>
      <li onClick={openLogoutModal}> LOGOUT </li>
      <LogoutModal closeModal={closeLogoutModal} open={showLogout} />
    </nav>
  );
};

export default SidebarLinks;
