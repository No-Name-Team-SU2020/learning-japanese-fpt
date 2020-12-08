import axios from '../axios';

export const getMySubjectsRequest = async () => {
  return axios.get(`/teacher/teacher-subjects`);
}