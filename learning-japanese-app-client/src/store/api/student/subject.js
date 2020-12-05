import axios from '../axios';

export const getMySubjects = async () => {
  return axios.get(`/student/student-subjects`);
}