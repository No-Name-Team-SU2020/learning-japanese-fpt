import {
  ADMIN_GET_QUESTIONS,
  ADMIN_GET_QUESTIONS_FAILED,
  ADMIN_GET_QUESTIONS_START,
  ADMIN_GET_QUESTIONS_SUCCESS,
  ADMIN_CREATE_QUESTION,
  ADMIN_CREATE_QUESTION_FAILED,
  ADMIN_CREATE_QUESTION_START,
  ADMIN_CREATE_QUESTION_SUCCESS,
  ADMIN_DELETE_QUESTION,
  ADMIN_DELETE_QUESTION_FAILED,
  ADMIN_DELETE_QUESTION_START,
  ADMIN_DELETE_QUESTION_SUCCESS,
  ADMIN_UPDATE_QUESTION,
  ADMIN_UPDATE_QUESTION_FAILED,
  ADMIN_UPDATE_QUESTION_START,
  ADMIN_UPDATE_QUESTION_SUCCESS,
  GLOBAL_FIND_QUESTION,
  GLOBAL_FIND_QUESTION_FAILED,
  GLOBAL_FIND_QUESTION_START,
  GLOBAL_FIND_QUESTION_SUCCESS,
} from "../types";

export const getQuestions = (lessonId) => ({
  type: ADMIN_GET_QUESTIONS,
  lessonId,
});

export const getQuestionsSuccess = (questions) => ({
  type: ADMIN_GET_QUESTIONS_SUCCESS,
  payload: questions,
});

export const getQuestionsStart = () => ({ type: ADMIN_GET_QUESTIONS_START });

export const getQuestionsFailed = (error) => ({
  type: ADMIN_GET_QUESTIONS_FAILED,
  payload: error,
});

export const createQuestion = (question) => ({
  type: ADMIN_CREATE_QUESTION,
  question,
});

export const createQuestionSuccess = (question) => ({
  type: ADMIN_CREATE_QUESTION_SUCCESS,
  payload: question,
});

export const createQuestionStart = () => ({
  type: ADMIN_CREATE_QUESTION_START,
});

export const createQuestionFailed = (error) => ({
  type: ADMIN_CREATE_QUESTION_FAILED,
  payload: error,
});

export const deleteQuestion = (qId) => ({
  type: ADMIN_DELETE_QUESTION,
  qId,
});

export const deleteQuestionStart = () => ({
  type: ADMIN_DELETE_QUESTION_START,
});

export const deleteQuestionSuccess = (qId) => ({
  type: ADMIN_DELETE_QUESTION_SUCCESS,
  payload: qId,
});

export const deleteQuestionFailed = (error) => ({
  type: ADMIN_DELETE_QUESTION_FAILED,
  payload: error,
});

export const updateQuestion = (qId, updatedQuestion) => ({
  type: ADMIN_UPDATE_QUESTION,
  qId,
  updatedQuestion,
});

export const updateQuestionStart = () => ({
  type: ADMIN_UPDATE_QUESTION_START,
});

export const updateQuestionSuccess = (qId, updatedQuestion) => ({
  type: ADMIN_UPDATE_QUESTION_SUCCESS,
  payload: {
    qId,
    updatedQuestion,
  },
});

export const updateQuestionFailed = (error) => ({
  type: ADMIN_UPDATE_QUESTION_FAILED,
  payload: error,
});

export const findQuestion = (term) => ({
  type: GLOBAL_FIND_QUESTION,
  term,
});

export const findQuestionStart = () => ({
  type: GLOBAL_FIND_QUESTION_START,
});

export const findQuestionSuccess = (question) => ({
  type: GLOBAL_FIND_QUESTION_SUCCESS,
  payload: question,
});

export const findQuestionFailed = (error) => ({
  type: GLOBAL_FIND_QUESTION_FAILED,
  payload: error,
});

