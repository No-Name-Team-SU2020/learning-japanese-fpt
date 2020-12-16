import axios from "../../api/axios";

export const getMySubjectsRequest = async () => {
  return axios.get(`/student/student-subjects`);
};
export const createAnswersRequest = async (lessonId, answers) => {
  return axios.post(`/student/answer/${lessonId}`, answers, {
    headers: {
      "Content-type": "application/json",
    },
  });
};

export const getMyQuizesRequest = async () => {
  return axios.get(`/student/quiz_results`);
};

export const getMyQuizResultsRequest = async () => {
  return axios.get(`/student/quiz_results`);
};

export const getResultsByLessonRequest = async (lessonId) => {
  return axios.get(`/student/quiz_results/${lessonId}`);
};
