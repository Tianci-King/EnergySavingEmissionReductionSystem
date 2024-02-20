import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        redirect: '/Home'
    },
    {
        path: '/Home',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '../pages/Home.vue')
    },
    {
        path: '/Form',
        name: 'Form',
        component: () => import(/* webpackChunkName: "about" */ '../pages/Form.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router