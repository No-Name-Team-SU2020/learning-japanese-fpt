import {
  STUDENT_SUBMIT_ANSWERS,
  STUDENT_SUBMIT_ANSWERS_START,
  STUDENT_SUBMIT_ANSWERS_SUCCESS,
  STUDENT_SUBMIT_ANSWERS_FAILED,
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
