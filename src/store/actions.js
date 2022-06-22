import { fectchNewsList, fetchAskList, fetchJobsList } from '../api/index.js'

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
    }
  }