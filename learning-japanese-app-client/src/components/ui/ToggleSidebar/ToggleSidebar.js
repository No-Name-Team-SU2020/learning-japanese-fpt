import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useDispatch } from 'react-redux';
import { toggleSidebar } from '../../../store/actions/ui/ui';

const ToggleSidebar = () => {
  const dispatch = useDispatch();
  return (
    <IconButton onClick={() => dispatch(toggleSidebar())}>
      <MenuIcon />
    </IconButton>
  );
}

export default ToggleSidebar;
