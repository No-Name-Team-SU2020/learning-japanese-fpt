import axios from "../axios";

export const getQuestionsRequest = async (lessonId) => {
  return axios.get(`/shared/lessons/${lessonId}/questions`);
};

export const createQuestionRequest = async (question) => {
  return axios.post(
    `/admin/subjects/${question.subject_id}/lessons/${question.lesson_id}/questions`,
    question,
    {
      headers: {
        "Content-type": "application/json",
      },
    }
  );
};

export const deleteQuestionRequest = async (qId) => {
  return axios.delete(`/admin/questions/${qId}`);
};

export const updateQuestionRequest = async (qId, updatedQuestion) => {
  return axios.put(`/admin/questions/${qId}`, updatedQuestion, {
    headers: {
      "Content-type": "application/json",
    },
  });
};

export const searchQuestionRequest = async (term) => {
  return axios.get(`/admin/search/?input=${term}`);
};
