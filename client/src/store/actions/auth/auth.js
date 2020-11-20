import * as actionTypes from '../types';

export const authUser = (credentials) => ({
  type: actionTypes.AUTH_USER,
  credentials
});

export const authUserStart = () => ({ type: actionTypes.AUTH_USER_START });

export const authUserSuccess = (data) => ({
  type: actionTypes.AUTH_USER_SUCCESS,
  payload: data
});

export const authUserFailed = (error) => ({
  type: actionTypes.AUTH_USER_FAILED,
  payload: error
});

export const authLogout = () => ({ type: actionTypes.LOGOUT });