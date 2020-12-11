import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Sidebar from "../../components/shared/Sidebar/Sidebar";
import ToggleSidebar from "../../components/ui/ToggleSidebar/ToggleSidebar";
import StudentHome from "../../pages/student/StudentHome/StudentHome";
import LessonBySubject from "../../pages/student/LessonBySubject";
import JoinQuestion from "../../pages/student/JoinQuestion/JoinQuestion";
import NotFound from "../../pages/global/_404/_404";
import Grammers from "../../pages/student/Grammar/Grammar";
import Syllabus from "../../pages/student/Syllabus/Syllabus";
import StudentQuizResults from "../../pages/student/StudentQuizResults";
import SubjectList from "../../components/pagesComponent/SubjectList/SubjectList";
import { useSelector } from "react-redux";
import LessonDetail from "../../pages/student/LessonDetail";
import GrammarSubjectList from "../../components/pagesComponent/GrammarSubjectList";
import GrammarLessonBySubject from "../../pages/student/GrammarLessonBySubject";
import GrammerDetail from "../../components/pagesComponent/GrammarDetail/GrammarDetail";

const StudentLayout = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  return (
    <Fragment>
      <Sidebar />
      <div className='app-container mt-4'>
        <main className='row'>
          <div className='col-lg-3'></div>
          <div className='col-lg-9 p-4'>
            <div className='d-block d-lg-none'>
              <ToggleSidebar />
            </div>
            <Switch>
              <Route exact path='/' component={StudentHome} />
              <Route path='/quiz-results' component={StudentQuizResults} />
              <Route path='/subject-list' component={SubjectList} />
              <Route
                path='/grammar-subject-list'
                component={GrammarSubjectList}
              />
              <Route path='/lessons/:sId' component={LessonBySubject} />
              <Route
                path='/grammar-lessons/:sId'
                component={GrammarLessonBySubject}
              />
              <Route path='/lesson-detail/:lId' component={LessonDetail} />
              <Route path='/quiz/:lId' component={JoinQuestion} />
              <Route path='/grammars/:lId' component={Grammers} />
              <Route path='/grammar-detail/:gId' component={GrammerDetail} />
              <Route path='/syllabus' component={Syllabus} />
              {isAuthenticated && <Route component={NotFound} />}
            </Switch>
          </div>
        </main>
      </div>
    </Fragment>
  );
};

export default StudentLayout;
