<template>
    <ul class="news-list">
        <li v-for="job in this.list" class="post">
            <div class="points">
                {{job.points || 0}}
            </div>
            <div>
                <p class="news-title">
                    <template v-if="job.domain">
                        <a v-bind:href="job.url">
                            {{job.title}}
                        </a>    
                    </template>
                    <template v-else>
                        <router-link v-bind:to="`item/${job.id}`">
                            {{job.title}}
                        </router-link>
                    </template>
                </p>
                <small>
                    {{job.time_ago}} by 
                        <router-link 
                            v-if="job.user"
                            v-bind:to="`/user/${job.user}`" class="link-text">
                            {{job.user}}
                        </router-link>
                        <a :href="job.url" v-else>
                            {{job.domain}}
                        </a>    
                </small>
            </div>
        </li>
    </ul>
</template>

<script>
export default {
    computed : {
        list() {
            return this.$store.state.list
        }
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
.link-text {
    color: #828282
}
</style>
