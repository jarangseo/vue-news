<template>
    <div>
        <ul class="news-list">
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
        </ul>
        <!-- <p v-for="user in this.$store.state.news">
            <a v-bind:href="user.url">
                {{user.title}}
            </a>
            <small>{{user.time_ago}} by 
                <router-link v-bind:to="`/user/${user.user}`">{{user.user}}</router-link>
            </small>
        </p> -->
    </div>
</template>

<script>
// import axios from 'axios'
import { mapState, mapGetters } from 'vuex'

export default {
    computed: {
        //#4
        ...mapGetters(['fetchedNews']),
        // #3
        // ...mapGetters({
        //     fetchedNews: 'fetchedNews'
        // }),
        // #2
        // ...mapState({
        //     news: state => state.news
        // }),
        // #1
        // news() {
        //     return this.$store.state.news
        // }
    },
    created() {
        this.$store.dispatch('FETCH_NEWS')
        // axios는 promise기반
        // fetchNewsList()
        //     .then((response) => this.users = response.data)
        //     .catch((e) => console.log(e))
    }
}
</script>

<style scoped>
.news-list {
    margin: 0;
    padding: 0
}
.post {
    list-style: none;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
}
.points {
    width: 80px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #42b883
}
.news-title {
    margin: 0;
}
.news-text {
    color: #828282
}
</style>
