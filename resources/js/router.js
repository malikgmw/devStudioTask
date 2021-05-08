import Vue from 'vue';
import Router from 'vue-router';
import * as auth from './services/auth_service';
import store from './store';

Vue.use(Router);

const routes = [
    {
        path: '/',
        name: 'login',
        component: () => import('./views/dashboard/Authentication.vue'),
    },
    {
        path: '/admin',
        name: 'dashboard',
        component: () => import('./views/dashboard/Home.vue'),
        children: [
            {
                path: '',
                name: 'dashboard',
                component: () => import('./views/dashboard/admin/Dashboard.vue')
            },
        ],
        beforeEnter(to, from, next) {
            if (auth.isLoggedIn() && auth.getUserRole() === 'admin') {
                next();
            } else {
                next('/404');
            }
        }
    },
    {
        path: '*',
        name: '404',
        component: () => import('./views/404.vue')
    }
];

const router = new Router({
    mode: 'history',
    routes: routes,
    linkActiveClass: 'active'
});

router.beforeResolve((to, from, next) => {
    store.state.mainMenuStatus = false;
    next();
});

router.afterEach((to, from) => {
    store.state.mainMenuStatus = false;
});

export default router;
