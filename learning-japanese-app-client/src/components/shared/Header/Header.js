import React, { useState } from "react";
import main_logo from "../../../assets/fpt_logo.png";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Badge from "@material-ui/core/Badge";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import ProfileMenu from "./ProfileMenu/ProfileMenu";
import SubMenu from "../../ui/SubMenu/SubMenu";

const Header = () => {
  const [openMessages, setOpenMessages] = useState(false);
  const [openNotifications, setOpenNotifications] = useState(false);
  const [openProfileMenu, setOpenProfileMenu] = useState(false);

  const toggleMessagesHandler = () => {
    setOpenMessages(!openMessages);
    setOpenNotifications(false);
    setOpenProfileMenu(false);
  };
  const toggleNotificationsHandler = () => {
    setOpenNotifications(!openNotifications);
    setOpenMessages(false);
    setOpenProfileMenu(false);
  };
  const toggleProfileMenuHandler = () => {
    setOpenProfileMenu(!openProfileMenu);
    setOpenMessages(false);
    setOpenNotifications(false);
  };
  return (
    <header className='main-header shadow-sm bg-white'>
      <div className='header-container'>
        <a href='/'>
          <img
            src={main_logo}
            alt='left logo'
            className='w-50'
            onClick={() => {
              localStorage.setItem("menuPosition", 0);
            }}
          />
        </a>
        <div
          className='d-flex align-items-center justify-content-between'
          style={{ minWidth: "340px" }}
        >
          <IconButton onClick={toggleMessagesHandler}>
            <Badge color='primary' badgeContent={0}>
              {/* <MailIcon /> */}
            </Badge>
            {/* <SubMenu show={openMessages}>Messages</SubMenu> */}
          </IconButton>
          {/* <IconButton onClick={toggleNotificationsHandler}> */}
            <Badge color='secondary' badgeContent={0}>
              {/* <NotificationsIcon /> */}
            </Badge>
            {/* <SubMenu show={openNotifications}>Norifications</SubMenu> */}
          {/* </IconButton> */}
          <Avatar src='https://cdn.iconscout.com/icon/free/png-256/avatar-380-456332.png' />
          <ProfileMenu
            show={openProfileMenu}
            toggleMenu={toggleProfileMenuHandler}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
