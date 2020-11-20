import {
  ADMIN_GET_SUBJECTS, ADMIN_GET_SUBJECTS_FAILED, ADMIN_GET_SUBJECTS_START, ADMIN_GET_SUBJECTS_SUCCESS
} from '../types';

export const getSubjects = () => ({ type: ADMIN_GET_SUBJECTS });

export const getSubjectsSuccess = (subjects) => ({
  type: ADMIN_GET_SUBJECTS_SUCCESS,
  payload: subjects
});

export const getSubjectsStart = () => ({ type: ADMIN_GET_SUBJECTS_START });

export const getSubjectsFailed = (error) => ({
  type: ADMIN_GET_SUBJECTS_FAILED,
  payload: error
});
