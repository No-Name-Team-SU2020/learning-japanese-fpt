import { Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
//import notfound from '../../../assets/_404.png';

const NotFound = () => {
  return (
    <div className="not-found-container shadow">
      {/* <img src={notfound} alt="404" className="w-25 mx-auto rounded" />
      <h4>
        Page Not Found
      </h4> */}
      {/* <Link to="/">
        <Button variant="contained" color="primary">Back To Home</Button>
      </Link> */}
    </div>
  )
}

export default NotFound;
