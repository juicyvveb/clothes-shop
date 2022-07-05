import {createStore} from 'vuex';
import getList from './assets/js/getList';
import auth from './assets/js/auth';
import {module as db} from './assets/js/database';

const store = createStore({
    state () {
      return {
        catalog: [],
        user: '',
        toBuy: '',
        card: '',
      }
    },
    getters: {
      card(s){
        return s.card ? s.card: []
      }
    },
    mutations: {
      loadCatalog(state, payload){
        state.catalog = payload;
      },
      stateUser(state, payload){
        state.user = payload;
      },
      stateCard(state, payload){
        state.card = payload;
      },
    },
    actions: {
      loadCatalog: async(context, payload) => {
        await getList.then(res => payload = res);
        context.commit('loadCatalog', payload)
      },
    },
    modules: {
      auth,
      db
    }
})

export {store}