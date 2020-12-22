import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../../pages/global/Login/Login";

const UnAuthorizedLayout = () => {
  return (
    <Fragment>
      <div className='body'>
        <Switch>
          <Route component={Login} />
        </Switch>
      </div>
    </Fragment>
  );
};

export default UnAuthorizedLayout;
