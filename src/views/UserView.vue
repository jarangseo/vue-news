<template>
    <div>
        <p>{{userInfo.id}}</p>
        <p>{{userInfo.karma}}</p>
    </div>
</template>

<script>
// import axios from 'axios'

export default {
    computed: {
        userInfo() {
            return this.$store.state.user
        }
    },
    created() {
        const username = this.$route.params.id
        this.$store.dispatch('FETCH_USER', username)

        // console.log(this.$route.params.id)
        // axios.get(`https://api.hnpwa.com/v0/user/${username}.json`)
    }
}
</script>

<style>

</style>
