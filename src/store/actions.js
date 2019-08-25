import {
    fetchNewsList, 
    fetchJosbList, 
    fetchAskList, 
    fetchUserInfo,
    fetchItemInfo,
    fetchList
} from '../api/index.js'

export default {
    // promise
    FETCH_NEWS(context) {
        return fetchNewsList()
            .then((res) => {
                console.log(res)
                // context.commit('SET_NEWS', res.data)
                return res
            })
            .catch((e) => console.log(e))
    },
    // async
    // async FETCH_NEWS(context) {
    //     const response = await fetchNewsList()
    //     context.commit('SET_NEWS', response.data)
    //     return response
    // },
    // promise
    // FETCH_JOBS({commit}) {
    //     return fetchJosbList()
    //         .then(({data}) => {
    //             commit('SET_JOBS', data)
    //         })
    //         .catch((e) => console.log(e))
    // },
    // async
    async FETCH_JOBS({commit}) {
        const response = await fetchJosbList()
        commit('SET_JOBS', response.data)
        return response
    },
    // promise
    // FETCH_ASK({commit}) {
    //     return fetchAskList()
    //         .then(({data}) => {
    //             commit('SET_ASK', data)
    //         })
    //         .catch(e => console.log(e))
    // },
    // async
    async FETCH_ASK({commit}) {
        const response = await fetchAskList()
        commit('SET_ASK', response.data)
        return response
    },
    // promise
    // FETCH_USER({commit}, name) {
    //     return fetchUserInfo(name)
    //         .then(({data}) => {
    //             commit('SET_USER', data)
    //         })
    //         .catch(e => console.log(e))
    // },
    //async 
    async FETCH_USER({commit}, name) {
        const response = await fetchUserInfo(name)
        commit('SET_USER', response.data)
        return response
    },
    //promise
    // FETCH_ITEM({commit}, id) {
    //     return fetchItemInfo(id)
    //         .then(({data}) => {
    //             console.log(data)
    //             commit('SET_ITEM', data)
    //         })
    //         .catch((e) => console.log(e))
    // },
    //async
    async FETCH_ITEM({commit}, id) {
        const response = await fetchItemInfo(id)
        commit('SET_ITEM', response.data)
        return response
    },
    //promise
    // FETCH_LIST({commit}, pagename) {
    //     return fetchList(pagename)
    //         .then((response) => {
    //             console.log(4)
    //             commit('SET_LIST', response.data)
    //             return response
    //         })
    //         .catch((e) => console.log(e))
    // }
    //await
    async FETCH_LIST({commit}, pagename) {
        const response = await fetchList(pagename)
        commit('SET_LIST', response.data)
        return response
    }
}