
import ListView from './ListView.vue'
import bus from '../utils/bus.js'

export default function CreateListView(name) {
    return {
        // 재사용할 컴포넌트 옵션들
        name,
        created() {
            bus.$emit('start:spinner')
            setTimeout(() => {
                this.$store.dispatch('FETCH_LIST', this.$route.path)
                    .then(() => {
                        console.log('fetched')
                        bus.$emit('end:spinner')
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            },1000)
        },
        render(createElement){
            return createElement(ListView)
        }
    }
}