import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
// import ManageQuestion from "./pages/ManageQuestion/ManageQuestion";
// import QuestionList from "./pages/QuestionList/QuestionList";
import { useSelector } from "react-redux";
import StudentLayout from "./layout/StudentLayout/StudentLayout";
import UnAuthorizedLayout from "./layout/UnAuthorizedLayout/UnAuthorizedLayout";

const App = () => {
  const { role, isAuthenticated } = useSelector(state => state.auth);
  return (
    <Router>
      {
        !isAuthenticated ? (<UnAuthorizedLayout />) : (
          role === 'student' && <StudentLayout />
        )
      }
      {
        /* <Switch>
            <Route path="/question-list" component={QuestionList} />
            <Route path="/question-management" component={ManageQuestion} />
          </Switch> */
      }
    </Router>
  );
}

export default App;
