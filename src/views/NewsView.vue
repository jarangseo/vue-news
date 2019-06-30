<template>
    <div>
        <div v-for="user in users">{{user.title}}</div>
    </div>
</template>

<script>
// import axios from 'axios'
import {fetchNewsList} from '../api/index.js'
export default {
    data() {
        return {
            users: []
        }
    },
    created() {
        // axios는 promise기반
        fetchNewsList()
            .then((response) => this.users = response.data)
            .catch((e) => console.log(e))
    }
}
</script>

<style>

</style>
