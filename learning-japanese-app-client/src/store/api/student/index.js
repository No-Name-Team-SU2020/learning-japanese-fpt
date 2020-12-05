import axios from "../../api/axios";

export { getMySubjects } from "./subject";

export const createAnswers = async (lessonId, answers) => {
  return axios.post(`/student/answer/${lessonId}`, answers, {
    headers: {
      "Content-type": "application/json",
    },
  });
};

export const getMyQuizes = async () => {
  return axios.get(`/student/quiz_results`);
};

export const getResultsByLesson = async (lessonId) => {
  return axios.get(`/student/quiz_results/${lessonId}`);
};