import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import QuestionItem from '../../components/pagesComponent/QuestionItem/QuestionItem';
import { tempQuestions } from '../../temporary-data/data';

const JoinQuestion = () => {
  const [userAnswers, setUserAnswers] = useState([]);
  const submitHandler = e => {
    e.preventDefault();
    console.log(userAnswers);
  }
  const questionList = tempQuestions.map((q, id) => <QuestionItem key={q.id} question={q} index={id}
    listAnswers={userAnswers} updateUserAnswers={setUserAnswers} />);
  return (
    <div className="my-3">
      <form onSubmit={submitHandler}>
        {questionList}
        <Button variant="contained" color="primary" type="submit">
          Finish
        </Button>
      </form>
    </div>
  );
}

export default JoinQuestion;
