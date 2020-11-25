import React from 'react';
import { Route } from 'react-router-dom';
import CreateQuestionForm from '../../components/formElement/CreateQuestionForm/CreateQuestionForm';
import EditQuestionForm from '../../components/formElement/EditQuestionForm/EditQuestionForm';

const ManageQuestion = ({ match }) => {
  return (  
    <div className="w-50 mx-auto my-5">
      <Route path={`${match.url}/question/edit/:qId`}>
        <EditQuestionForm />
      </Route>
      <Route exact path={`${match.url}/create`}>
        <CreateQuestionForm />
      </Route>
    </div>
  );
}

export default ManageQuestion;
