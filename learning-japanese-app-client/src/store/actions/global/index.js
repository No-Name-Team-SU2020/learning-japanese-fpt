import {
  GLOBAL_GET_SINGLE_QUESTION,
  GLOBAL_GET_SINGLE_QUESTION_FAILED,
  GLOBAL_GET_SINGLE_QUESTION_START,
  GLOBAL_GET_SINGLE_QUESTION_SUCCESS,
} from "../types";

export const getSingleQuestion = (qId) => ({
  type: GLOBAL_GET_SINGLE_QUESTION,
  qId,
});

export const getSingleQuestionSuccess = (question) => ({
  type: GLOBAL_GET_SINGLE_QUESTION_SUCCESS,
  payload: question,
});

export const getSingleQuestionStart = () => ({
  type: GLOBAL_GET_SINGLE_QUESTION_START,
});

export const getSingleQuestionFailed = (error) => ({
  type: GLOBAL_GET_SINGLE_QUESTION_FAILED,
  payload: error,
});
