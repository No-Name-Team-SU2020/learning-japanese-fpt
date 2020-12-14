import React from 'react';
import classes from './index.module.css';
import CircularProgress from '@material-ui/core/CircularProgress';


const FullScreenLoading = () => {
  return (
    <div className={classes.FullScreenLoading}>
      <CircularProgress />
    </div>
  )
}

export default FullScreenLoading;
