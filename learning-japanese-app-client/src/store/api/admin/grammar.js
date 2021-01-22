import axios from "../axios";

export const getListGrammarRequest = async (lessonId) => {
  return axios.get(`/shared/lessons/${lessonId}/grammars`);
};

export const getSingleGrammarRequest = async (grammarId) => {
  return axios.get(`/shared/grammars/${grammarId}`);
};

export const createGrammarRequest = async (lessonId, data) => {
  return axios.post(`/admin/lessons/${lessonId}/grammars`, data, {
    headers: {
      "Content-type": "application/json",
    },
  });
};

export const deleteGrammarRequest = async (grammarId) => {
  return axios.delete(`/admin/grammars/${grammarId}`);
};

export const updateGrammarRequest = async (grammarId, data) => {
  return axios.put(`/admin/grammars/${grammarId}`, data, {
    headers: {
      "Content-type": "application/json",
    },
  });
};
