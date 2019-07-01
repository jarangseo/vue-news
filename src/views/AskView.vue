<template>
    <div>
        <list-item></list-item>
        <!-- <ul class="news-list">
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
        </ul> -->
    </div>
</template>

<script>
import ListItem from '../components/ListItem.vue'
import bus from '../utils/bus.js'
import Listmixin from '../mixins/ListMixin.js'

export default {
    created() {
        bus.$emit('start:spinner')
        setTimeout(() => {
            this.$store.dispatch('FETCH_ASK')
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
    },
    // mixins: [Listmixin]
}
</script>