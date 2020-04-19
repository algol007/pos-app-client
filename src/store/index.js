import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

axios.defaults.headers.common.authorization = 'baca-bismillah';

export default new Vuex.Store({
  state: {
    url: process.env.VUE_APP_BASE_URL,
    products: null,
    selected: [],
    orders: null,
  },
  mutations: {
    product(state, data) {
      state.products = data;
    },
    order(state, data) {
      state.orders = data;
    },
    cancel(state) {
      state.selected = [];
    },
    add(state, data) {
      const items = state.selected.find((item) => item.data.id === data.data.id);
      if (!items) {
        state.selected.push(data);
      }
    },
    addQty(state, data) { // eslint-disable-line 
      const items = state.selected.find((item) => item.data.id === data.data.id);
      if (items) {
        items.qty += 1;
      }
    },
    reduceQty(state, data) { // eslint-disable-line 
      const items = state.selected.find((item) => item.data.id === data.data.id);
      if (items) {
        items.qty -= 1;
      }
    },
  },
  actions: {
    addQty(context, data) {
      context.commit('addQty', data);
    },
    reduceQty(context, data) {
      context.commit('reduceQty', data);
    },
    addOrder(context, data) {
      context.commit('add', data);
    },
    cancelOrder(context) {
      context.commit('cancel');
    },
    getAllItems(context) {
      axios
        .get(context.state.url + 'product') // eslint-disable-line
        .then((res) => {
          context.commit('product', res.data.products.rows);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    searchItem(context, data) {
      axios
        .get(context.state.url + `product?search=${data}`) // eslint-disable-line
        .then((res) => {
          context.commit('product', res.data.products.rows);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getAllOrders(context) {
      axios
        .get(context.state.url + 'order') //eslint-disable-line
        .then((res) => {
          context.commit('order', res.data.orders.rows);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  modules: {
  },
});
