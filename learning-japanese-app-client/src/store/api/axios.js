import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jp-app-server.herokuapp.com/'
});

export default instance;