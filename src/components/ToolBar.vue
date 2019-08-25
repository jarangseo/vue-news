<template>
    <div class="header">
        <router-link to="/news">News</router-link> |
        <router-link to="/jobs">Jobs</router-link> |
        <router-link to="/ask">Ask</router-link>
        <div>
            <button @click="loginUser1">test</button>
            <ul>
                <li v-for="item in items">{{item}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            items:[]
        }
    },
    methods: {
        // test() {
        //     axios.get('https://jsonplaceholder.typicode.com/users/1')  
        //         .then(response => {
        //             if(response.data.id === 1) {
        //                 console.log('사용자가 인증되었습니다')
        //                 axios.get('https://jsonplaceholder.typicode.com/todos')
        //                     .then(response => {
        //                         console.log(response)
        //                         this.items = response.data
        //                     })
        //             }
        //         })
        //     this.loginUser1()
        // },
        async loginUser1() {
            try {
                var response = await axios.get('https://jsonplaceholder.typicode.com/users/1')
                if (response.data.id === 1){
                    var list = await axios.get('https://jsonplaceholder.typicode.com/todos')
                    this.items = list.data
                }
            } catch(error) {
                // 비동기 요청 뿐만 아니라 일반적인 JS에러까지  catch
                console.log(error)
            }
        }
    }
}
</script>

<style scoped>
    .header {
        color: white;
        background-color: #42b883;
        display: flex;
        padding: 8px;
    }
    .header .router-link-exact-active {
        color: #35495e;
    }
    .header a {
        color: white;
    }
</style>
