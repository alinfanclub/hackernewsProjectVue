
import { createStore } from 'vuex'
import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'
 
const store = createStore({
  state(){
    return {
      news: [],
      ask: [],
      jobs: []
    }
  },
  getters,
  mutations,
  actions,
})

export default store