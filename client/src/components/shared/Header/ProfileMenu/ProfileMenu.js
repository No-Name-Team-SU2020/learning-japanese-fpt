import React from 'react';
import Button from '@material-ui/core/Button';
import ArrowIcon from '@material-ui/icons/ArrowDropDown';
import SubMenu from '../../../ui/SubMenu/SubMenu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Avatar } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { authLogout } from '../../../../store/actions/auth/auth';

const ProfileMenu = ({ show, toggleMenu }) => {
  const dispatch = useDispatch();
  const { profile } = useSelector(state => state.user);

  return (
    <div style={{ position: 'relative' }}>
      <Button aria-controls="profile-menu" aria-haspopup="true" onClick={toggleMenu}>
      {profile?.display_name} <ArrowIcon />
      </Button>
      <SubMenu show={show}>
        <div className="d-flex align-items-center">
          <Avatar src="https://images.pexels.com/photos/5177790/pexels-photo-5177790.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
          <h5 className="ml-3"> {profile?.display_name} </h5>
        </div>
        <List>
          <ListItem button>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
          <ListItem button onClick={() => dispatch(authLogout())}>
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary="Sign Out" />
          </ListItem>
        </List>
      </SubMenu>
    </div>
  )
}

export default ProfileMenu;
