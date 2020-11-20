import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authLogout } from '../../../../store/actions/auth/auth';

const SidebarLinks = () => {
  const dispatch = useDispatch();
  return (
    <nav className="sidebar-links my-4">
      <li><NavLink exact to="/" activeClassName="active-sidebar-link"> HOME </NavLink></li>
      <li><NavLink to="/syllabus" activeClassName="active-sidebar-link"> SYLLABUS </NavLink></li>
      <li><NavLink to="/calendar" activeClassName="active-sidebar-link"> CALENDAR </NavLink></li>
      <li><NavLink to="/about" activeClassName="active-sidebar-link"> ABOUT </NavLink></li>
      <li><NavLink to="/login" activeClassName="active-sidebar-link" onClick={() => dispatch(authLogout())}> LOGOUT </NavLink></li>
    </nav>
  );
}

export default SidebarLinks;
