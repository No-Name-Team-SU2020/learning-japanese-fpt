import axios from '../axios';

export const authUserRequest = async (credentials) => {
  return axios.post('/login', credentials, {
    headers: {
      'Content-type': 'application/json'
    }
  });
}