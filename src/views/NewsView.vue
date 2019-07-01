<template>
    <div>
        <!-- <ul class="news-list">
            <li v-for="user in this.$store.state.news" class="post">
                <div class="points">
                    {{user.points}}
                </div>
                <div>
                    <p class="news-title">
                        <a v-bind:href="user.url">
                            {{user.title}}
                        </a>    
                    </p>
                    <small>
                        {{user.time_ago}} by 
                        <router-link v-bind:to="`/user/${user.user}`">{{user.user}}</router-link>
                    </small>
                </div>
            </li>
        </ul> -->
        <list-item></list-item>
    </div>
</template>

<script>
// import axios from 'axios'
// import { mapState, mapGetters } from 'vuex'

// export default {
//     computed: {
//         //#4
//         ...mapGetters(['fetchedNews']),
//         // #3
//         // ...mapGetters({
//         //     fetchedNews: 'fetchedNews'
//         // }),
//         // #2
//         // ...mapState({
//         //     news: state => state.news
//         // }),
//         // #1
//         // news() {
//         //     return this.$store.state.news
//         // }
//     },
//     created() {
//         this.$store.dispatch('FETCH_NEWS')
//         // axios는 promise기반
//         // fetchNewsList()
//         //     .then((response) => this.users = response.data)
//         //     .catch((e) => console.log(e))
//     }
// }

import ListItem from '../components/ListItem.vue'
import bus from '../utils/bus.js'

export default {
    created() {
        bus.$emit('start:spinner')
        setTimeout(() => {
            this.$store.dispatch('FETCH_NEWS')
                .then(() => {
                    console.log('fetched')
                    bus.$emit('end:spinner')
                })
                .catch((error) => {
                    console.log(error)
                })
        },3000)
    },
    components: {
        ListItem,
    }
}
</script>


