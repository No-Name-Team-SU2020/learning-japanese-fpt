import {
  ADMIN_GET_SUBJECTS, ADMIN_GET_SUBJECTS_FAILED, ADMIN_GET_SUBJECTS_START, ADMIN_GET_SUBJECTS_SUCCESS,
  ADMIN_CREATE_SUBJECT, ADMIN_CREATE_SUBJECT_FAILED, ADMIN_CREATE_SUBJECT_START, ADMIN_CREATE_SUBJECT_SUCCESS,
  ADMIN_UPDATE_SUBJECT, ADMIN_UPDATE_SUBJECT_SUCCESS, ADMIN_UPDATE_SUBJECT_FAILED, ADMIN_UPDATE_SUBJECT_START,
  ADMIN_DELETE_SUBJECT, ADMIN_DELETE_SUBJECT_FAILED, ADMIN_DELETE_SUBJECT_START, ADMIN_DELETE_SUBJECT_SUCCESS
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

export const createSubject = (subject) => ({
   type: ADMIN_CREATE_SUBJECT,
   subject
   });

export const createSubjectSuccess = (subject) => ({
  type: ADMIN_CREATE_SUBJECT_SUCCESS,
  payload: subject
});

export const createSubjectStart = () => ({ type: ADMIN_CREATE_SUBJECT_START });

export const createSubjectFailed = (error) => ({
  type: ADMIN_CREATE_SUBJECT_FAILED,
  payload: error
});

export const updateSubject = (sId,subject) => ({
  type: ADMIN_UPDATE_SUBJECT,
  subject,
  sId,
  });

export const updateSubjectSuccess = (sId,newSubject) => ({
 type: ADMIN_UPDATE_SUBJECT_SUCCESS,
 payload: { sId, newSubject }
});

export const updateSubjectStart = () => ({ type: ADMIN_UPDATE_SUBJECT_START });

export const updateSubjectFailed = (error) => ({
 type: ADMIN_UPDATE_SUBJECT_FAILED,
 payload: error
});

export const deleteSubject = (sId) => ({
  type: ADMIN_DELETE_SUBJECT,
  sId
});

export const deleteSubjectStart = () => ({
  type: ADMIN_DELETE_SUBJECT_START
});

export const deleteSubjectSuccess = (sId) => ({
  type: ADMIN_DELETE_SUBJECT_SUCCESS,
  payload : sId
});

export const deleteSubjectFailed = (error) => ({
  type: ADMIN_DELETE_SUBJECT_FAILED,
  payload: error
});