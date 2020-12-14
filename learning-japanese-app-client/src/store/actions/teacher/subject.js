import {
  TEACHER_GET_MY_SUBJECTS,
  TEACHER_GET_MY_SUBJECTS_START,
  TEACHER_GET_MY_SUBJECTS_SUCCESS,
  TEACHER_GET_MY_SUBJECTS_FAILED,
  TEACHER_GET_SUBJECTS_BY_CLASS,
  TEACHER_GET_SUBJECTS_BY_CLASS_START,
  TEACHER_GET_SUBJECTS_BY_CLASS_SUCCESS,
  TEACHER_GET_SUBJECTS_BY_CLASS_FAILED,
} from "../types";

export const getMySubjects = () => ({
  type: TEACHER_GET_MY_SUBJECTS,
});

export const getMySubjectsStart = () => ({
  type: TEACHER_GET_MY_SUBJECTS_START,
});

export const getMySubjectsFailed = (error) => ({
  type: TEACHER_GET_MY_SUBJECTS_FAILED,
  payload: error,
});

export const getMySubjectsSuccess = (subjectList) => ({
  type: TEACHER_GET_MY_SUBJECTS_SUCCESS,
  payload: subjectList,
});

export const getSubjectsByClass = (cId) => ({
  type: TEACHER_GET_SUBJECTS_BY_CLASS,
  cId,
});

export const getSubjectsByClassStart = () => ({
  type: TEACHER_GET_SUBJECTS_BY_CLASS_START,
});

export const getSubjectsByClassFailed = (error) => ({
  type: TEACHER_GET_SUBJECTS_BY_CLASS_FAILED,
  payload: error,
});

export const getSubjectsByClassSuccess = (subjectList) => ({
  type: TEACHER_GET_SUBJECTS_BY_CLASS_SUCCESS,
  payload: subjectList,
});
