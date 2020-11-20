import {
  ADMIN_GET_QUESTIONS, ADMIN_GET_QUESTIONS_FAILED, ADMIN_GET_QUESTIONS_START, ADMIN_GET_QUESTIONS_SUCCESS,
  ADMIN_CREATE_QUESTION, ADMIN_CREATE_QUESTION_FAILED, ADMIN_CREATE_QUESTION_START, ADMIN_CREATE_QUESTION_SUCCESS
} from '../types';

export const getQuestions = (lessonId) => ({
   type: ADMIN_GET_QUESTIONS,
   lessonId
});

export const getQuestionsSuccess = (questions) => ({
  type: ADMIN_GET_QUESTIONS_SUCCESS,
  payload: questions
});

export const getQuestionsStart = () => ({ type: ADMIN_GET_QUESTIONS_START });

export const getQuestionsFailed = (error) => ({
  type: ADMIN_GET_QUESTIONS_FAILED,
  payload: error
});

export const createQuestion = (question) => ({ 
  type : ADMIN_CREATE_QUESTION,
  question
});

export const createQuestionSuccess = (question) => ({
  type: ADMIN_CREATE_QUESTION_SUCCESS,
  payload: question
});

export const createQuestionStart = () => ({ type: ADMIN_CREATE_QUESTION_START });

export const createQuestionFailed = (error) => ({
  type: ADMIN_CREATE_QUESTION_FAILED,
  payload: error
});