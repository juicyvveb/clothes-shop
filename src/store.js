import {createStore} from 'vuex';
import getList from './assets/js/getList';
import auth from './assets/js/auth';
import {module as db} from './assets/js/database';
import messages from './assets/utils/messages';

const store = createStore({
    state () {
      return {
        catalog: [],
        user: '',
        cart: '',
        allSum: 0,
        error: '',
        searchItem: '',
      }
    },
    getters: {
      cart(s){
        function filter(){
          const values = Object.values(s.cart).map(el => el.productId);
          const keys = Object.keys(s.cart);
          let res = s.catalog.filter(el => values.indexOf(el.id) >= 0);
          for(let i = 0; i < res.length; i++){
            for(let k = 0; k < keys.length; k++){
              if(res[i].id == s.cart[keys[k]].productId){
                res[i].pid = keys[k];
                res[i].size = s.cart[keys[k]].size
                res[i].count = s.cart[keys[k]].count
              }
            }
          }
          return res
        }
        return s.cart ? filter() : []
      },
      allSum(s, getters){
        return getters.cart ? Object.values(getters.cart).reduce((prev,curr) => {
            return curr.count * curr.price + prev
        }, 0) : 0
      },
      error(s){
        return 'Что-то пошло не так' &&  messages[s.error] 
      },
      catalog(s){
        function filter(){
          return s.catalog.filter(el => el.color.includes(s.searchItem.trim()))
        }
        return s.searchItem ? filter() : s.catalog
      }
    },
    mutations: {
      loadCatalog(state, payload){
        state.catalog = payload;
      },
      stateUser(state, payload){
        state.user = payload;
      },
      stateCart(state, payload){
        state.cart = payload;
      },
      stateError(state, payload){
        state.error = payload;
      },
      searchItem(state, payload){
        state.searchItem = payload;
      }
    },
    actions: {
      loadCatalog: async(context, payload) => {
        await getList.then(res => payload = res);
        context.commit('loadCatalog', payload)
      },
      changeSearch(context, payload){
        context.commit('searchItem', payload)
      },
    },
    modules: {
      auth,
      db
    }
})

export {store}