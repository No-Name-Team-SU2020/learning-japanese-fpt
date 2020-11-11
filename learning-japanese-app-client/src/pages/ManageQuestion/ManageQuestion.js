import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CreateQuestionForm from '../../components/pagesComponent/CreateQuestionForm/CreateQuestionForm';
import EditQuestionForm from '../../components/pagesComponent/EditQuestionForm/EditQuestionForm';

const ManageQuestion = () => {
  return (
    <div className="w-50 mx-auto my-5">
      <Switch>
        <Route path="/">
          <CreateQuestionForm />
        </Route>
        <Route path="/edit:id">
          <EditQuestionForm />
        </Route>
      </Switch>
    </div>
  );
}

export default ManageQuestion;
