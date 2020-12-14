import axios from '../axios';

export const getSingleQuestionRequest = async (qId) => {
  return axios.get(`/shared/questions/${qId}`);
}