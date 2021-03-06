import React, { Fragment } from "react";
import Header from "../../components/shared/Header/Header";
import { Route, Switch } from "react-router-dom";
import NotFound from "../../pages/global/_404/_404";
import { Grid } from "@material-ui/core";
import TeacherSidebar from "../../components/shared/TeacherSidebar";
import ListSubjectClassStudying from "../../pages/teacher/ListSubjectClassStudying";
import TeacherHome from "../../components/pagesComponent/TeacherHome";
import { useSelector } from "react-redux";
import ManageStudentByClass from "../../pages/teacher/ManageStudentByClass";
import ManageProgressByClass from "../../pages/teacher/ManageProgressByClass";
import StudentQuizResult from "../../pages/teacher/StudentQuizResult";
import QuizDetail from "../../pages/teacher/QuizDetail";

const TeacherLayout = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  return (
    <Fragment>
      <Header />
      <div style={{ marginTop: "100px" }} />
      <div className='app-container'>
        <div className='teacher-body'>
          <Grid container spacing={3}>
            <Grid item md={3}>
              <TeacherSidebar />
            </Grid>
            <Grid item md={9}>
              <Switch>
                <Route
                  path='/manage-subject/:cId'
                  component={ListSubjectClassStudying}
                />
                <Route
                  path='/manage-progress/classes/:cId'
                  component={ManageProgressByClass}
                />
                <Route path='/manage-progress/:cId'>
                  <ListSubjectClassStudying isProgress />
                </Route>
                <Route path='/manage-result/:cId'>
                  <ListSubjectClassStudying isResult />
                </Route>
                <Route
                  path='/student-quiz-result/:sId'
                  component={StudentQuizResult}
                />
                <Route
                  path='/quiz-detail/lesson/:lId/student/:sId'
                  component={QuizDetail}
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
      </div>
    </Fragment>
  );
};

export default TeacherLayout;
