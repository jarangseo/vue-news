<template>
    <div>
        <div v-for="job in jobs">{{job.title}}}</div>
    </div>
</template>

<script>
import {fetchJosbList} from '../api'

export default {
    data() {
        return {
            jobs: []
        }
    },
    created() {
        fetchJosbList()
            .then((response) => this.jobs = response.data)
            .catch((e) => console.log(e))
    }
}
</script>

<style>

</style>
