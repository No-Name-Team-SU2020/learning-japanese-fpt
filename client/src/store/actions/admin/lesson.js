import {
  ADMIN_GET_LESSONS, ADMIN_GET_LESSONS_FAILED, ADMIN_GET_LESSONS_START, ADMIN_GET_LESSONS_SUCCESS
} from '../types';

export const getLessons = (subjectId) => ({
   type: ADMIN_GET_LESSONS,
   subjectId
});

export const getLessonsSuccess = (lessons) => ({
  type: ADMIN_GET_LESSONS_SUCCESS,
  payload: lessons
});

export const getLessonsStart = () => ({ type: ADMIN_GET_LESSONS_START });

export const getLessonsFailed = (error) => ({
  type: ADMIN_GET_LESSONS_FAILED,
  payload: error
});
