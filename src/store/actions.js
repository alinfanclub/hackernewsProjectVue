import { fectchNewsList, fetchAskList, fetchJobsList, fetchUserInfo, fetchAskDetail } from '../api/api.js'

export default {
    FETCH_NEWS(context) {
        fectchNewsList()
        .then(response => {
            context.commit('SET_NEWS', response.data);
        })
        .catch(error => {
            console.log(error)
        })
    },
    FETCH_ASK(context) {
        fetchAskList()
        .then(response => {
            context.commit('SET_ASK', response.data);
        })
        .catch(error => console.log(error))
    },
    FETCH_JOBS(context) {
        fetchJobsList()
        .then(response => {
            context.commit('SET_JOBS', response.data);
        })
        .catch(error => console.log(error))
    },
    //디스럭처리
    // FETCH_USER({ commit }, username) {
    //     fetchUserInfo(username)
    //     .then( ({data})=> {
    //        commit('SET_USER', data)
    //     })
    //     .catch(error => {
    //         console.log(error)
    //     })
    // }
    FETCH_USER(context, username) {
        fetchUserInfo(username)
        .then( res => {
            context.commit('SET_USER', res.data);
            
        })
        .catch(error => console.log(error))
    },
    FETCH_ITEM({commit}, askId) {
        fetchAskDetail(askId)
        .then(({data}) => {
            commit('SET_ASKDETAIL', data)
        })
        .catch( error => {
            console.log(error)
        })
    }
  }