<template>
    <div>
        <ul class="news-list">
            <li v-for="job in this.$store.state.jobs" class="post">
                <div class="points">
                    {{job.points || 0}}
                </div>
                <div>
                    <p class="news-title">
                        <a v-bind:href="job.url">
                            {{job.title}}
                        </a>    
                    </p>
                    <small>
                        {{job.time_ago}} by 
                        <a :href="job.url">
                            {{job.domain}}
                        </a>
                    </small>
                </div>
            </li>
        </ul>
<!-- 
        <p v-for="job in this.$store.state.jobs">
            <a :href="job.url">
                {{job.title}}
            </a>
            <small>{{job.domain}}</small>
        </p> -->
    </div>
</template>

<script>

export default {
    created() {
        this.$store.dispatch('FETCH_JOBS')
        // fetchJosbList()
        //     .then((response) => this.jobs = response.data)
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
