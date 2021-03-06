
import { createStore } from 'vuex'
import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'
 
const store = createStore({
  state(){
    return {
      news: [],
      ask: [],
      jobs: [],
      user : {},
      item : {},
      // loadingStatus: false,
      loading : true,
      list : []
    }
  },
  getters,
  mutations,
  actions,
})

export default store