import React, { Fragment } from "react";

const Dashboard = ({ setAuth }) => {
  return (
    <Fragment>
      <h1> Dashbroad</h1>
      <button onClick={() => setAuth(true)}>Log Out</button>
    </Fragment>
  );
};

export default Dashboard;
