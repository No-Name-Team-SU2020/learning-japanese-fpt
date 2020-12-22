import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import StudentLayout from "./layout/StudentLayout/StudentLayout";
import UnAuthorizedLayout from "./layout/UnAuthorizedLayout/UnAuthorizedLayout";
import AlertList from "./components/ui/AlertList/AlertList";
import FullScreenLoading from "./components/ui/FullScreenLoading/FullScreenLoading";
import { getProfile } from "./store/actions/user/user";
import TeacherLayout from "./layout/TeacherLayout/TeacherLayout";
import AdminLayout from "./layout/AdminLayout/AdminLayout";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  const { isAuthenticated, token } = useSelector((state) => state.auth);
  const { loading, profile } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticated) dispatch(getProfile(token));
  }, [dispatch, token, isAuthenticated]);

  return (
    <Router>
      {loading && <FullScreenLoading />}
      {!isAuthenticated ? (
        <UnAuthorizedLayout />
      ) : (
        <Fragment>
          {profile?.role_id === 3 && <StudentLayout />}
          {profile?.role_id === 2 && <TeacherLayout />}
          {profile?.role_id === 1 && <AdminLayout />}
        </Fragment>
      )}
      <AlertList />
    </Router>
  );
};

export default App;
