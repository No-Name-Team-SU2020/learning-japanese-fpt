import {
  TEACHER_GET_MY_CLASSES,
  TEACHER_GET_MY_CLASSES_START,
  TEACHER_GET_MY_CLASSES_SUCCESS,
  TEACHER_GET_MY_CLASSES_FAILED,
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
