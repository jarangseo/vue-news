import Vue from 'vue'
import VueRouter from 'vue-router'
import NewsView from '../views/NewsView'
import JobsView from '../views/JobsView'
import AskView from '../views/AskView'
import UserView from '../views/UserView'
import ItemView from '../views/ItemView'
import bus from '../utils/bus'
import { store } from '../store/index.js'

Vue.use(VueRouter)

function beforeEnter(to, from, next ) {
    bus.$emit('start:spinner')
    setTimeout(() => {
    store.dispatch('FETCH_LIST', to.name)
        .then((res) => {
            console.log('here')
            console.log(res)
            next()
        })
        .catch((error) => {
        })
    store.dispatch('FETCH_NEWS', to.name)
        .then((res) => {
            console.log('here')
            console.log(res)
            next()
        })
        .catch((error) => {
        })
    },2000)
}

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path:'/',
            redirect:'/news'
        },
        {
            path:'/news',
            name:'news',
            component: NewsView,
            beforeEnter: beforeEnter
        },
        {
            path:'/ask',
            name:'ask',
            component: AskView,
            beforeEnter: beforeEnter
        },
        {
            path:'/jobs',
            name:'jobs',
            component: JobsView,
            beforeEnter: beforeEnter
        },
        {
            path:'/user/:id',
            component:UserView
        },
        {
            path:'/item/:id',
            component:ItemView
        }
    ]
})