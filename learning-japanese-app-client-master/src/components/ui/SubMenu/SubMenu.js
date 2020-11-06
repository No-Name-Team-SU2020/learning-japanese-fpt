import React from 'react';
import classes from './SubMenu.module.css';

const SubMenu = ({ show, children }) => {
  return (
    <div className={[classes.SubMenu, show ? classes.Show : null].join(' ')}>
      {children}
    </div>
  );
}

export default SubMenu;
