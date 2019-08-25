import axios from 'axios'

// 1. HTTP Request &  response 관련 기본 설정
const config = {
    baseUrl: 'https://api.hnpwa.com/v0/'
}

// 2. API함수들을 정리
async function fetchNewsList() {
    try {
        const response = await axios.get(`${config.baseUrl}news/1.json`)
        return response
    } catch(error) {
        console.log(error)
    }
}

function fetchJosbList() {
    return axios.get(`${config.baseUrl}jobs/1.json`)
}

function fetchAskList() {
    return axios.get(`${config.baseUrl}ask/1.json`)
}

function fetchList(pageName) {
    return axios.get(`https://api.hnpwa.com/v0/${pageName}/1.json`)
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
    fetchList,
    fetchUserInfo,
    fetchItemInfo
}