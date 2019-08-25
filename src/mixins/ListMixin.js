import bus from '../utils/bus.js'

export default {
    created() {
        bus.$emit('start:spinner')
        // const name = (this.$route.name)
        // debugger
        // console.log(name)
        setTimeout(() => {
            this.$store.dispatch('FETCH_LIST', this.$route.path)
                .then(() => {
                    console.log(5)
                    console.log('fetched')
                    bus.$emit('end:spinner')
                })
                .then(() => {
                    console.log(6)
                })
                .catch((error) => {
                })
            })
        }
}