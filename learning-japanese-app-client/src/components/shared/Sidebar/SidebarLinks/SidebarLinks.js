import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authLogout } from "../../../../store/actions/auth/auth";
import { clearProfile } from "../../../../store/actions/user/user";

const SidebarLinks = () => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(authLogout());
    dispatch(clearProfile());
  };
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
      <li onClick={logoutHandler}> LOGOUT </li>
    </nav>
  );
};

export default SidebarLinks;
