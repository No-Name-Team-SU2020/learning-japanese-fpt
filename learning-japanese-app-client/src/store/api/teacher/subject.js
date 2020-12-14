import axios from '../axios';

export const getMySubjectsRequest = async () => {
  return axios.get(`/teacher/teacher-subjects`);
}

export const getSubjectsByClassRequest = async (cId) => {
  return axios.get(`/shared/class-subjects/${cId}`);
}