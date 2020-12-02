import React from "react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const TeacherHome = () => {
  return (
    <Paper className='p-5 text-center'>
      <h1>Welcome to Dashboard</h1>
      <p className='lead'>What you gonna do today ?</p>
      <Button
        variant='contained'
        size='large'
        color='primary'
        component={Link}
        to='/'
        style={{
          color: '#fff',
        }}
      >
        View Result
      </Button>
    </Paper>
  );
};

export default TeacherHome;
