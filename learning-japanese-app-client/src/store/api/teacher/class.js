import axios from '../axios';

export const getMyClasses = async (teacherId) => {
  return axios.get(`teacher/teacher-classes/${teacherId}`);
}

export const getStudentsByClass = async (classId) => {
  return axios.get(`teacher/class-students/${classId}`);
}