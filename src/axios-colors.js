import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-color-picker-d4fae.firebaseio.com/',
});

export default instance;
