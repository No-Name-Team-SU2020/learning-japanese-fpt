import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Header from "./components/shared/Header/Header";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import ManageQuestion from "./pages/ManageQuestion/ManageQuestion";
import QuestionList from "./pages/QuestionList/QuestionList";
import Register from "./pages/Register/Register";

const App = () => {

  return (
    <Router>
      {/* <Header /> */}
      {/* <div className="body"> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/question-list">
          <QuestionList />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/question-management">
          <ManageQuestion />
        </Route>
      </Switch>
      {/* </div> */}
    </Router>
  );
}

export default App;
