import axios from 'axios';

console.log('hey');
console.log(process.env.REACT_APP_API_BASE_URL);

const client = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

client.interceptors.response.use(response => response.data);

export default client;