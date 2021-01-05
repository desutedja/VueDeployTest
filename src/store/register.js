import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store(
  {
    state: {
      firstName: '',
      email: ''
    },

    mutation: {
      setFirstName (state, payload) {
        state.firstName = payload.firstName
      },
      setEmail (state, payload) {
        state.email = payload.email
      }
    }
  }
)
