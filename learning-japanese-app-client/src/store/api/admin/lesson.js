import axios from '../axios';

export const getLessonsRequest = async (subjectId) => {
  return axios.get(`/shared/subjects/${subjectId}/lessons`);
}

export const getSingleLessonRequest = async (lessonId) => {
  return axios.get(`/shared/lessons/${lessonId}`);
}

export const createLessonRequest = async (sId, newLesson) => {
  return axios.post(`/admin/subjects/${sId}/lessons`, newLesson, {
    headers : {
      'Content-type': 'application/json'
    }
  });
}

export const updateLessonRequest = async (lessonId, newLesson) => {
  return axios.put(`/admin/lessons/${lessonId}`, newLesson, {
    headers : {
      'Content-type': 'application/json'
    }
  });
}

export const deleteLessonRequest = async (lessonId) => {
  return axios.delete(`/admin/lessons/${lessonId}`);
}