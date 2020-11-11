import React, { useState } from 'react';
import main_logo from '../../../assets/fpt_logo.png';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import ProfileMenu from './ProfileMenu/ProfileMenu';
import SubMenu from '../../ui/SubMenu/SubMenu';
import { Link } from 'react-router-dom';

const Header = () => {
  const [openMessages, setOpenMessages] = useState(false);
  const [openNotifications, setOpenNotifications] = useState(false);
  return (
    <header className="fixed-top shadow-sm bg-white">
      <div className="header-container">
        <Link to="/">
          <img src={main_logo} alt="left logo" />
        </Link>
        <div className="d-flex align-items-center justify-content-between" style={{ minWidth: '300px' }}>
          <IconButton onClick={() => setOpenMessages(!openMessages)}>
            <Badge color="primary" badgeContent={1}>
              <MailIcon />
            </Badge>
            <SubMenu show={openMessages}>
              Messages
            </SubMenu>
          </IconButton>
          <IconButton onClick={() => setOpenNotifications(!openNotifications)}>
            <Badge color="secondary" badgeContent={1}>
              <NotificationsIcon />
            </Badge>
            <SubMenu show={openNotifications} >
              Norifications
            </SubMenu>
          </IconButton>
          <Avatar src="https://images.pexels.com/photos/5177790/pexels-photo-5177790.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
          <ProfileMenu />
        </div>
      </div>
    </header>
  )
}

export default Header;
