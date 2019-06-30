import {
    fetchNewsList, 
    fetchJosbList, 
    fetchAskList, 
    fetchUserInfo,
    fetchItemInfo
} from '../api/index.js'

export default {
    FETCH_NEWS(context) {
        fetchNewsList()
            .then((res) => {
                console.log(res)
                context.commit('SET_NEWS', res.data)
            })
            .catch((e) => console.log(e))
    },
    FETCH_JOBS({commit}) {
        fetchJosbList()
            .then(({data}) => {
                commit('SET_JOBS', data)
            })
            .catch((e) => console.log(e))
    },
    FETCH_ASK({commit}) {
        fetchAskList()
            .then(({data}) => {
                commit('SET_ASK', data)
            })
            .catch(e => console.log(e))
    },
    FETCH_USER({commit}, name) {
        fetchUserInfo(name)
            .then(({data}) => {
                commit('SET_USER', data)
            })
            .catch(e => console.log(e))
    },
    FETCH_ITEM({commit}, id) {
        fetchItemInfo(id)
            .then(({data}) => {
                console.log(data)
                commit('SET_ITEM', data)
            })
            .catch((e) => console.log(e))
    }
}