import * as VueRouter from 'vue-router';
// const router = VueRouter;

import Home from './components/Home.vue';
import Product from './components/Product.vue';
import Login from './components/Login.vue';
import Registration from './components/Registration.vue';
import Card from './components/Card.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/product/:id', component: Product },
    { path: '/login', component: Login },
    { path: '/registration', component: Registration },
    { path: '/card', component: Card },
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes, 
})

export {router}