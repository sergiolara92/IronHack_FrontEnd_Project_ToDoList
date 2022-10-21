import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/Home.vue'),
        children: [
            {
                path: 'AllTasks',
                name: 'alltasks',
                component: () => import('../views/AllTasks.vue')
            },
            {
                path: 'ToDoTasks',
                name: 'todotasks',
                component: () => import('../views/ToDoTasks.vue')
            },
            {
                path: 'CompletedTasks',
                name: 'completedtasks',
                component: () => import('../views/CompletedTasks.vue')
            }

        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/Login.vue')
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('../views/Register.vue')
    }

];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;