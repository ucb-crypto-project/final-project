import axios from 'axios';

export default {

  signup: credentials => ( axios.post('/api/auth/signup', credentials) ),

  login: credentials => ( axios.post('api/auth/login', credentials) ),
  //
  checkForSession: credentials => ( axios.get('/api/auth/session') ),

};
