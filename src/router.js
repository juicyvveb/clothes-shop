import * as VueRouter from 'vue-router';

import Home from './components/Home.vue';
import Product from './components/Product.vue';
// import Login from './components/Login.vue';
const Login = () => import('./components/Login.vue');
const Registration = () => import('./components/Registration.vue');
import Cart from './components/Cart.vue';
import Art from './components/Art.vue';

const routes = [
    { path: '', component: Home },
    { path: '/product/:id', component: Product },
    { path: '/login', component: Login },
    { path: '/registration', component: Registration },
    { path: '/cart', component: Cart },
    { path: '/art/:type', component: Art },
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes, 
    scrollBehavior(){
        return {top: 0, behavior: 'smooth'}
    }
})

export {router}