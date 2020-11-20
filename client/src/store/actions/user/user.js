import * as actionTypes from '../types';

export const getProfile = (token) => ({
  type: actionTypes.USER_GET_PROFILE,
  token
});

export const getProfileStart = () => ({ type: actionTypes.USER_GET_PROFILE_START });

export const getProfileSuccess = (profile) => ({
  type: actionTypes.USER_GET_PROFILE_SUCCESS,
  payload: profile
});

export const getProfileFailed = (error) => ({
  type: actionTypes.USER_GET_PROFILE_FAILED,
  payload: error
});

