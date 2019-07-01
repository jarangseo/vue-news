<template>
    <div class="user-container">
        <div>
            <i class="fas fa-user"></i>
        </div>
        <div class="user-description">
            <!-- <template v-if="info.id">
                <div>username: {{info.id}}</div>
                <div class="time">
                    time: {{info.created}}
                </div>
            </template>
            <template v-else>
                <router-link :to="`/user/${info.user}`">
                    {{info.user}}
                </router-link>
                <div class="time">
                    {{info.time_ago}}
                </div>
            </template> -->
            <slot name="username">

            </slot>
            <div class="time">
                <slot name="time">

                </slot>
                <slot name="karma">
                
                </slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        info: Object
    }
    // computed: {
    //     userInfo() {
    //         return this.$store.state.user
    //     }
    // },
}
</script>

<style scoped>
.user-container {
    display:flex;
    align-items:center;
    padding: 0.5rem;
}
.fa-user {
    font-size: 2.5rem;
}
.user-description {
    padding-left: 8px;
}
.time {
    font-size: 0.7rem;
}
</style>
