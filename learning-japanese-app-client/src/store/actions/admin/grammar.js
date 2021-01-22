import {
  GLOBAL_GET_LIST_GRAMMAR,
  GLOBAL_GET_LIST_GRAMMAR_START,
  GLOBAL_GET_LIST_GRAMMAR_SUCCESS,
  GLOBAL_GET_LIST_GRAMMAR_FAILED,
  GLOBAL_GET_SINGLE_GRAMMAR,
  GLOBAL_GET_SINGLE_GRAMMAR_START,
  GLOBAL_GET_SINGLE_GRAMMAR_SUCCESS,
  GLOBAL_GET_SINGLE_GRAMMAR_FAILED,
  ADMIN_CREATE_GRAMMAR,
  ADMIN_CREATE_GRAMMAR_START,
  ADMIN_CREATE_GRAMMAR_SUCCESS,
  ADMIN_CREATE_GRAMMAR_FAILED,
  ADMIN_UPDATE_GRAMMAR,
  ADMIN_UPDATE_GRAMMAR_START,
  ADMIN_UPDATE_GRAMMAR_SUCCESS,
  ADMIN_UPDATE_GRAMMAR_FAILED,
  ADMIN_DELETE_GRAMMAR,
  ADMIN_DELETE_GRAMMAR_START,
  ADMIN_DELETE_GRAMMAR_SUCCESS,
  ADMIN_DELETE_GRAMMAR_FAILED,
} from "../types";

export const getListGrammar = (lessonId) => ({
  type: GLOBAL_GET_LIST_GRAMMAR,
  lessonId,
});

export const getListGrammarStart = () => ({
  type: GLOBAL_GET_LIST_GRAMMAR_START,
});

export const getListGrammarSuccess = (payload) => ({
  type: GLOBAL_GET_LIST_GRAMMAR_SUCCESS,
  payload,
});

export const getListGrammarFailed = (payload) => ({
  type: GLOBAL_GET_LIST_GRAMMAR_FAILED,
  payload,
});

export const getSingleGrammar = (grammarId) => ({
  type: GLOBAL_GET_SINGLE_GRAMMAR,
  grammarId,
});

export const getSingleGrammarStart = () => ({
  type: GLOBAL_GET_SINGLE_GRAMMAR_START,
});

export const getSingleGrammarSuccess = (payload) => ({
  type: GLOBAL_GET_SINGLE_GRAMMAR_SUCCESS,
  payload,
});

export const getSingleGrammarFailed = (payload) => ({
  type: GLOBAL_GET_SINGLE_GRAMMAR_FAILED,
  payload,
});

export const createGrammar = (lessonId, grammar) => ({
  type: ADMIN_CREATE_GRAMMAR,
  lessonId,
  grammar,
});

export const createGrammarStart = () => ({
  type: ADMIN_CREATE_GRAMMAR_START,
});

export const createGrammarSuccess = (payload) => ({
  type: ADMIN_CREATE_GRAMMAR_SUCCESS,
  payload,
});

export const createGrammarFailed = (payload) => ({
  type: ADMIN_CREATE_GRAMMAR_FAILED,
  payload,
});

export const updateGrammar = (grammarId, grammar) => ({
  type: ADMIN_UPDATE_GRAMMAR,
  grammarId,
  grammar,
});

export const updateGrammarStart = () => ({
  type: ADMIN_UPDATE_GRAMMAR_START,
});

export const updateGrammarSuccess = (id, grammar) => ({
  type: ADMIN_UPDATE_GRAMMAR_SUCCESS,
  payload: { id, grammar },
});

export const updateGrammarFailed = (payload) => ({
  type: ADMIN_UPDATE_GRAMMAR_FAILED,
  payload,
});

export const deleteGrammar = (grammarId) => ({
  type: ADMIN_DELETE_GRAMMAR,
  grammarId,
});

export const deleteGrammarStart = () => ({
  type: ADMIN_DELETE_GRAMMAR_START,
});

export const deleteGrammarSuccess = (payload) => ({
  type: ADMIN_DELETE_GRAMMAR_SUCCESS,
  payload,
});

export const deleteGrammarFailed = (payload) => ({
  type: ADMIN_DELETE_GRAMMAR_FAILED,
  payload,
});
