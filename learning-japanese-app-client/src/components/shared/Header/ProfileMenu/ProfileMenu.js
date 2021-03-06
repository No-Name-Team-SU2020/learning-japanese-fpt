import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import ArrowIcon from "@material-ui/icons/ArrowDropDown";
import SubMenu from "../../../ui/SubMenu/SubMenu";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Avatar } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import Switch from "react-switch";
import LogoutModal from "../../LogoutModal";
import { switchDarkMode } from "../../../../store/actions/ui/ui";

const ProfileMenu = ({ show, toggleMenu }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const { darkMode } = useSelector((state) => state.ui);
  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.user);
  const [showLogout, setShowLogout] = useState(false);
  const openLogoutModal = () => setShowLogout(true);
  const closeLogoutModal = () => setShowLogout(false);

  return (
    <div style={{ position: "relative" }}>
      <Button
        aria-controls='profile-menu'
        aria-haspopup='true'
        onClick={toggleMenu}
      >
        {profile?.display_name ? profile.display_name : "Please Login"}
        <ArrowIcon />
      </Button>
      <SubMenu show={show}>
        <div className='d-flex align-items-center'>
          <Avatar src='https://images.pexels.com/photos/5177790/pexels-photo-5177790.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
          <h5 className='ml-3'>
            {profile?.display_name ? profile.display_name : "Please Login"}
          </h5>
        </div>
        <List>
          {/* <ListItem button>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary='Profile' />
          </ListItem> */}
          <ListItem button>
            <ListItemIcon>
              <Brightness4Icon />
            </ListItemIcon>
            <ListItemText
              primary={
                <Switch
                  onChange={() => {
                    dispatch(switchDarkMode());
                  }}
                  checked={darkMode}
                />
              }
            />
          </ListItem>
          {isAuthenticated && (
            <ListItem button onClick={openLogoutModal}>
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText primary='Log Out' />
            </ListItem>
          )}
        </List>
      </SubMenu>
      <LogoutModal closeModal={closeLogoutModal} open={showLogout} />
    </div>
  );
};

export default ProfileMenu;
