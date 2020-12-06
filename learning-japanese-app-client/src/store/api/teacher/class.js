import axios from '../axios';

export const getMyClassesRequest = async () => {
  return axios.get(`/teacher/teacher-classes`);
}

export const getStudentsByClassRequest = async (classId) => {
  return axios.get(`/teacher/class-students/${classId}`);
}