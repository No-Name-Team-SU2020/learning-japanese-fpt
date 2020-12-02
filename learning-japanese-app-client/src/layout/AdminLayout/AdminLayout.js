import React, { Fragment } from "react";
import ManageQuestion from "../../pages/ManageQuestion/ManageQuestion";
import Header from "../../components/shared/Header/Header";
import { Route, Switch } from "react-router-dom";
import ManageSubject from "../../pages/ManageSubject/ManageSubject";
import AdminMenu from "../../components/shared/AdminMenu";
import ManageClass from "../../pages/ManageClass";
import ManageLesson from "../../pages/ManageLesson/ManageLesson";
import NotFound from "../../pages/_404/_404";
import ClassTable from "../../components/pagesComponent/ClassTable";

const AdminLayout = () => {
  return (
    <Fragment>
      <Header />
      <div style={{ marginTop: "100px" }} />
      <div className='app-container'>
        <AdminMenu />
      </div>
      <Switch>
        <Route exact path='/'>
          <div className='app-container'>
            <ClassTable />
          </div>
        </Route>
        <Route path='/manage-question' component={ManageQuestion} />
        <Route path='/manage-subject' component={ManageSubject} />
        <Route path='/manage-class' component={ManageClass} />
        <Route path='/manage-lesson/:sId' component={ManageLesson} />
        <Route component={NotFound} />
      </Switch>
    </Fragment>
  );
};

export default AdminLayout;
