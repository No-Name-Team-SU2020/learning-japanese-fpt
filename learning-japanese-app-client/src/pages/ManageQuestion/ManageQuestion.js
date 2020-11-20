import React from 'react';
import { Route } from 'react-router-dom';
import CreateQuestionForm from '../../components/pagesComponent/CreateQuestionForm/CreateQuestionForm';
import EditQuestionForm from '../../components/pagesComponent/EditQuestionForm/EditQuestionForm';

const ManageQuestion = () => {
  
  return (
    <div className="w-50 mx-auto my-5">
      <Route exact path="/manage-question">
        <CreateQuestionForm />
      </Route>
      <Route path="/manage-question/question/edit/:qId">
        <EditQuestionForm />
      </Route>
    </div>
  );
}

export default ManageQuestion;
