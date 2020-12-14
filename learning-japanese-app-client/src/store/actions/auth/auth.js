import { AUTH_USER, AUTH_USER_START, AUTH_USER_SUCCESS, AUTH_USER_FAILED, LOGOUT } from '../types';

export const authUser = (credentials) => ({
  type: AUTH_USER,
  credentials
});

export const authUserStart = () => ({ type: AUTH_USER_START });

export const authUserSuccess = (data) => ({
  type: AUTH_USER_SUCCESS,
  payload: data
});

export const authUserFailed = (error) => ({
  type: AUTH_USER_FAILED,
  payload: error
});

export const authLogout = () => ({ type: LOGOUT });