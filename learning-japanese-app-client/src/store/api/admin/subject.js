import axios from '../axios';

export const getSubjectsRequest = async () => {
  return axios.get(`/admin/subjects`);
}

export const createSubjectRequest = async (newSubject) => {
  return axios.post(`/admin/subjects`, newSubject, {
    headers : {
      'Content-type': 'application/json'
    }
  });
}