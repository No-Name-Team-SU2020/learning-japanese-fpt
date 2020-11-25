import axios from '../axios';

export const getClassesRequest = async () => {
  return axios.get(`/admin/classes`);
}

export const getSingleClassRequest = async (classId) => {
  return axios.get(`/admin/classes/${classId}`);
}

export const createClassRequest = async (newClass) => {
  return axios.post(`/admin/classes`, newClass, {
    headers : {
      'Content-type': 'application/json'
    }
  });
}

export const updateClassRequest = async (classId ,newClass) => {
  return axios.put(`/admin/classes/${classId}`, newClass, {
    headers : {
      'Content-type': 'application/json'
    }
  });
}

export const deleteClassRequest = async (classId) => {
  return axios.delete(`/admin/classes/${classId}`);
}