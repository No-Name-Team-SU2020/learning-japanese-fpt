import {
  TEACHER_GET_STUDENTS_BY_CLASS,
  TEACHER_GET_STUDENTS_BY_CLASS_START,
  TEACHER_GET_STUDENTS_BY_CLASS_SUCCESS,
  TEACHER_GET_STUDENTS_BY_CLASS_FAILED,
} from "../types";

export const getStudentsByClass = (cId) => ({
  type: TEACHER_GET_STUDENTS_BY_CLASS,
  cId,
});

export const getStudentsByClassStart = () => ({
  type: TEACHER_GET_STUDENTS_BY_CLASS_START,
});

export const getStudentsByClassFailed = (error) => ({
  type: TEACHER_GET_STUDENTS_BY_CLASS_FAILED,
  payload: error,
});

export const getStudentsByClassSuccess = (students) => ({
  type: TEACHER_GET_STUDENTS_BY_CLASS_SUCCESS,
  payload: students,
});
