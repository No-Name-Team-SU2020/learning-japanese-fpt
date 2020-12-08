import {
  TEACHER_GET_MY_SUBJECTS,
  TEACHER_GET_MY_SUBJECTS_START,
  TEACHER_GET_MY_SUBJECTS_SUCCESS,
  TEACHER_GET_MY_SUBJECTS_FAILED,
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
