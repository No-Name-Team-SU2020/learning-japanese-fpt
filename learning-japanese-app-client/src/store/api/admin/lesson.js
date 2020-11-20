import axios from '../axios';

export const getLessonsRequest = async (subjectId) => {
  return axios.get(`/admin/lessons/${subjectId}`);
}