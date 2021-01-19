import React, { Fragment } from "react";
import ManageQuestion from "../../pages/admin/ManageQuestion/ManageQuestion";
import Header from "../../components/shared/Header/Header";
import { Route, Switch } from "react-router-dom";
// import ManageSubject from "../../pages/admin/ManageSubject/ManageSubject";
import AdminMenu from "../../components/shared/AdminMenu";
// import ManageClass from "../../pages/admin/ManageClass";
// import ManageLesson from "../../pages/admin/ManageLesson/ManageLesson";
import NotFound from "../../pages/global/_404/_404";
// import ClassTable from "../../components/pagesComponent/ClassTable";
import { useSelector } from "react-redux";

const AdminLayout = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  return (
    <Fragment>
      <Header />
      <div style={{ marginTop: "100px" }} />
      <div className='app-container'>
        <AdminMenu />
      </div>
      <Switch>
        {/* <Route exact path='/'>
          <div className='app-container'>
            <ClassTable />
          </div>
        </Route> */}
        <Route path='/' component={ManageQuestion} />
        {/* <Route path='/manage-subject' component={ManageSubject} />
        <Route path='/manage-class' component={ManageClass} />
        <Route path='/manage-lesson/:sId' component={ManageLesson} /> */}
        {isAuthenticated && <Route component={NotFound} />}
      </Switch>
    </Fragment>
  );
};

export default AdminLayout;
