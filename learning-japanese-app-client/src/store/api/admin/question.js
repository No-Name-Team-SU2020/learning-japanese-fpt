import axios from '../axios';

export const getQuestionsRequest = async (lessonId) => {
  return axios.get(`/admin/questions/${lessonId}`);
}

export const createQuestionRequest = async (question) => {
  return axios.post(`/admin/questions/`, question, {
    headers : {
      'Content-type': 'application/json'
    }
  });
}

export const deleteQuestionRequest = async (qId) => {
  return axios.delete(`/admin/questions/${qId}`);
}