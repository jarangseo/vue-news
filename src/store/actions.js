import {
    fetchNewsList, 
    fetchJosbList, 
    fetchAskList, 
    fetchUserInfo,
    fetchItemInfo,
    fetchList
} from '../api/index.js'

export default {
    FETCH_NEWS(context) {
        return fetchNewsList()
            .then((res) => {
                console.log(res)
                context.commit('SET_NEWS', res.data)
                return res
            })
            .catch((e) => console.log(e))
    },
    FETCH_JOBS({commit}) {
        return fetchJosbList()
            .then(({data}) => {
                commit('SET_JOBS', data)
            })
            .catch((e) => console.log(e))
    },
    FETCH_ASK({commit}) {
        return fetchAskList()
            .then(({data}) => {
                commit('SET_ASK', data)
            })
            .catch(e => console.log(e))
    },
    FETCH_USER({commit}, name) {
        return fetchUserInfo(name)
            .then(({data}) => {
                commit('SET_USER', data)
            })
            .catch(e => console.log(e))
    },
    FETCH_ITEM({commit}, id) {
        return fetchItemInfo(id)
            .then(({data}) => {
                console.log(data)
                commit('SET_ITEM', data)
            })
            .catch((e) => console.log(e))
    },
    FETCH_LIST({commit}, pagename) {
        return fetchList(pagename)
            .then((response) => {
                console.log(4)
                commit('SET_LIST', response.data)
                return response
            })
            .catch((e) => console.log(e))
    }
}