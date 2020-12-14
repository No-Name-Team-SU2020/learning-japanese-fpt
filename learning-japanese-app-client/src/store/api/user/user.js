import axios from '../axios';

export const getProfileRequest = async (token) => {
  axios.defaults.headers.common['token'] = `${token}`;
  return axios.get('/profile');
}