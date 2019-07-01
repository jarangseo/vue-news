import Vue from 'vue'
import VueRouter from 'vue-router'
import UserView from '../views/UserView'
import ItemView from '../views/ItemView'
import createListView from '../views/CreateListView'
import NewsView from '../views/NewsView'
import JobsView from '../views/JobsView'
import AskView  from '../views/AskView'

Vue.use(VueRouter)

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
            component: NewsView
            // component: createListView('NewsView')
        },
        {
            path:'/ask',
            name:'ask',
            component: createListView('AskView'),
            // component: AskView
        },
        {
            path:'/jobs',
            name:'jobs',
            component: createListView('JobsView'),
            // component: JobsView
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