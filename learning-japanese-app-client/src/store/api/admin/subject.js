import axios from '../axios';

export const getSubjectsRequest = async () => {
  return axios.get(`/admin/subjects`);
}

export const getSingleSubjectRequest = async (subjectId) => {
  return axios.get(`/admin/subjects/${subjectId}`);
}

export const createSubjectRequest = async (newSubject) => {
  return axios.post(`/admin/subjects`, newSubject, {
    headers : {
      'Content-type': 'application/json'
    }
  });
}

export const updateSubjectRequest = async (subjectId,newSubject) => {
  return axios.put(`/admin/subjects/${subjectId}`, newSubject, {
    headers : {
      'Content-type': 'application/json'
    }
  });
}

export const deleteSubjectRequest = async (subjectId) => {
  return axios.delete(`/admin/subjects/${subjectId}`);
}