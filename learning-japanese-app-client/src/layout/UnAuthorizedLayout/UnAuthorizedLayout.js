import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../../pages/global/Login/Login";
import login from "../../assets/login.jpg";

const UnAuthorizedLayout = () => {
  return (
    <Fragment>
      <div
        style={{
          background: `url(${login})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          width: "100vw",
          zIndex: 2,
          position: "relative",
        }}
      >
        <Switch>
          <Route component={Login} />
        </Switch>
      </div>
    </Fragment>
  );
};

export default UnAuthorizedLayout;
