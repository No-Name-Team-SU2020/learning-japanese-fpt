import {
  TEACHER_GET_MY_CLASSES,
  TEACHER_GET_MY_CLASSES_START,
  TEACHER_GET_MY_CLASSES_SUCCESS,
  TEACHER_GET_MY_CLASSES_FAILED,
  TEACHER_GET_CLASSES_BY_SUBJECT,
  TEACHER_GET_CLASSES_BY_SUBJECT_START,
  TEACHER_GET_CLASSES_BY_SUBJECT_SUCCESS,
  TEACHER_GET_CLASSES_BY_SUBJECT_FAILED,
} from "../types";

export const getClassesByTeacher = () => ({
  type: TEACHER_GET_MY_CLASSES,
});

export const getClassesByTeacherStart = () => ({
  type: TEACHER_GET_MY_CLASSES_START,
});

export const getClassesByTeacherFailed = (error) => ({
  type: TEACHER_GET_MY_CLASSES_FAILED,
  payload: error,
});

export const getClassesByTeacherSuccess = (classes) => ({
  type: TEACHER_GET_MY_CLASSES_SUCCESS,
  payload: classes,
});

export const getClassesBySubject = (sId) => ({
  type: TEACHER_GET_CLASSES_BY_SUBJECT,
  sId,
});

export const getClassesBySubjectStart = () => ({
  type: TEACHER_GET_CLASSES_BY_SUBJECT_START,
});

export const getClassesBySubjectFailed = (error) => ({
  type: TEACHER_GET_CLASSES_BY_SUBJECT_FAILED,
  payload: error,
});

export const getClassesBySubjectSuccess = (classes) => ({
  type: TEACHER_GET_CLASSES_BY_SUBJECT_SUCCESS,
  payload: classes,
});
