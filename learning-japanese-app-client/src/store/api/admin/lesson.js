import axios from '../axios';

export const getLessonsRequest = async (subjectId) => {
  return axios.get(`/shared/subjects/${subjectId}/lessons`);
}

export const getSingleLessonRequest = async (lessonId) => {
  return axios.get(`/shared/lessons/${lessonId}`);
}

export const createLessonsRequest = async (newLesson) => {
  return axios.post(`/admin/lessons`, newLesson, {
    headers : {
      'Content-type': 'application/json'
    }
  });
}

export const updateLessonsRequest = async (lessonId,newLesson) => {
  return axios.put(`/admin/lessons/${lessonId}`, newLesson, {
    headers : {
      'Content-type': 'application/json'
    }
  });
}

export const deleteLessonRequest = async (lessonId) => {
  return axios.delete(`/admin/lessons/${lessonId}`);
}