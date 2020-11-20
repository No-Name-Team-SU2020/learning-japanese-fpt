import axios from '../axios';

export const getSubjectsRequest = async () => {
  return axios.get(`/admin/subjects`);
}