import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import QuestionItem from "../../../components/pagesComponent/QuestionItem/QuestionItem";
import { useDispatch, useSelector } from "react-redux";
import { getQuestions } from "../../../store/actions/admin/question";
import { useHistory, useParams } from "react-router-dom";
import {
  submitAnswers,
  submitAnswersSuccess,
} from "../../../store/actions/student/quiz";
import Loader from "../../../components/ui/Loader/Loader";
import { alert } from "../../../store/actions/ui/ui";
import ConfirmAction from "../../../components/shared/ConfirmAction";
import TimeCountDown from "../../../components/shared/TimeCountDown";

const JoinQuestion = ({ location }) => {
  const dispatch = useDispatch();
  const [open] = useState(true);
  const history = useHistory();
  const { lId } = useParams();
  const { questionList } = useSelector((state) => state.adminQuestionList);
  const [time, setTime] = useState(900);
  const [finishTime, setFinishTime] = useState(900);
  const { loading, error, response } = useSelector(
    (state) => state.studentQuiz
  );
  const [userAnswers, setUserAnswers] = useState([]);
  useEffect(() => {
    dispatch(getQuestions(lId));
  }, [lId, dispatch]);

  useEffect(() => {
    if (time === 0) {
      dispatch(
        submitAnswers(lId, {
          answers: userAnswers,
        })
      );
    }
  }, [time, dispatch, lId, userAnswers]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (questionList.length > userAnswers.length) {
      dispatch(
        alert("warning", "Please finish all questions before submission!")
      );
    } else {
      setFinishTime(900 - time);
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
      <div className='d-flex align-items-center justify-content-between mb-2'>
        <h3>Lesson {lId}</h3>
        <TimeCountDown seconds={time} countDown={setTime} />
      </div>
      <p className='lead'>{location.search.split("=")[1]}</p>
      <form onSubmit={submitHandler}>
        {questionListMarkup}
        {loading && <Loader />}
        {error && <div className='alert alert-danger'> {error} </div>}
        <Button
          variant='contained'
          color='primary'
          type='submit'
          className='mr-2'
        >
          Submit Answer
        </Button>
      </form>
      {response && (
        <ConfirmAction open={open}>
          <div className='text-center line-height-lg px-5'>
            <h1>Lesson {lId}</h1>
            <h3 className='text-success'>Submit Successfully</h3>
            <p className='lead'>
              This quiz closed on {new Date().toLocaleDateString()}
            </p>
            <p>
              Your Score :{" "}
              <span className='text-success font-weight-bold'>
                {response?.score?.score}
              </span>
            </p>
            <p className='lead'>Time limit : 15p</p>
            <p className='lead'>
              You finish the quiz in{" "}
              {`${Math.floor(finishTime / 60)}p : ${
                finishTime - Math.floor(finishTime / 60) * 60
              }s`}
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
    </div>
  );
};

export default JoinQuestion;
