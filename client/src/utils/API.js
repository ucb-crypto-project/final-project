import axios from 'axios';

export default {

  signup: credentials => ( axios.post('/api/auth/signup', credentials) ),

  // login: credentials => ( axios.post('/login', credentials) ),
  //
  checkForSession: credentials => ( axios.get('/auth/session') ),

};
