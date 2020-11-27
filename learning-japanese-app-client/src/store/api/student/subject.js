import axios from '../axios';

export const getMySubjects = async (studentId) => {
  return axios.get(`student/student-subjects/${studentId}`);
}