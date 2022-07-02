import {createStore} from 'vuex';
import getList from './assets/js/getList';

const store = createStore({
    state () {
      return {
        catalog: '',
      }
    },
    mutations: {
      loadCatalog(state, payload){
        state.catalog = payload;
      }
    },
    actions: {
      loadCatalog: async(context, payload) => {
        await getList.then(res => payload = res);
        context.commit('loadCatalog', payload)
      }
    }
})

export {store}