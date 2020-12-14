import {
  ADMIN_GET_LESSONS, ADMIN_GET_LESSONS_FAILED, ADMIN_GET_LESSONS_START, ADMIN_GET_LESSONS_SUCCESS,
  ADMIN_CREATE_LESSON, ADMIN_CREATE_LESSON_FAILED, ADMIN_CREATE_LESSON_START, ADMIN_CREATE_LESSON_SUCCESS,
  ADMIN_GET_SINGLE_LESSON, ADMIN_GET_SINGLE_LESSON_FAILED, ADMIN_GET_SINGLE_LESSON_SUCCESS, ADMIN_GET_SINGLE_LESSON_START,
  ADMIN_DELETE_LESSON, ADMIN_DELETE_LESSON_FAILED, ADMIN_DELETE_LESSON_START, ADMIN_DELETE_LESSON_SUCCESS,
  ADMIN_UPDATE_LESSON, ADMIN_UPDATE_LESSON_SUCCESS, ADMIN_UPDATE_LESSON_START, ADMIN_UPDATE_LESSON_FAILED
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

export const createLesson = (sId, lesson) => ({
  type: ADMIN_CREATE_LESSON,
  lesson,
  sId,
});

export const createLessonSuccess = (newLesson) => ({
 type: ADMIN_CREATE_LESSON_SUCCESS,
 payload: newLesson
});

export const createLessonStart = () => ({ type: ADMIN_CREATE_LESSON_START });

export const createLessonFailed = (error) => ({
 type: ADMIN_CREATE_LESSON_FAILED,
 payload: error
});

export const getSingleLesson = (lessonId) => ({
  type: ADMIN_GET_SINGLE_LESSON,
  lessonId
});

export const getSingleLessonSuccess = (lesson) => ({
 type: ADMIN_GET_SINGLE_LESSON_SUCCESS,
 payload: lesson
});

export const getSingleLessonStart = () => ({ type: ADMIN_GET_SINGLE_LESSON_START });

export const getSingleLessonFailed = (error) => ({
 type: ADMIN_GET_SINGLE_LESSON_FAILED,
 payload: error
});

export const deleteLesson = (lId) => ({
  type: ADMIN_DELETE_LESSON,
  lId
});

export const deleteLessonStart = () => ({
  type: ADMIN_DELETE_LESSON_START
});

export const deleteLessonSuccess = (lId) => ({
  type: ADMIN_DELETE_LESSON_SUCCESS,
  payload : lId
});

export const deleteLessonFailed = (error) => ({
  type: ADMIN_DELETE_LESSON_FAILED,
  payload: error
});

export const updateLesson = (lId, lesson) => ({
  type: ADMIN_UPDATE_LESSON,
  lesson,
  lId,
});

export const updateLessonSuccess = (lId, newLesson) => ({
 type: ADMIN_UPDATE_LESSON_SUCCESS,
 payload: {lId, newLesson}
});

export const updateLessonStart = () => ({ type: ADMIN_UPDATE_LESSON_START });

export const updateLessonFailed = (error) => ({
 type: ADMIN_UPDATE_LESSON_FAILED,
 payload: error
});