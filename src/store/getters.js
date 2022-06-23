export default {
    fectchNewsList(state) { // fectchNewList 는 이름을 지어준것, api fectchNewList  와는 다르다.
        return state.news;
    },
    userInfo(state) {
        return state.user
    },
    itemData(state) {
        return state.item
    }
  }