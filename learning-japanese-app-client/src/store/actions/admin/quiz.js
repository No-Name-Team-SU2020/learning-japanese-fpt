import {
  ADMIN_GET_ALL_QUIZ_PRESET,
  ADMIN_GET_ALL_QUIZ_PRESET_START,
  ADMIN_GET_ALL_QUIZ_PRESET_SUCCESS,
  ADMIN_GET_ALL_QUIZ_PRESET_FAILED,
  ADMIN_CREATE_QUIZ_PRESET,
  ADMIN_CREATE_QUIZ_PRESET_START,
  ADMIN_CREATE_QUIZ_PRESET_SUCCESS,
  ADMIN_CREATE_QUIZ_PRESET_FAILED,
  ADMIN_DELETE_QUIZ_PRESET,
  ADMIN_DELETE_QUIZ_PRESET_START,
  ADMIN_DELETE_QUIZ_PRESET_SUCCESS,
  ADMIN_DELETE_QUIZ_PRESET_FAILED,
  ADMIN_UPDATE_QUIZ_PRESET_STATUS,
  ADMIN_UPDATE_QUIZ_PRESET_STATUS_START,
  ADMIN_UPDATE_QUIZ_PRESET_STATUS_SUCCESS,
  ADMIN_UPDATE_QUIZ_PRESET_STATUS_FAILED,
  ADMIN_UPDATE_QUIZ_PRESET,
  ADMIN_UPDATE_QUIZ_PRESET_START,
  ADMIN_UPDATE_QUIZ_PRESET_SUCCESS,
  ADMIN_UPDATE_QUIZ_PRESET_FAILED,
} from "../types";

export const getAllQuizPreset = () => ({
  type: ADMIN_GET_ALL_QUIZ_PRESET,
});

export const getAllQuizPresetStart = () => ({
  type: ADMIN_GET_ALL_QUIZ_PRESET_START,
});

export const getAllQuizPresetSuccess = (payload) => ({
  type: ADMIN_GET_ALL_QUIZ_PRESET_SUCCESS,
  payload,
});

export const getAllQuizPresetFailed = (error) => ({
  type: ADMIN_GET_ALL_QUIZ_PRESET_FAILED,
  payload: error,
});

export const createQuizPreset = (newSetting) => ({
  type: ADMIN_CREATE_QUIZ_PRESET,
  newSetting,
});

export const createQuizPresetStart = () => ({
  type: ADMIN_CREATE_QUIZ_PRESET_START,
});

export const createQuizPresetSuccess = (payload) => ({
  type: ADMIN_CREATE_QUIZ_PRESET_SUCCESS,
  payload,
});

export const createQuizPresetFailed = (error) => ({
  type: ADMIN_CREATE_QUIZ_PRESET_FAILED,
  payload: error,
});

export const deleteQuizPreset = (id) => ({
  type: ADMIN_DELETE_QUIZ_PRESET,
  id,
});

export const deleteQuizPresetStart = () => ({
  type: ADMIN_DELETE_QUIZ_PRESET_START,
});

export const deleteQuizPresetSuccess = (payload) => ({
  type: ADMIN_DELETE_QUIZ_PRESET_SUCCESS,
  payload,
});

export const deleteQuizPresetFailed = (error) => ({
  type: ADMIN_DELETE_QUIZ_PRESET_FAILED,
  payload: error,
});

export const updateQuizPresetStatus = (is_chosen, id) => ({
  type: ADMIN_UPDATE_QUIZ_PRESET_STATUS,
  is_chosen,
  id,
});

export const updateQuizPresetStatusStart = () => ({
  type: ADMIN_UPDATE_QUIZ_PRESET_STATUS_START,
});

export const updateQuizPresetStatusSuccess = (presetId) => ({
  type: ADMIN_UPDATE_QUIZ_PRESET_STATUS_SUCCESS,
  payload : {presetId},
});

export const updateQuizPresetStatusFailed = (error) => ({
  type: ADMIN_UPDATE_QUIZ_PRESET_STATUS_FAILED,
  payload: error,
});

export const updateQuizPreset = (presetId, setting) => ({
  type: ADMIN_UPDATE_QUIZ_PRESET,
  presetId,
  setting,
});

export const updateQuizPresetStart = () => ({
  type: ADMIN_UPDATE_QUIZ_PRESET_START,
});

export const updateQuizPresetSuccess = (presetId, setting) => ({
  type: ADMIN_UPDATE_QUIZ_PRESET_SUCCESS,
  payload: { presetId, setting },
});

export const updateQuizPresetFailed = (error) => ({
  type: ADMIN_UPDATE_QUIZ_PRESET_FAILED,
  payload: error,
});
