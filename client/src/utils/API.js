import axios from "axios";

export default {
<<<<<<< HEAD

  signup: credentials => ( axios.post('/api/auth/signup', credentials) ),

  login: credentials => ( axios.post('api/auth/login', credentials) ),
  //
  checkForSession: credentials => ( axios.get('/api/auth/session') ),

=======
  getCoins: function() {
    return axios.get('http://coincap.io/front');
  }
>>>>>>> 507b3ac6915f22358489d3d78012a5e591a7fd4a
};
