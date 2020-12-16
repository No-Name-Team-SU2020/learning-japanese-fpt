import {
  STUDENT_SUBMIT_ANSWERS,
  STUDENT_SUBMIT_ANSWERS_START,
  STUDENT_SUBMIT_ANSWERS_SUCCESS,
  STUDENT_SUBMIT_ANSWERS_FAILED,
  STUDENT_GET_RESULTS,
  STUDENT_GET_RESULTS_START,
  STUDENT_GET_RESULTS_SUCCESS,
  STUDENT_GET_RESULTS_FAILED,
} from "../types";

export const submitAnswers = (lId, listAnswers) => ({
  type: STUDENT_SUBMIT_ANSWERS,
  lId,
  listAnswers,
});

export const submitAnswersStart = () => ({
  type: STUDENT_SUBMIT_ANSWERS_START,
});

export const submitAnswersSuccess = (payload) => ({
  type: STUDENT_SUBMIT_ANSWERS_SUCCESS,
  payload,
});

export const submitAnswersFailed = (error) => ({
  type: STUDENT_SUBMIT_ANSWERS_FAILED,
  error,
});

export const getResults = () => ({
  type: STUDENT_GET_RESULTS,
});

export const getResultsStart = () => ({
  type: STUDENT_GET_RESULTS_START,
});

export const getResultsSuccess = (payload) => ({
  type: STUDENT_GET_RESULTS_SUCCESS,
  payload,
});

export const getResultsFailed = (error) => ({
  type: STUDENT_GET_RESULTS_FAILED,
  error,
});
