import axios from '../axios';

export const getStudentQuizResultByLesson = async (lId) => {
  return axios.get(`teacher/lessons/${lId}/quiz-results`)
}