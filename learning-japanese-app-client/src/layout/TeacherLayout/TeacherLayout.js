import React, { Fragment } from "react";
import Header from "../../components/shared/Header/Header";
import { Route, Switch } from "react-router-dom";
import NotFound from "../../pages/_404/_404";
import { Grid } from "@material-ui/core";
import TeacherSidebar from "../../components/shared/TeacherSidebar";
import ListClassStudying from "../../pages/ListClassStudying";
import TeacherHome from "../../components/pagesComponent/TeacherHome";

const AdminLayout = () => {
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
            <Route path='/manage-subject/:sId' component={ListClassStudying} />
              <Route exact path='/' component={TeacherHome} />
              <Route component={NotFound} />
            </Switch>
          </Grid>
        </Grid>
      </div>
    </Fragment>
  );
};

export default AdminLayout;
