import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user';
import order from './modules/order';
import product from './modules/product';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    order,
    user,
    product,
  },
});
