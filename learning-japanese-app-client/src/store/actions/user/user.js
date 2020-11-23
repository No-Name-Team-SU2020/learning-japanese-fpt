import { USER_GET_PROFILE, USER_GET_PROFILE_START, USER_GET_PROFILE_SUCCESS, USER_GET_PROFILE_FAILED,
  USER_CLEAR_PROFILE
} from '../types';

export const getProfile = (token) => ({
  type: USER_GET_PROFILE,
  token
});

export const getProfileStart = () => ({ type: USER_GET_PROFILE_START });

export const getProfileSuccess = (profile) => ({
  type: USER_GET_PROFILE_SUCCESS,
  payload: profile
});

export const getProfileFailed = (error) => ({
  type: USER_GET_PROFILE_FAILED,
  payload: error
});

export const clearProfile = () => ({ type: USER_CLEAR_PROFILE });
