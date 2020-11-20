import React from 'react';
import { CircularProgress } from '@material-ui/core';


const SpinnerLoader = () => {
  return <CircularProgress style={{ margin: '15px auto', display: 'block' }} />;
}

export default SpinnerLoader;
