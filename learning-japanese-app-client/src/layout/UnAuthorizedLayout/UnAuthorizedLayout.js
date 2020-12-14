import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../../pages/global/Login/Login';
import Header from '../../components/shared/Header/Header';

const UnAuthorizedLayout = () => {
  return (
    <Fragment>
      <Header />
      <div className="body">
        <Switch>
          <Route component={Login} />
        </Switch>
      </div>
    </Fragment>
  );
}

export default UnAuthorizedLayout;
