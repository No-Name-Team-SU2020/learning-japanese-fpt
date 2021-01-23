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
  const [isSubmit, setIsSubmit] = useState(false);
  const history = useHistory();
  const { lId } = useParams();
  const adminQuestionList = useSelector((state) => state.adminQuestionList);
  const [time, setTime] = useState(parseInt(localStorage.getItem("tdq")) * 60);
  const [finishTime, setFinishTime] = useState(
    parseInt(localStorage.getItem("tdq")) * 60
  );
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

  const submitHandler = () => {
    if (adminQuestionList?.questionList?.length > userAnswers.length) {
      dispatch(
        alert("warning", "Please finish all questions before submission!")
      );
    } else {
      setIsSubmit(false);
      setFinishTime(finishTime - time);
      dispatch(
        submitAnswers(lId, {
          answers: userAnswers,
        })
      );
    }
  };
  const questionListMarkup = adminQuestionList.questionList?.map((q, index) => (
    <QuestionItem
      key={q.question_id}
      question={q}
      // index={q.question_id}
      index={index}
      listAnswers={userAnswers}
      updateUserAnswers={setUserAnswers}
    />
  ));
  return (
    <div className='my-3'>
      {!adminQuestionList.loading &&
        !adminQuestionList.error &&
        adminQuestionList.questionList &&
        adminQuestionList.questionList.length > 0 && (
          <>
            <div className='d-flex align-items-center justify-content-between mb-2'>
              <h3> {adminQuestionList.questionList?.lesson} </h3>
              <TimeCountDown seconds={time} countDown={setTime} />
            </div>
            <h1 className="text-center line-height-lg ml-1">Test</h1>
            <form>
              {questionListMarkup}
              {loading && <Loader />}
              {error && <div className='alert alert-danger'> {error} </div>}
              <Button
                variant='contained'
                color='primary'
                type='button'
                className='mr-2'
                onClick={() => {
                  setIsSubmit(true);
                }}
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
                      history.push("/subject-list");
                      dispatch(submitAnswersSuccess(null));
                    }}
                  >
                    Back To Course
                  </Button>
                </div>
              </ConfirmAction>
            )}
          </>
        )}
      {!adminQuestionList.loading &&
        adminQuestionList.questionList.length === 0 && (
          <>
            <p className='text-danger lead'>
              This quiz has no questions yet!
            </p>
            <Button
              type='button'
              variant='contained'
              color='primary'
              onClick={() => {
                history.goBack();
              }}
            >
              Go Back
            </Button>
          </>
        )}
      {!adminQuestionList.loading &&
        !adminQuestionList.error &&
        !adminQuestionList.questionList && (
          <div className='text-center'>
            <p className='text-danger lead'>
              Opps. You do not have enought permission to view join this quiz!!!
            </p>
            <Button
              type='button'
              variant='contained'
              color='primary'
              onClick={() => {
                history.push("/subject-list");
              }}
            >
              Go Back
            </Button>
          </div>
        )}
      <ConfirmAction open={isSubmit}>
        <div className='text-center line-height-lg px-5'>
          <h3>Are you sure to submit answers</h3>
          <Button
            variant='contained'
            color='primary'
            type='button'
            className='mr-3'
            onClick={() => {
              submitHandler();
            }}
          >
            Yes
          </Button>
          <Button
            variant='contained'
            color='secondary'
            type='button'
            onClick={() => {
              setIsSubmit(false);
            }}
          >
            No
          </Button>
        </div>
      </ConfirmAction>
    </div>
  );
};

export default JoinQuestion;