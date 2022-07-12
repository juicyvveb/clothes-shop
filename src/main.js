import { createApp } from 'vue';
import App from './App.vue';
import {router} from './router';
import {store} from './store';
import Network from './components/NoNetwork.vue';

let promise = fetch('https://www.google.com');
promise
.then(
    () => {
        const app = createApp(App);
        app.use(store);
        app.use(router);
        app.mount('#app');
    },
    () =>{ 
        // store.commit('stateError', e.message);
        const app = createApp(Network);
        app.mount('#app');
    })
    // .then(() => {
    //     const app = createApp(App);
    //     app.use(store);
    //     app.use(router);
    //     app.mount('#app');
    // })





// const app = createApp(App);
// app.use(store);
// app.use(router);
// app.mount('#app')
