import React from 'react';
import './Sidebar.css';
import logo from '../../../assets/fpt_logo.png';
import Avatar from '@material-ui/core/Avatar';
import SidebarLinks from './SidebarLinks/SidebarLinks';
// import SidebarSocial from './SidebarSocial/SidebarSocial';
import Backdrop from '../../ui/Backdrop/Backdrop';
import { useSelector, useDispatch } from 'react-redux';
import { hideSidebar } from '../../../store/actions/ui/ui';
import ToggleSidebar from '../../ui/ToggleSidebar/ToggleSidebar';

const Sidebar = () => {
  const { showSidebar } = useSelector(state => state.ui);
  const dispatch = useDispatch();
  return (
    <>
      <aside className={['text-center main-sidebar', showSidebar ? 'show' : ''].join(' ')}>
        <div className="d-block d-md-none text-left mb-3"><ToggleSidebar /></div>
        <img src={logo} alt="aside logo" />
        <Avatar className="mx-auto mt-4"
          src="https://images.pexels.com/photos/5177790/pexels-photo-5177790.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        <h5>John Doe</h5>
        <p>john@fpt.edu.vn</p>
        <SidebarLinks />
        <p className="small">© 2020 FTP University by JLMS. All Rights Reserved.</p>
        {/* <SidebarSocial /> */}
      </aside>
      <Backdrop show={showSidebar} clicked={() => dispatch(hideSidebar())} />
    </>
  );
}

export default Sidebar;
