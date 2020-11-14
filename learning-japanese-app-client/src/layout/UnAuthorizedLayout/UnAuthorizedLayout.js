import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../../pages/Login/Login';
import Register from '../../pages/Register/Register';
import Header from '../../components/shared/Header/Header';

const UnAuthorizedLayout = () => {
  return (
    <Fragment>
      <Header />
      <div className="body">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </div>
    </Fragment>
  );
}

export default UnAuthorizedLayout;
