import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        component: ()=>import('../components/container/src/index.vue'),
        children: [{
            path: "/",
            component: ()=>import('../views/Home.vue')
        },
        {
            path: "/chooseIcon",
            component: () => import('../views/chooseIcon/index.vue')
        },
        {
            path: "/chooseArea",
            component: () => import('../views/chooseArea/index.vue')
        },
        {
            path: "/trend",
            component: () => import('../views/trend/index.vue')
        },
        {
            path: "/notification",
            component: () => import('../views/notification/index.vue')
        },
        {
            path: "/menu",
            component: () => import('../views/menu/index.vue')
        },
        {
            path: "/progress",
            component: () => import('../views/progress/index.vue')
        },
        {
            path: "/chooseTime",
            component: () => import('../views/chooseTime/index.vue')
        },
        {
            path: "/chooseDate",
            component: () => import('../views/chooseDate/index.vue')
        },
        {
            path: "/chooseCity",
            component: () => import('../views/chooseCity/index.vue')
        }
    ]
    },

]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router