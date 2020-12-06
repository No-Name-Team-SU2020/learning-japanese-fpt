import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import QuestionItem from "../../components/pagesComponent/QuestionItem/QuestionItem";
import { useDispatch, useSelector } from "react-redux";
import { getQuestions } from "../../store/actions/admin/question";
import { useHistory, useParams } from "react-router-dom";
import {
  submitAnswers,
  submitAnswersSuccess,
} from "../../store/actions/student/quiz";
import Loader from "../../components/ui/Loader/Loader";
import { alert } from "../../store/actions/ui/ui";
import ConfirmAction from "../../components/shared/ConfirmAction";

const JoinQuestion = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(true);
  const closeModal = () => setOpen(false);
  const history = useHistory();
  const { lId } = useParams();
  const { questionList } = useSelector((state) => state.adminQuestionList);
  const { loading, error, response } = useSelector(
    (state) => state.studentQuiz
  );
  const [userAnswers, setUserAnswers] = useState([]);
  useEffect(() => {
    dispatch(getQuestions(lId));
  }, [lId, dispatch]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (questionList.length > userAnswers.length) {
      dispatch(
        alert("warning", "Please finish all questions before submission!")
      );
    } else {
      dispatch(
        submitAnswers(lId, {
          answers: userAnswers,
        })
      );
    }
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
      <div className='d-flex align-items-center justify-content-between'>
        <h3>Lesson {lId}</h3>
        <span>Time Count: 00:00</span>
      </div>
      <form onSubmit={submitHandler}>
        {questionListMarkup}
        {loading && <Loader />}
        {error && <div className='alert alert-danger'> {error} </div>}
        {response && (
          <ConfirmAction open={open} close={closeModal}>
            <div className='text-center line-height-lg'>
              <h1>Lesson {lId}</h1>
              <h3 className='text-success'>Submit Successfully</h3>
              <p className='lead'>
                This quiz closed on {new Date().toLocaleDateString()}
              </p>
              <p className='lead'>
                Time limit : 30p
              </p>
              <Button
                variant='contained'
                color='primary'
                type='button'
                onClick={() => {
                  history.push("/");
                  dispatch(submitAnswersSuccess(null));
                }}
              >
                Back To Course
              </Button>
            </div>
          </ConfirmAction>
        )}
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
