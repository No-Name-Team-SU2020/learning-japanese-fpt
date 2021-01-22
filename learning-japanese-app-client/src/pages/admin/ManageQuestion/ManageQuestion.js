import React from "react";
import { Route } from "react-router-dom";
import CreateQuestionForm from "../../../components/formElement/CreateQuestionForm/CreateQuestionForm";
import EditQuestionForm from "../../../components/formElement/EditQuestionForm/EditQuestionForm";
import QuestionList from "../QuestionList/QuestionList";

const ManageQuestion = ({ match }) => {
  return (
    <div className='my-3'>
      <Route exact path={`${match.url}`}>
        <QuestionList />
      </Route>
      <div className='w-50 mx-auto'>
        <Route path={`${match.url}question/edit/:qId`}>
          <EditQuestionForm />
        </Route>
        <Route path={`${match.url}question/create`}>
          <CreateQuestionForm />
        </Route>
      </div>
    </div>
  );
};

export default ManageQuestion;
