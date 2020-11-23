import React, { Fragment } from 'react';
import QuestionList from '../../pages/QuestionList/QuestionList';
import ManageQuestion from "../../pages/ManageQuestion/ManageQuestion";
import Header from '../../components/shared/Header/Header';
import { Route, Switch } from 'react-router-dom';
import ManageSubject from '../../pages/ManageSubject/ManageSubject';

const AdminLayout = () => {
  return (
    <Fragment>
      <Header />
      <div style={{ marginTop: '120px' }} />
      <Switch>
        <Route exact path="/" component={QuestionList} />
        <Route path="/manage-question" component={ManageQuestion} />
        <Route path="/manage-subject" component={ManageSubject} />
      </Switch>
    </Fragment>
  );
}

export default AdminLayout;
