import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.15.2:8003/api',
  // baseURL: 'http://10.0.2.2:8003/api',
  // baseURL: 'http://10.0.2.2:3333',
  // baseURL: 'http://192.168.15.8:3333',
  headers: {
    'Content-Type': 'application/json'
},

});

export default api;
