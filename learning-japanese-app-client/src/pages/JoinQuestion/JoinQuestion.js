import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import QuestionItem from "../../components/pagesComponent/QuestionItem/QuestionItem";
import { useDispatch, useSelector } from "react-redux";
import { getQuestions } from "../../store/actions/admin/question";
import { useHistory, useParams } from "react-router-dom";

const JoinQuestion = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { lId } = useParams();
  const { questionList } = useSelector((state) => state.adminQuestionList);
  const [userAnswers, setUserAnswers] = useState([]);

  useEffect(() => {
    dispatch(getQuestions(lId));
  }, [lId, dispatch]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(userAnswers);
  };
  const questionListMarkup = questionList.map((q) => (
    <QuestionItem
      key={q.question_id}
      question={q}
      index={q.question_id}
      listAnswers={userAnswers}
      updateUserAnswers={setUserAnswers}
    />
  ));

  return (
    <div className='my-3'>
      <form onSubmit={submitHandler}>
        {questionListMarkup}
        <Button
          variant='contained'
          color='primary'
          type='submit'
          className='mr-2'
        >
          Submit Answer
        </Button>
        <Button
          variant='contained'
          color='secondary'
          type='button'
          onClick={() => history.goBack()}
        >
          Cancel Quiz
        </Button>
      </form>
    </div>
  );
};

export default JoinQuestion;
