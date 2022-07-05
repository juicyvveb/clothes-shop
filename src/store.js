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
        allSum: 0,
      }
    },
    getters: {
      card(s){
        function filter(){
          const values = Object.values(s.card).map(el => el.productId);
          const keys = Object.keys(s.card);
          let res = s.catalog.filter(el => values.indexOf(el.id) >= 0);
          for(let i = 0; i < res.length; i++){
            for(let k = 0; k < keys.length; k++){
              if(res[i].id == s.card[keys[k]].productId){
                res[i].pid = keys[k];
                res[i].count = s.card[keys[k]].count
              }
            }
          }
          return res
        }
        return s.card ? filter() : []
      },
      allSum(s, getters){
        return getters.card ? Object.values(getters.card).reduce((prev,curr) => {
            return curr.count * curr.price + prev
        }, 0) : 0
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