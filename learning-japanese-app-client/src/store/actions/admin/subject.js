import {
  ADMIN_GET_SUBJECTS, ADMIN_GET_SUBJECTS_FAILED, ADMIN_GET_SUBJECTS_START, ADMIN_GET_SUBJECTS_SUCCESS,
  ADMIN_CREATE_SUBJECT, ADMIN_CREATE_SUBJECT_FAILED, ADMIN_CREATE_SUBJECT_START, ADMIN_CREATE_SUBJECT_SUCCESS,
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

export const createSubject = () => ({ type: ADMIN_CREATE_SUBJECT });

export const createSubjectSuccess = (subject) => ({
  type: ADMIN_CREATE_SUBJECT_SUCCESS,
  payload: subject
});

export const createSubjectStart = () => ({ type: ADMIN_CREATE_SUBJECT_START });

export const createSubjectFailed = (error) => ({
  type: ADMIN_CREATE_SUBJECT_FAILED,
  payload: error
});
