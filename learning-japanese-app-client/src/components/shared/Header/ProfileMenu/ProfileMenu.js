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

const ProfileMenu = ({ show, toggleMenu }) => {

  return (
    <div style={{ position: 'relative' }}>
      <Button aria-controls="profile-menu" aria-haspopup="true" onClick={toggleMenu}>
        John Doe <ArrowIcon />
      </Button>
      <SubMenu show={show}>
        <div className="d-flex align-items-center">
          <Avatar src="https://images.pexels.com/photos/5177790/pexels-photo-5177790.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
          <h5 className="ml-3">John Doe</h5>
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
          <ListItem button>
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
