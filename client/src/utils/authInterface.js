
import axios from 'axios'

const AuthInterface = (function() {

  const AUTH_STATE = {
    loggedIn: false,
  }

  return {

    isLoggedIn() {
      return AUTH_STATE.loggedIn
    },

    login(user = {}) {
      Object.assign(AUTH_STATE, { loggedIn: true, user })
    },

    async logout(history) {
      Object.assign(AUTH_STATE, { loggedIn: false, user: {} })

      await axios.get('/logout')
      history.push('/login')

    },

    getUser() {
      return AUTH_STATE.user
    }

  }

})()

export default AuthInterface
