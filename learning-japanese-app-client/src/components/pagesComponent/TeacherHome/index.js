import React from "react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

const TeacherHome = () => {
  const history = useHistory();
  return (
    <Paper className='p-5 text-center'>
      <h1>Welcome to Dashboard</h1>
      <p className='lead'>What you gonna do today ?</p>
      <Button
        variant='contained'
        size='large'
        color='primary'
        style={{
          color: "#fff",
        }}
        onClick={() => {
          history.push("/manage-result/1");
        }}
      >
        View Result
      </Button>
    </Paper>
  );
};

export default TeacherHome;
