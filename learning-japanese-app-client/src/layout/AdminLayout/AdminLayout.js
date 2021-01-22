import React, { Fragment } from "react";
import ManageQuestion from "../../pages/admin/ManageQuestion/ManageQuestion";
import Header from "../../components/shared/Header/Header";
import { Route, Switch } from "react-router-dom";
import AdminMenu from "../../components/shared/AdminMenu";
import NotFound from "../../pages/global/_404/_404";
import { useSelector } from "react-redux";
import ManageGrammar from "../../pages/admin/ManageGrammar";
import QuizSetting from "../../pages/admin/QuizSetting";
import GrammarList from "../../pages/admin/ManageGrammar/GrammarList";
import CreateGrammar from "../../pages/admin/ManageGrammar/CreateGrammar";
import EditGrammar from "../../pages/admin/ManageGrammar/EditGrammar";
import UpdateData from "../../pages/admin/UpdateData";
import EditSetting from "../../pages/admin/QuizSetting/EditSetting";

const AdminLayout = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  return (
    <Fragment>
      <Header />
      <div className='app-container mt-100px'>
        <AdminMenu />
      </div>
      <Switch>
      <Route path='/update-data' component={UpdateData} />
        <Route path='/manage-grammar' component={ManageGrammar} />
        <Route path='/grammar-list/:sId' component={GrammarList} />
        <Route path='/create-grammar/:lId' component={CreateGrammar} />
        <Route path='/edit-setting/:sId' component={EditSetting} />
        <Route path='/edit-grammar/:gId' component={EditGrammar} />
        <Route path='/quiz-setting' component={QuizSetting} />
        <Route path='/' component={ManageQuestion} />
        {isAuthenticated && <Route component={NotFound} />}
      </Switch>
    </Fragment>
  );
};

export default AdminLayout;
