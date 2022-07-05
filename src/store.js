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
        function filter(){
          const values = Object.values(s.card);
          const keys = Object.keys(s.card);
          let res = s.catalog.filter(el => values.indexOf(el.id) >= 0);
          for(let i = 0; i < res.length; i++){
            for(let k = 0; k < keys.length; k++){
              if(res[i].id == s.card[keys[k]]){
                res[i].pid = keys[k]
              }
            }
          }
          return res
        }
        return s.card ? filter() : []
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