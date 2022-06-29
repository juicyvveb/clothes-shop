import * as VueRouter from 'vue-router';
// const router = VueRouter;

import Home from './components/Home.vue';
import Product from './components/Product.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/product/:id', component: Product },
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes, 
})

export {router}