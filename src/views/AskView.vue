<template>
    <div>
        <ul class="news-list">
            <li v-for="item in this.$store.state.ask" class="post">
                <div class="points">
                    {{item.points}}
                </div>
                <div>
                    <p class="news-title">
                        <a v-bind:href="item.url">
                            {{item.title}}
                        </a>    
                    </p>
                    <small>
                        {{item.time_ago}} by 
                        <router-link v-bind:to="`item/${item.id}`">{{item.user}}</router-link>
                    </small>
                </div>
            </li>
        </ul>
<!-- 
        <p v-for="item in this.$store.state.ask">
            <a v-bind:href="item.url">
                {{item.title}}
            </a>
            <small>
                <router-link v-bind:to="`item/${item.id}`">
                    {{item.user}}
                </router-link>
            </small>
        </p> -->
    </div>
</template>

<script>


export default {
    created() {
        this.$store.dispatch('FETCH_ASK')
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