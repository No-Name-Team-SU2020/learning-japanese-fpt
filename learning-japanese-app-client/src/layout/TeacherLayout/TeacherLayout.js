import React, { Fragment } from "react";
import Header from "../../components/shared/Header/Header";
import { Route, Switch } from "react-router-dom";
import NotFound from "../../pages/global/_404/_404";
import { Grid } from "@material-ui/core";
import TeacherSidebar from "../../components/shared/TeacherSidebar";
import ListClassStudying from "../../pages/teacher/ListClassStudying";
import TeacherHome from "../../components/pagesComponent/TeacherHome";
import { useSelector } from "react-redux";
import ListResultStudentByClass from "../../pages/student/ListResultStudentByClass";
import ManageStudentByClass from "../../pages/teacher/ManageStudentByClass";

const AdminLayout = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  return (
    <Fragment>
      <Header />
      <div style={{ marginTop: "100px" }} />
      <div className='app-container'>
        <Grid container spacing={3}>
          <Grid item md={3}>
            <TeacherSidebar />
          </Grid>
          <Grid item md={9}>
            <Switch>
              <Route
                path='/manage-subject/:sId'
                component={ListClassStudying}
              />
              <Route
                path='/student-results/:cId'
                component={ListResultStudentByClass}
              />
              <Route
                path='/manage-student/classes/:cId'
                component={ManageStudentByClass}
              />
              <Route exact path='/' component={TeacherHome} />
              {isAuthenticated && <Route component={NotFound} />}
            </Switch>
          </Grid>
        </Grid>
      </div>
    </Fragment>
  );
};

export default AdminLayout;
