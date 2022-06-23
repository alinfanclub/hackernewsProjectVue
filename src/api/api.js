import axios from "axios";

// 1. HTTP Request & Response와 관련된 설정들
const config = {
    baseUrl:'https://api.hnpwa.com/v0/'
}
//2. API 함수들을 정리
function fectchNewsList() {
//    return axios.get(config.baseUrl + 'news/1.json');
return axios.get(`${config.baseUrl}news/1.json`);
}

function fetchJobsList() {
    return axios.get(`${config.baseUrl}jobs/1.json`);
}

function fetchAskList() {
    return axios.get(`${config.baseUrl}ask/1.json`)
}
function fetchUserInfo(userName) {
    return axios.get(`${config.baseUrl}user/${userName}.json`)
}
function fetchAskDetail(askId) {
    return axios.get(`${config.baseUrl}item/${askId}.json`)
}

export {
    fectchNewsList,
    fetchJobsList,
    fetchAskList,
    fetchUserInfo,
    fetchAskDetail
}