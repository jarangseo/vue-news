import axios from 'axios'

// 1. HTTP Request &  response 관련 기본 설정
const config = {
    baseUrl: 'https://api.hnpwa.com/v0/'
}

// 2. API함수들을 정리
function fetchNewsList() {
    return axios.get(`${config.baseUrl}news/1.json`)
}

function fetchJosbList() {
    return axios.get(`${config.baseUrl}jobs/1.json`)
}

function fetchAskList() {
    return axios.get(`${config.baseUrl}ask/1.json`)
}

function fetchUserInfo(username) {
    return axios.get(`${config.baseUrl}user/${username}.json`)    
    // console.log(username)
}

function fetchItemInfo(id) {
    return axios.get(`${config.baseUrl}item/${id}.json`)
}

export {
    fetchNewsList,
    fetchJosbList,
    fetchAskList,
    fetchUserInfo,
    fetchItemInfo
}