import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        alias: "/tasks",
        name: 'tasks',
        component: () => import('@/views/tasks/index.vue'),
    },
    {
        path: '/tasks/new',
        name: 'tasks-new',
        component: () => import('@/views/tasks/new.vue'),
    },
    {
        path: '/tasks/:id',
        name: 'task-details',
        component: () => import('@/views/tasks/detail.vue'),
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes: routes
})
export default router;
