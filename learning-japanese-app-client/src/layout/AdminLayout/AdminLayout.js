import React, { Fragment } from 'react';
import QuestionList from '../../pages/QuestionList/QuestionList';
import ManageQuestion from "../../pages/ManageQuestion/ManageQuestion";
import Header from '../../components/shared/Header/Header';
import { Route, Switch } from 'react-router-dom';
import ManageSubject from '../../pages/ManageSubject/ManageSubject';
import AdminMenu from '../../components/shared/AdminMenu';
import ManageClass from '../../pages/ManageClass';

const AdminLayout = () => {
  return (
    <Fragment>
      <Header />
      <div style={{ marginTop: '100px' }} />
      <div className="app-container"><AdminMenu /></div>
      <Switch>
        <Route exact path="/" component={QuestionList} />
        <Route path="/manage-question" component={ManageQuestion} />
        <Route path="/manage-subject" component={ManageSubject} />
        <Route path="/manage-class" component={ManageClass} />
        <Route path="/manage-student" component={ManageClass} />
      </Switch>
    </Fragment>
  );
}

export default AdminLayout;
