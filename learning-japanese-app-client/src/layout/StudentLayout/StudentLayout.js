import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Sidebar from '../../components/shared/Sidebar/Sidebar';
import ToggleSidebar from '../../components/ui/ToggleSidebar/ToggleSidebar';
import StudentHome from '../../pages/StudentHome/StudentHome';
import Subject from '../../pages/Subject/Subject';
import JoinQuestion from '../../pages/JoinQuestion/JoinQuestion';
import NotFound from '../../pages/_404/_404';
import Grammer from '../../pages/Grammar/Grammar';
import Syllabus from '../../pages/Syllabus/Syllabus';
import StudentQuizResults from '../../pages/StudentQuizResults';
import { useSelector } from 'react-redux';

const StudentLayout = () => {
  const { isAuthenticated  } = useSelector(state => state.auth);
  return (
    <Fragment>
      <Sidebar />
      <div className="app-container mt-4">
        <main className="row">
          <div className="col-lg-3"></div>
          <div className="col-lg-9 p-4">
            <div className="d-block d-lg-none"><ToggleSidebar /></div>
            <Switch>
              <Route exact path="/" component={StudentHome} />
              <Route path="/quiz-results" component={StudentQuizResults} />
              <Route path="/lesson/:sId" component={Subject} />
              <Route path="/quiz/:lId" component={JoinQuestion} />
              <Route path="/grammar" component={Grammer} />
              <Route path="/syllabus" component={Syllabus} />
              { isAuthenticated && <Route component={NotFound} />}
            </Switch>
          </div>
        </main>
      </div>
    </Fragment>
  );
}

export default StudentLayout;
